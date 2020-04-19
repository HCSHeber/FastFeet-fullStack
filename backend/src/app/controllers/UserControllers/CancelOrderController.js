import Order from '../../models/Order';
import Problem from '../../models/DeliveryProblem';
import Deliveryman from '../../models/Deliveryman';
import Recipient from '../../models/Recipient';

import Queue from '../../../lib/Queue';
import CancellationFromProblemMail from '../../jobs/CancellationFromProblemMail';

class CancelOrderController {
  async delete(req, res) {
    const problem = await Problem.findByPk(req.params.id);

    if (!problem) {
      return res.status(400).json({ error: 'Problem does not exists' });
    }

    const order = await Order.findOne({
      where: { id: problem.delivery_id },
      include: [
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['name', 'email'],
        },
        {
          model: Recipient,
          as: 'recipient',
          attributes: [
            'name',
            'street',
            'house_number',
            'cep',
            'city',
            'state',
          ],
        },
      ],
    });

    if (!order) {
      return res.status(400).json({ error: 'Order does not exists' });
    }

    await order.destroy();

    await Queue.add(CancellationFromProblemMail.key, { order, problem });

    return res.json({ deletedOrder: order });
  }
}

export default new CancelOrderController();
