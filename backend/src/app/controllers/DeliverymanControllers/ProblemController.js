import * as Yup from 'yup';

import DeliveryProblem from '../../models/DeliveryProblem';
import Order from '../../models/Order';

class ProblemController {
  async index(req, res) {
    const id = req.query.orderId;
    if (id) {
      const deliveryProblems = await DeliveryProblem.findAll({
        where: {
          delivery_id: id,
        },
      });
      return res.json(deliveryProblems);
    }
    const deliveryProblems = await DeliveryProblem.findAll({});
    return res.json(deliveryProblems);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;

    const checkOrderExistence = await Order.findByPk(id);

    if (!checkOrderExistence) {
      return res.status(400).json({ error: 'This order do not exists' });
    }

    const Deliveryproblem = await DeliveryProblem.create({
      delivery_id: id,
      description: req.body.description,
    });

    return res.json(Deliveryproblem);
  }
}

export default new ProblemController();
