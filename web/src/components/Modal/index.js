import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';
import Modal from 'react-modal';

import { Container, modalStyle } from './styles';

import { closeModal } from '~/store/modules/modal/actions';

export default function ModalComponent() {
  const dispatch = useDispatch();

  const modal = useSelector(state => state.modal);

  function handleToggleModalState() {
    dispatch(closeModal());
  }

  return (
    <Modal
      isOpen={modal.state}
      onRequestClose={handleToggleModalState}
      style={modalStyle}
    >
      <Container>
        {modal.type === 'problem' ? (
          <>
            <h4>VISUALIZAR PROBLEMA</h4>
            <p>{modal.data.description}</p>
          </>
        ) : modal.type === 'order' ? (
          <>
            <h4>informações da encomenda</h4>
            <h5>{modal.data.product}</h5>
            <p>
              {modal.data.recipient.street}, {modal.data.recipient.house_number}
            </p>
            <p>
              {modal.data.recipient.city}, {modal.data.recipient.state}
            </p>
            <p>{modal.data.recipient.cep}</p>

            <div>
              <h4>datas</h4>
              <p>
                <h5>retirada: </h5>
                {modal.data.start_date
                  ? format(parseISO(modal.data.start_date), 'dd/MM/yyyy')
                  : '---'}{' '}
              </p>
              <p>
                <h5>entrega: </h5>
                {modal.data.end_date
                  ? format(parseISO(modal.data.end_date), 'dd/MM/yyyy')
                  : '---'}{' '}
              </p>
            </div>
            <h4>assinatura do destinatário</h4>
            {modal.data.end_date ? (
              <img src={modal.data.signature.url} alt="signature" />
            ) : null}
          </>
        ) : null}
      </Container>
    </Modal>
  );
}
