import styled from 'styled-components';

export const Container = styled.div`
  h4 {
    text-transform: capitalize;
    margin-bottom: 5px;
  }

  p {
    margin: 3px 0;
  }

  h5 {
    display: inline;
    text-transform: capitalize;
    color: #666666;
  }

  div {
    border-top: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
    margin: 10px 0;
    padding: 10px 0;
  }

  img {
    width: 35%;
  }
`;

export const modalStyle = {
  content: {
    width: '25%',
    height: '50%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
