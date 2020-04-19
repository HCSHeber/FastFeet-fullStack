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

export default function UpdateRecipient({ location }) {
  const recipient = location.state ? location.state.recipient : null;

  async function handleSubmit(data) {
    try {
      await api.put(`/recipients/${recipient.id}`, data);
      toast.success('Destinatário atualizado');
      history.push('/recipients');
    } catch (err) {
      toast.error(
        'Erro na atualização. Preencha os campos corretamente ou tente mais tarde'
      );
    }
  }

  const schema = Yup.object().shape({
    name: Yup.string(),
    street: Yup.string(),
    house_number: Yup.string(),
    complement: Yup.string(),
    city: Yup.string(),
    state: Yup.string(),
    cep: Yup.string(),
  });

  return (
    <FormContainer
      onSubmit={handleSubmit}
      schema={schema}
      initialData={recipient}
    >
      <header>
        <h1>Edição de destinatários</h1>

        <div>
          <Link to="/recipients">
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
