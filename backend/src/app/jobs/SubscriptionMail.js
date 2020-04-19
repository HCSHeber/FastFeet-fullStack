import Mail from '../../lib/Mail';

class SubscribeMail {
  get key() {
    return 'SubscriptionMail';
  }

  async handle({ data }) {
    const { deliveryman, recipient, product } = data;

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Nova entrega',
      template: 'subscription',
      context: {
        deliveryman: deliveryman.name,
        product,
        recipient: recipient.name,
        street: recipient.street,
        house_number: recipient.house_number,
        cep: recipient.cep,
        city: recipient.city,
        state: recipient.state,
      },
    });
  }
}

export default new SubscribeMail();
