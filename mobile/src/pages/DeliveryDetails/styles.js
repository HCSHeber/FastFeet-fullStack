import styled from 'styled-components';

export const Box = styled.View`
  width: 100%;
  padding: 15px;
  elevation: 3;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #fff;
`;

export const TitleBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #7d40e7;
  margin-left: 5px;
`;

export const InfoTitle = styled.Text`
  font-weight: bold;
  margin-top: 14px;
  margin-bottom: 1px;
  text-transform: uppercase;
  font-size: 15px;
  color: #b2b2b2;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-radius: 4px;
  overflow: hidden;
  elevation: 3;
  background-color: #f8f9fd;
`;

export const Action = styled.TouchableOpacity`
  align-items: center;
  flex-grow: 1;
  padding: 12px 10px;
  background-color: #f8f9fd;
  border-left-width: ${(props) => (props.middle ? '1px' : '0')};
  border-right-width: ${(props) => (props.middle ? '1px' : '0')};
  border-color: #e5e5e5;
`;

export const ActionSub = styled.Text`
  text-align: center;
  color: rgba(0, 0, 0, 0.4);
`;
