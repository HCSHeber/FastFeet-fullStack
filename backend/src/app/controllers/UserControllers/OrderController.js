import * as Yup from 'yup';
import { Op } from 'sequelize';

import Order from '../../models/Order';
import Recipient from '../../models/Recipient';
import Deliveryman from '../../models/Deliveryman';
import Signature from '../../models/Signature';

import Queue from '../../../lib/Queue';

import SubscriptionMail from '../../jobs/SubscriptionMail';
import CancellationMail from '../../jobs/CancellationMail';

class OrderController {
  async index(req, res) {
    const filter = req.query.product;
    const orders = filter
      ? await Order.findAll({
          where: { product: { [Op.startsWith]: filter } },
          include: [
            {
              model: Recipient,
              as: 'recipient',
              attributes: [
                'name',
                'state',
                'city',
                'street',
                'house_number',
                'cep',
              ],
            },
            {
              model: Deliveryman,
              as: 'deliveryman',
              attributes: ['name'],
            },
            {
              model: Signature,
              as: 'signature',
              attributes: ['path', 'url'],
            },
          ],
        })
      : await Order.findAll({
          include: [
            {
              model: Recipient,
              as: 'recipient',
              attributes: [
                'name',
                'state',
                'city',
                'street',
                'house_number',
                'cep',
              ],
            },
            {
              model: Deliveryman,
              as: 'deliveryman',
              attributes: ['name'],
            },
            {
              model: Signature,
              as: 'signature',
              attributes: ['path', 'url'],
            },
          ],
        });
    return res.json(orders);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Request format is not valid' });
    }

    const { deliveryman_id, recipient_id } = req.body;

    const deliveryman = await Deliveryman.findByPk(deliveryman_id);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    const recipient = await Recipient.findByPk(recipient_id);

    if (!recipient) {
      return res.status(400).json({ error: 'Recipient does not exists' });
    }

    const order = await Order.create(req.body);

    await Queue.add(SubscriptionMail.key, {
      deliveryman,
      recipient,
      product: req.body.product,
    });

    return res.json(order);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Request format is not valid' });
    }

    const order = await Order.findByPk(req.params.id);

    if (!order) {
      return res.status(400).json({ error: 'Order does not exists' });
    }

    const { deliveryman_id, recipient_id } = req.body;

    const deliveryman = await Deliveryman.findByPk(deliveryman_id);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    const recipient = await Recipient.findByPk(recipient_id);

    if (!recipient) {
      return res.status(400).json({ error: 'Recipient does not exists' });
    }

    const updatedOrder = await order.update(req.body);

    return res.json(updatedOrder);
  }

  async delete(req, res) {
    const order = await Order.findOne({
      where: { id: req.params.id },
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

    await Queue.add(CancellationMail.key, { order });

    return res.json({ deletedOrder: order });
  }
}

export default new OrderController();
