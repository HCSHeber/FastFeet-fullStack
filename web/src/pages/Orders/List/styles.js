import styled from 'styled-components';

export const StatusCell = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bolder;
  color: ${props => {
    switch (props.status) {
      case 'entregue':
        return '#2CA42B';
      case 'cancelada':
        return '#DE3B3B';
      case 'retirada':
        return '#4D85EE';
      case 'pendente':
        return '#C1BC35';
      default:
        return null;
    }
  }};
  background-color: ${props => {
    switch (props.status) {
      case 'entregue':
        return '#DFF0DF';
      case 'cancelada':
        return '#FAB0B0';
      case 'retirada':
        return '#BAD2FF';
      case 'pendente':
        return '#F0F0DF';
      default:
        return null;
    }
  }};

  svg {
    margin: 0;
    margin-right: 5px;
  }
`;
