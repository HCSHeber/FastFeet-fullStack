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

export default function CreateDeliverymen() {
  async function handleSubmit(data) {
    try {
      await api.post('deliverymen', data);
      toast.success('Novo entregador cadastrado');
      history.push('/deliverymen');
    } catch (err) {
      toast.error(
        'Erro no cadastro. Preencha os campos corretamente ou tente mais tarde'
      );
    }
  }

  const schema = Yup.object().shape({
    name: Yup.string().required('Este é um campo obrigatório'),
    email: Yup.string()
      .email()
      .required('Este é um campo obrigatório'),
    avatar_id: Yup.number(),
  });

  return (
    <Form onSubmit={handleSubmit} schema={schema}>
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
