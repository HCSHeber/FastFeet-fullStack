import styled from 'styled-components';

export const Container = styled.div`
  img {
    height: 32px;
    border-radius: 50%;
  }

  #actionsCell {
    display: inline;
    cursor: pointer;
  }

  :first-child {
    border-radius: 4px 0 0 4px;
  }
  :last-child {
    border-radius: 0 4px 4px 0;
  }
`;
