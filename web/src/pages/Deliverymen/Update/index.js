import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Form } from '@rocketseat/unform';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import api from '~/services/api';
import history from '~/services/history';

import Button from '~/components/Button';
import AvatarInput from '../AvatarInput';

export default function UpdateDeliverymen({ location }) {
  const deliveryman = location.state ? location.state.deliveryman : null;

  async function handleSubmit(data) {
    try {
      await api.put(`deliverymen/${deliveryman.id}`, data);
      toast.success('Entregador atualizado');
      history.push('/deliverymen');
    } catch (err) {
      toast.error(
        'Erro na atualização. Preencha os campos corretamente ou tente mais tarde'
      );
    }
  }

  const schema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string().email(),
    avatar_id: Yup.number(),
  });

  return (
    <Form onSubmit={handleSubmit} schema={schema} initialData={deliveryman}>
      <header>
        <h1>Cadastro de entregadores</h1>

        <div>
          <Link to="/deliverymen">
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
        <AvatarInput name="avatar_id" />
        <span>
          <Input name="name" type="text" label="nome" />
        </span>
        <span>
          <Input name="email" type="email" label="email" />
        </span>
      </div>
    </Form>
  );
}
