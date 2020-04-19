import styled from 'styled-components';

export const ActionList = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: absolute;
  width: 180px;
  left: calc(50% - 90px);
  background-color: #fff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 10px 10px;
  z-index: 1;
  cursor: default;

  button {
    width: 100%;
  }

  span,
  button {
    display: flex;
    align-items: center;
    text-transform: capitalize;
    border-bottom: 1px solid #dddddd;
    padding: 5px 0;
    color: #9b9b9b;
    cursor: pointer;
    white-space: nowrap;

    :last-child {
      padding-bottom: 0;
      border: 0;
    }

    :first-child {
      padding-top: 0;
    }

    svg {
      margin-right: 5px;
    }
  }

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 5px);
    top: -6px;
    height: 10px;
    width: 10px;
    transform: rotate(45deg);
    background-color: #fff;
    border-left: 1px solid #dddddd;
    border-top: 1px solid #dddddd;
  }
`;
