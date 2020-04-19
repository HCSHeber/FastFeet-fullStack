import * as Yup from 'yup';

import Order from '../../models/Order';
import Signature from '../../models/Signature';
import Deliveryman from '../../models/Deliveryman';

class DeliveriesController {
  async update(req, res) {
    const schema = Yup.object().shape({
      signature_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const deliveryman = await Deliveryman.findByPk(req.params.id);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    const delivery = await Order.findOne({
      where: { id: req.params.orderId, end_date: null },
    });

    if (!delivery) {
      return res.status(400).json({ error: 'Delivery does not exists' });
    }

    const signature = await Signature.findByPk(req.body.signature_id);

    if (!signature) {
      return res.status(400).json({ error: 'Signature does not exists' });
    }

    const setFinished = await delivery.update({
      signature_id: req.body.signature_id,
      end_date: new Date(),
    });

    return res.json(setFinished);
  }
}

export default new DeliveriesController();
