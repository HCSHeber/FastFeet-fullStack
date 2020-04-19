import Mail from '../../lib/Mail';

class CancellationFromProblemMail {
  get key() {
    return 'CancellationFromProblemMail';
  }

  async handle({ data }) {
    const { order, problem } = data;

    await Mail.sendMail({
      to: `${order.deliveryman.name} <${order.deliveryman.email}>`,
      subject: 'Entrega cancelada',
      template: 'cancellationFromProblem',
      context: {
        deliveryman: order.deliveryman.name,
        product: order.product,
        recipient: order.recipient.name,
        street: order.recipient.street,
        house_number: order.recipient.house_number,
        cep: order.recipient.cep,
        city: order.recipient.city,
        state: order.recipient.state,
        problem: problem.description,
      },
    });
  }
}

export default new CancellationFromProblemMail();
