import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  MdSearch,
  MdAdd,
  MdBrightness1,
  MdMoreHoriz,
  MdModeEdit,
  MdRemoveRedEye,
  MdDeleteForever,
} from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { StatusCell } from './styles';

import ActionBox from '~/components/ActionsBox';
import Button from '~/components/Button';
import Modal from '~/components/Modal';

import { openModal } from '~/store/modules/modal/actions';

export default function Orders() {
  const dispatch = useDispatch();

  const [orders, setOrders] = useState([]);
  const [actionBoxVisibility, setActionBoxVisibility] = useState(false);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    async function getOrders() {
      const response = await api.get(`orders?product=${filter}`);
      setOrders(response.data);
    }
    getOrders();
  }, [filter]);

  function handleActiveActionBox(id) {
    if (actionBoxVisibility === id) {
      return setActionBoxVisibility(false);
    }

    return setActionBoxVisibility(id);
  }

  function handleSetFilter(event) {
    const text = event.target.value;

    return setFilter(text);
  }

  async function handleDelete(id) {
    // eslint-disable-next-line no-alert
    const confirm = window.confirm(`Deletar encomenda de ID:  #${id}?`);

    if (confirm) {
      try {
        await api.delete(`deliverymen/${id}`);
        toast.success('Encomenda excluído');
      } catch (err) {
        toast.error('Erro ao excluir encomenda. Tente novamente');
      }
    }
  }

  function handleToggleModalState(data) {
    const type = 'order';
    dispatch(openModal(type, data));
  }

  return (
    <>
      <Modal isOpen />
      <h1>Gerenciando encomendas</h1>

      <div id="topSection">
        <div id="filterInput">
          <label htmlFor="filter">
            <MdSearch color="#757575" size={20} />
            <input
              id="filter"
              type="text"
              placeholder="Buscar por encomendas"
              onChange={handleSetFilter}
            />
          </label>
        </div>

        <Link to="/orders/create">
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
            <th>destinatário</th>
            <th>entregador</th>
            <th>cidade</th>
            <th>estado</th>
            <th>status</th>
            <th>ações</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => {
            let orderStatus;
            if (order.end_date) {
              orderStatus = 'entregue';
            } else if (order.canceled_at) {
              orderStatus = 'cancelada';
            } else if (order.start_date) {
              orderStatus = 'retirada';
            } else {
              orderStatus = 'pendente';
            }

            return (
              <tr>
                <td>#{order.id}</td>
                <td>{order.recipient.name}</td>
                <td>{order.deliveryman ? order.deliveryman.name : '---'}</td>
                <td>{order.recipient.city}</td>
                <td>{order.recipient.state}</td>
                <td>
                  <StatusCell status={orderStatus}>
                    <MdBrightness1 size={12} />
                    {orderStatus}
                  </StatusCell>
                </td>
                <td>
                  <div id="actionsCell">
                    <MdMoreHoriz
                      size={25}
                      onClick={() => {
                        handleActiveActionBox(order.id);
                      }}
                    />
                    {actionBoxVisibility === order.id ? (
                      <ActionBox visible={actionBoxVisibility}>
                        <>
                          <span>
                            <button
                              type="button"
                              onClick={() => {
                                handleToggleModalState(order);
                                handleActiveActionBox(order.id);
                              }}
                            >
                              <MdRemoveRedEye color="#8E5BE8" />
                              visualizar
                            </button>
                          </span>
                          <span>
                            <Link
                              to={{
                                pathname: `/orders/${order.id}/update`,
                                state: {
                                  order,
                                },
                              }}
                            >
                              <MdModeEdit color="#4D85EE" />
                              editar
                            </Link>
                          </span>

                          <button
                            type="button"
                            onClick={() => handleDelete(order.id)}
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
            );
          })}
        </tbody>
      </table>
    </>
  );
}
