import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 30px 10% 0 10%;

  h1 {
    margin-bottom: 45px;
  }

  #topSection {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    #filterInput {
      display: flex;
      align-items: center;
      background-color: #ffff;
      padding: 0 10px;
      border-radius: 4px;
      border: 1px solid #dddddd;

      label {
        display: flex;
        align-items: center;
      }

      input {
        border: none;
        height: 30px;
        margin-left: 10px;
      }
    }

    button {
      background-color: #7d40e7;
    }
  }

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 15px;

    tr {
      height: 50px;

      th {
        background-color: transparent;
        text-align: left;
        padding: 0 15px;
        text-transform: capitalize;
        font-weight: bold;
      }

      td {
        text-align: left;
        background-color: #ffff;
        padding: 0 15px;
        color: #666666;

        #actionsCell {
          position: relative;
          display: inline;
          cursor: pointer;
        }

        :first-child {
          border-radius: 4px 0 0 4px;
        }
        :last-child {
          border-radius: 0 4px 4px 0;
        }
      }
    }
  }
`;
