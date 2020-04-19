import React, { useState, useEffect } from 'react';
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

import { Container } from './styles';

import ActionBox from '~/components/ActionsBox';
import Button from '~/components/Button';

export default function Deliverymen() {
  const [deliverymen, setDeliverymen] = useState([]);
  const [actionBoxVisibility, setActionBoxVisibility] = useState(false);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    async function getDeliverymen() {
      const response = await api.get(`/deliverymen?name=${filter}`);
      setDeliverymen(response.data);
    }
    getDeliverymen();
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
    const confirm = window.confirm(`Deletar entregador de ID:  #${id}?`);

    if (confirm) {
      try {
        await api.delete(`deliverymen/${id}`);
        toast.success('Entregador excluído');
      } catch (err) {
        toast.error('Erro ao excluir destinatário. Tente novamente');
      }
    }
  }

  return (
    <Container>
      <h1>Gerenciando entregadores</h1>

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

        <Link to="/deliverymen/create">
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
            <th>foto</th>
            <th>nome</th>
            <th>email</th>
            <th>ações</th>
          </tr>
        </thead>
        <tbody>
          {deliverymen.map(deliveryman => (
            <tr key={deliveryman.name + deliveryman.id}>
              <td>#{deliveryman.id}</td>
              <td>
                <div id="imgBox">
                  <img
                    src={
                      deliveryman.avatar
                        ? deliveryman.avatar.url
                        : `https://ui-avatars.com/api/?name=${deliveryman.name
                            .split(' ')
                            .map(name => `${name}+`)}`
                    }
                    alt="deliveryman"
                  />
                </div>
              </td>
              <td>{deliveryman.name}</td>
              <td>{deliveryman.email}</td>
              <td>
                <div id="actionsCell">
                  <MdMoreHoriz
                    size={25}
                    onClick={() => handleActiveActionBox(deliveryman.id)}
                  />
                  {actionBoxVisibility === deliveryman.id ? (
                    <ActionBox visible={actionBoxVisibility}>
                      <>
                        <span>
                          <Link
                            to={{
                              pathname: `/deliverymen/${deliveryman.id}/update`,
                              state: {
                                deliveryman,
                              },
                            }}
                          >
                            <MdModeEdit color="#4D85EE" />
                            editar
                          </Link>
                        </span>

                        <button
                          type="button"
                          onClick={() => handleDelete(deliveryman.id)}
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
