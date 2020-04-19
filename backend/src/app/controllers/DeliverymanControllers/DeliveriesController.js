import Order from '../../models/Order';
import Recipient from '../../models/Recipient';

class DeliveriesController {
  async index(req, res) {
    const deliveries = await Order.findAll({
      where: {
        deliveryman_id: req.params.id,
        canceled_at: null,
      },
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: [
            'city',
            'name',
            'street',
            'house_number',
            'cep',
            'state',
          ],
        },
      ],
    });
    return res.json(deliveries);
  }
}

export default new DeliveriesController();
