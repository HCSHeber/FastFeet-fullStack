import styled from 'styled-components';

export const Container = styled.View`
  elevation: 3;
  border-radius: 4px;
  overflow: hidden;
  margin: 3px;
  margin-bottom: 30px;
`;

export const TopSection = styled.View`
  padding: 15px;
  background-color: #fff;
`;

export const Index = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  width: 50%;
  font-size: 20px;
  font-weight: bold;
  color: #7d40e7;
  margin-left: 10px;
`;

export const Progress = styled.View`
  margin-top: 30px;
`;

export const ProgressBar = styled.View`
  align-self: center;
  width: 83%;
  height: 2px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #bdaede;
`;

export const Stages = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Stage = styled.View`
  top: -6px;
  width: auto;
  max-width: 20%;
  align-items: center;
`;

export const StagePoint = styled.View`
  width: 10px;
  height: 10px;
  border: 1.5px solid #7d40e7;
  background-color: ${(props) => (props.unfinished ? '#fff' : '#7d40e7')};
  border-radius: 5px;
`;

export const StageTitle = styled.Text`
  text-align: center;
  font-size: 10px;
  color: #999999;
`;

export const BottomSection = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  padding: 15px;
  background-color: #f8f9fd;
`;

export const InfoText = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-weight: bold;
  width: 90px;
  font-size: 15px;
`;

export const MoreText = styled.Text`
  font-weight: bold;
  color: #7d40e7;
`;
