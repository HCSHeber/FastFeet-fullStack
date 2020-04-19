import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 15px 20px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 10px;
    }

    ul::before {
      content: '';
      display: block;
      width: 1.5px;
      height: 40px;
      background-color: rgba(0, 0, 0, 0.1);
      margin: 0 15px;
    }

    ul {
      display: flex;
      align-items: center;

      .selected {
        color: #444444;
      }

      li {
        margin: 0 10px;
        text-transform: uppercase;
        font-weight: bold;

        a {
          color: #b2b2b2;
        }
      }
    }
  }

  aside {
    text-align: right;

    p {
      font-weight: bold;
      margin-bottom: 5px;
      text-transform: capitalize;
    }

    button {
      background: none;
      border: none;
      color: red;
    }
  }
`;
