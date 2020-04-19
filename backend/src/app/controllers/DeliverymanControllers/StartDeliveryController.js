import { Op } from 'sequelize';
import { startOfDay, endOfDay } from 'date-fns';

import Order from '../../models/Order';

class StartDeliveryController {
  async update(req, res) {
    const deliveriesOfDay = await Order.findAll({
      where: {
        deliveryman_id: req.params.id,
        canceled_at: null,
        start_date: {
          [Op.between]: [startOfDay(new Date()), endOfDay(new Date())],
        },
      },
    });

    if (deliveriesOfDay.length === 5) {
      return res.status(400).json({ error: 'Daily deliveries limit reached' });
    }

    const delivery = await Order.findOne({
      where: { deliveryman_id: req.params.id, id: req.params.orderId },
    });

    if (!delivery) {
      return res.status(400).json({ error: 'Delivery does not exists' });
    }

    const setStart = await delivery.update({
      start_date: new Date(),
    });

    return res.json(setStart);
  }
}

export default new StartDeliveryController();
