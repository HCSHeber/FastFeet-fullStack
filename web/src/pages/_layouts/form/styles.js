import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 30px 20% 0 20%;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    div {
      #back {
        margin-right: 20px;
        background-color: #c4c4c4;
      }

      #save {
        background-color: #7d40e7;
      }
    }
  }

  #form {
    padding: 40px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffff;

    span {
      width: 100%;
      margin-bottom: 20px;
      color: red;
      label {
        width: 100%;
        margin-bottom: 25px;
        text-transform: capitalize;
        font-weight: bold;
        color: #444444;
      }
      input {
        width: 100%;
        height: 40px;
        margin-top: 5px;
        padding: 0 20px;
        border: 2px solid #dddd;
        border-radius: 4px;
      }
    }
  }
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div {
    a,
    button {
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
    }

    #back {
      margin-right: 20px;
      background-color: #c4c4c4;
    }

    #save {
      background-color: #7d40e7;
    }
  }
`;
