import styled from 'styled-components';

import { Form } from '@rocketseat/unform';

export const FormContainer = styled(Form)`
  #middleSection {
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    grid-column-gap: 15px;
  }

  #bottomSection {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 15px;
  }
`;
