import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MdSearch,
  MdAdd,
  MdMoreHoriz,
  MdDeleteForever,
  MdModeEdit,
} from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';

import Button from '~/components/Button';
import ActionBox from '~/components/ActionsBox';

import { Container } from './styles';

export default function Recipients() {
  const [recipients, setRecipients] = useState([]);
  const [actionBoxVisibility, setActionBoxVisibility] = useState(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    async function getRecipients() {
      const response = await api.get(`recipients?name=${filter}`);
      setRecipients(response.data);
    }
    getRecipients();
  }, [filter]);

  function handleActiveActionBox(id) {
    if (actionBoxVisibility === id) {
      return setActionBoxVisibility(null);
    }

    return setActionBoxVisibility(id);
  }

  function handleSetFilter(event) {
    const text = event.target.value;

    return setFilter(text);
  }

  async function handleDelete(id) {
    // eslint-disable-next-line no-alert
    const confirm = window.confirm(`Deletar destinatário de ID:  #${id}?`);

    if (confirm) {
      try {
        await api.delete(`recipients/${id}`);
        toast.success('Destinatário excluído');
      } catch (err) {
        toast.error('Erro ao excluir destinatário. Tente novamente');
      }
    }
  }

  return (
    <Container>
      <h1>Gerenciando destinatários</h1>

      <div id="topSection">
        <div id="filterInput">
          <label htmlFor="filter">
            <MdSearch color="#757575" size={20} />
            <input
              id="filter"
              type="text"
              placeholder="Buscar por entregadores"
              onChange={handleSetFilter}
            />
          </label>
        </div>

        <Link to="/recipients/create">
          <Button>
            <>
              <MdAdd color="#fff" size={22} />
              cadastrar
            </>
          </Button>
        </Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>nome</th>
            <th>endereço</th>
            <th>ações</th>
          </tr>
        </thead>
        <tbody>
          {recipients.map(recipient => (
            <tr key={recipient.name + recipient.id}>
              <td>#{recipient.id}</td>
              <td>{recipient.name}</td>
              <td>{recipient.street}</td>
              <td>
                <div id="actionsCell">
                  <MdMoreHoriz
                    size={25}
                    onClick={() => handleActiveActionBox(recipient.id)}
                  />
                  {actionBoxVisibility === recipient.id ? (
                    <ActionBox visible>
                      <>
                        <span>
                          <Link
                            to={{
                              pathname: `/recipients/${recipient.id}/update`,
                              state: {
                                recipient,
                              },
                            }}
                          >
                            <MdModeEdit color="#4D85EE" />
                            editar
                          </Link>
                        </span>

                        <button
                          type="button"
                          onClick={() => handleDelete(recipient.id)}
                        >
                          <span>
                            <MdDeleteForever color="#DE3B3B" />
                            excluir
                          </span>
                        </button>
                      </>
                    </ActionBox>
                  ) : null}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
