import styled from 'styled-components';

export const Container = styled.View`
  padding: 20px;
  background-color: #fff;
  height: 100%;
`;

export const PerfilSection = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const ProfileImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const PerfilText = styled.View`
  justify-content: center;
  width: 50%;
`;

export const DeliverysSection = styled.View``;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const Title = styled.Text`
  font-size: 23px;
  font-weight: bold;
`;

export const ListOptions = styled.View`
  flex-direction: row;
`;

export const Option = styled.Text`
  margin-right: ${(props) => (props.firstChild ? 20 : 0)}px;
  font-weight: bold;
  color: ${(props) => (props.select ? '#7D40E7' : '#acacac')};
  text-decoration: ${(props) => props.select && 'underline'};
`;

export const DeliveryList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  background-color: #fff;
  height: 75%;
`;
