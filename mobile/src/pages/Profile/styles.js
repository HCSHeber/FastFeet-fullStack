import styled from 'styled-components';

import Button from '~/components/Button';

export const Container = styled.View`
  height: 100%;
  padding: 20px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const ProfileImage = styled.Image`
  width: 170px;
  height: 170px;
  border-radius: 85px;
`;

export const ProfileInfo = styled.View`
  width: 100%;
  padding: 30px 0;
  align-items: flex-start;
`;

export const ProfileInfoTitle = styled.Text`
  color: #666666;
  margin-top: 10px;
`;

export const ProfileInfoText = styled.Text`
  font-weight: bold;
  font-size: 30px;
  color: #444444;
`;

export const LogoutButton = styled(Button)`
  background-color: #e74040;
`;
