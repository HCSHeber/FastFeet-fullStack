import styled from 'styled-components';

export const Container = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px dashed #dddddd;
  box-sizing: content-box;
  text-align: center;
  overflow: hidden;
  font-weight: bold;

  label {
    cursor: pointer;
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #dddddd;

    img {
      width: 100%;
      border-radius: 50%;
      box-sizing: content-box;
      background-color: #ffff;
    }

    input {
      display: none;
    }
  }
`;
