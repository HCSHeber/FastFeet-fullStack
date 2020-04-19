import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@rocketseat/unform';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import api from '~/services/api';
import history from '~/services/history';

import Button from '~/components/Button';

import { FormContainer } from './styles';

export default function CreateRecipients() {
  async function handleSubmit(data) {
    try {
      await api.post('recipients', data);
      toast.success('Novo destinatário cadastrado');
      history.push('/recipients');
    } catch (err) {
      toast.error(
        'Erro no cadastro. Preencha os campos corretamente ou tente mais tarde'
      );
    }
  }

  const schema = Yup.object().shape({
    name: Yup.string().required('Este é um campo obrigatório'),
    street: Yup.string().required('Este é um campo obrigatório'),
    house_number: Yup.string().required('Este é um campo obrigatório'),
    complement: Yup.string(),
    city: Yup.string().required('Este é um campo obrigatório'),
    state: Yup.string().required('Este é um campo obrigatório'),
    cep: Yup.string().required('Este é um campo obrigatório'),
  });

  return (
    <FormContainer onSubmit={handleSubmit} schema={schema}>
      <header>
        <h1>Cadastro de destinatários</h1>

        <div>
          <Link to="/recipients">
            <Button type="button" id="back">
              <MdKeyboardArrowLeft size={25} />
              voltar
            </Button>
          </Link>
          <Button type="submit" id="save">
            <MdCheck size={25} />
            salvar
          </Button>
        </div>
      </header>
      <div id="form">
        <span>
          <Input label="nome" type="text" name="name" />
        </span>

        <div id="middleSection">
          <span>
            <Input label="rua" type="text" name="street" />
          </span>

          <span>
            <Input label="número" type="number" name="house_number" />
          </span>

          <span>
            <Input label="complemento" type="text" name="complement" />
          </span>
        </div>

        <div id="bottomSection">
          <span>
            <Input label="cidade" type="text" name="city" />
          </span>

          <span>
            <Input label="estado" type="text" name="state" />
          </span>

          <span>
            <Input label="CEP" type="text" name="cep" />
          </span>
        </div>
      </div>
    </FormContainer>
  );
}
