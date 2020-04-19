import styled from 'styled-components';

import { RNCamera } from 'react-native-camera';
import Button from '~/components/Button';

export const CameraView = styled.View`
  flex: 1;
  flex-basis: 90%;
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
  padding: 30px;
  justify-content: flex-end;
`;

export const CameraButton = styled.TouchableOpacity`
  background-color: rgba(100, 100, 100, 0.4);
  padding: 20px;
  border-radius: 100px;
`;

export const SendImageButton = styled(Button)`
  background-color: #7d40e7;
`;
