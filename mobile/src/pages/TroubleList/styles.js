import styled from 'styled-components';

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

export const TroubleList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-bottom: 50px;
`;

export const Trouble = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px;
  elevation: 3;
  border-radius: 4px;
  margin: 10px 3px;
`;

export const TroubleText = styled.Text.attrs({
  numberOfLines: 1,
})`
  width: 70%;
  font-size: 17px;
  color: rgba(0, 0, 0, 0.4);
`;

export const TroubleDate = styled.Text`
  color: rgba(0, 0, 0, 0.3);
`;
