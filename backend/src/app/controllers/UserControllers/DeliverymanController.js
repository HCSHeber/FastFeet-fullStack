import * as Yup from 'yup';
import { Op } from 'sequelize';

import Deliveryman from '../../models/Deliveryman';
import File from '../../models/File';

class DeliverymanController {
  async index(req, res) {
    const filter = req.query.name;
    const deliverymen = filter
      ? await Deliveryman.findAll({
          where: { name: { [Op.startsWith]: filter } },
          include: [{ model: File, as: 'avatar', attributes: ['path', 'url'] }],
        })
      : await Deliveryman.findAll({
          include: [{ model: File, as: 'avatar', attributes: ['path', 'url'] }],
        });

    return res.json(deliverymen);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      avatar_id: Yup.number(),
      email: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const checkEmailExistence = await Deliveryman.findOne({
      where: { email: req.body.email },
    });

    if (checkEmailExistence) {
      return res.status(400).json({ error: 'Email already registred' });
    }

    const deliveryman = await Deliveryman.create(req.body);

    return res.json(deliveryman);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      avatar_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    if (req.body.email) {
      const checkEmailExistence = await Deliveryman.findOne({
        where: { email: req.body.email, id: { [Op.ne]: req.params.id } },
      });

      if (checkEmailExistence) {
        return res.status(400).json({ error: 'Email already registred' });
      }
    }

    const deliveryman = await Deliveryman.findByPk(req.params.id);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    await deliveryman.update(req.body);

    const { id, name, avatar } = await Deliveryman.findByPk(req.userId, {
      include: [
        {
          model: File,
          as: 'avatar',
          attribures: ['id', 'path', 'url'],
        },
      ],
    });
    return res.json(id, name, avatar);
  }

  async delete(req, res) {
    const deliveryman = await Deliveryman.findByPk(req.params.id);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    await deliveryman.destroy();

    return res.json({ deletedDeliveryman: deliveryman });
  }
}
export default new DeliverymanController();
