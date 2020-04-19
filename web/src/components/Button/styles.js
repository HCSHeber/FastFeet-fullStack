import styled from 'styled-components';

export const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 35px;
  border: none;
  border-radius: 4px;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;

  :active {
    position: relative;
    top: 3px;
    left: 2px;
    box-shadow: none;
  }
`;
