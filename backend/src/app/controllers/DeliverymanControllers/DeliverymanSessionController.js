import Deliveryman from '../../models/Deliveryman';
import File from '../../models/File';

class DeliverymanSessionController {
  async store(req, res) {
    const { id } = req.body;

    const deliveryman = await Deliveryman.findOne({
      where: { id },
      include: [{ model: File, as: 'avatar', attributes: ['path', 'url'] }],
    });

    if (!deliveryman) {
      return res.status(401).json({ error: 'Deliveryman not found' });
    }

    return res.json(deliveryman);
  }
}

export default new DeliverymanSessionController();
