import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@rocketseat/unform';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import api from '~/services/api';
import history from '~/services/history';

import { FormContainer } from './styles';

import Button from '~/components/Button';

export default function UpdateOrders({ location }) {
  const order = location.state ? location.state.order : null;
  const [deliverymen, setDeliverymen] = useState([]);
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    async function getFormOptions() {
      const deliverymenResponse = await api.get('deliverymen');
      setDeliverymen(deliverymenResponse.data);
      const recipientsResponse = await api.get('recipients');
      setRecipients(recipientsResponse.data);
    }
    getFormOptions();
  }, []);
  async function handleSubmit(data) {
    try {
      await api.put(`orders/${order.id}`, data);
      toast.success('Encomenda atualizada.');
      history.push('/orders');
    } catch (err) {
      toast.error(
        'Erro na atualização. Preencha os campos corretamente ou tente mais tarde'
      );
    }
  }

  const schema = Yup.object().shape({
    recipient_id: Yup.string(),
    deliveryman_id: Yup.string(),
    product: Yup.string(),
  });

  return (
    <FormContainer onSubmit={handleSubmit} schema={schema} initialData={order}>
      <header>
        <h1>Cadastro de encomendas</h1>

        <div>
          <Link to="/orders">
            <Button type="button" id="back">
              <>
                <MdKeyboardArrowLeft size={25} />
                voltar
              </>
            </Button>
          </Link>
          <Button type="submit" id="save">
            <>
              <MdCheck size={25} />
              salvar
            </>
          </Button>
        </div>
      </header>

      <div id="form">
        <div id="topSection">
          <span>
            <Input
              label="Destinatário"
              name="recipient_id"
              type="text"
              list="recipientList"
              autoComplete="on"
            />
            <datalist id="recipientList">
              {recipients.map(recipient => (
                <option value={recipient.id}>{recipient.name}</option>
              ))}
            </datalist>
          </span>

          <span>
            <Input
              label="Entregador"
              name="deliveryman_id"
              type="text"
              list="deliverymanList"
              autoComplete="on"
            />
            <datalist id="deliverymanList">
              {deliverymen.map(deliveryman => (
                <option value={deliveryman.id}>{deliveryman.name}</option>
              ))}
            </datalist>
          </span>
        </div>

        <span>
          <Input label="Nome do produto" name="product" type="text" id="name" />
        </span>
      </div>
    </FormContainer>
  );
}
