import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  ProfileImage,
  ProfileInfo,
  ProfileInfoTitle,
  ProfileInfoText,
  LogoutButton,
} from './styles';

import { signOut } from '~/store/modules/user/actions';

export default function Profile() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const profile = useSelector((state) => state.user.profile);

  function handleLogOut() {
    dispatch(signOut(navigation));
  }

  return (
    <Container>
      <ProfileImage
        source={{
          uri: profile.avatar
            ? profile.avatar.url
            : `https://ui-avatars.com/api/?size=170&&name=${profile.name
                .split(' ')
                .map((name) => `${name}+`)}`,
        }}
      />
      <ProfileInfo>
        <ProfileInfoTitle>Nome completo</ProfileInfoTitle>
        <ProfileInfoText>{profile.name}</ProfileInfoText>
        <ProfileInfoTitle>Email</ProfileInfoTitle>
        <ProfileInfoText>{profile.email}</ProfileInfoText>
        <ProfileInfoTitle>Data de cadastro</ProfileInfoTitle>
        <ProfileInfoText>10/01/2020</ProfileInfoText>
      </ProfileInfo>
      <LogoutButton onPress={handleLogOut}>Logout</LogoutButton>
    </Container>
  );
}
