import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdMoreHoriz, MdRemoveRedEye, MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { Container } from './styles';

import ActionBox from '~/components/ActionsBox';
import Modal from '~/components/Modal';

import { openModal } from '~/store/modules/modal/actions';

export default function ProblemsList() {
  const dispatch = useDispatch();

  const [problems, setProblems] = useState([]);
  const [actionBoxVisibility, setActionBoxVisibility] = useState(false);

  useEffect(() => {
    async function getProblems() {
      const problemsResponse = await api.get('delivery/problems');
      setProblems(problemsResponse.data);
    }

    getProblems();
  }, []);

  function handleActiveActionBox(id) {
    if (actionBoxVisibility === id) {
      return setActionBoxVisibility(false);
    }

    return setActionBoxVisibility(id);
  }

  async function handleDeleteDelivery(id) {
    try {
      await api.delete(`problem/${id}/cancel-delivery`);
      toast.success('Entrega deletada');
    } catch (err) {
      toast.error('Erro. tente novamente');
    }
  }

  function handleToggleModalState(data) {
    const type = 'problem';
    dispatch(openModal(type, data));
  }

  return (
    <Container>
      <Modal isOpen />
      <h1>Gerenciando destinatários</h1>

      <table>
        <thead>
          <tr>
            <th>encomenda</th>
            <th>problema</th>
            <th>ações</th>
          </tr>
        </thead>
        <tbody>
          {problems.map(problem => (
            <>
              <tr>
                <td>#{problem.id}</td>
                <td id="text">{problem.description}</td>
                <td>
                  <div id="actionsCell">
                    <MdMoreHoriz
                      size={25}
                      onClick={() => handleActiveActionBox(problem.id)}
                    />
                    {actionBoxVisibility === problem.id ? (
                      <ActionBox visible={actionBoxVisibility}>
                        <>
                          <span>
                            <button
                              type="button"
                              onClick={() => {
                                handleToggleModalState(problem);
                                handleActiveActionBox(problem.id);
                              }}
                            >
                              <MdRemoveRedEye color="#8E5BE8" />
                              visualizar
                            </button>
                          </span>
                          <span>
                            <button
                              type="button"
                              onClick={() => handleDeleteDelivery(problem.id)}
                            >
                              <MdDeleteForever color="#DE3B3B" />
                              cancelar encomenda
                            </button>
                          </span>
                        </>
                      </ActionBox>
                    ) : null}
                  </div>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
