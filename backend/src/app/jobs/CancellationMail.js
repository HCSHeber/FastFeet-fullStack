import Mail from '../../lib/Mail';

class CancellationMail {
  get key() {
    return 'CancellationMail';
  }

  async handle({ data }) {
    const { order } = data;

    await Mail.sendMail({
      to: `${order.deliveryman.name} <${order.deliveryman.email}>`,
      subject: 'Entrega cancelada',
      template: 'cancellation',
      context: {
        deliveryman: order.deliveryman.name,
        product: order.product,
        recipient: order.recipient.name,
        street: order.recipient.street,
        house_number: order.recipient.house_number,
        cep: order.recipient.cep,
        city: order.recipient.city,
        state: order.recipient.state,
      },
    });
  }
}

export default new CancellationMail();
