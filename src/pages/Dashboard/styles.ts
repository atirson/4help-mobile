import styled from 'styled-components/native';
import { FlatList } from 'react-native';

interface Job {
  id: string;
  company: string;
  image: string;
  job: string;
  description: string;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const JobContainer = styled.View`
  border-radius: 5px;
  margin-top: 60px;
  flex: 1;
  flex-direction: row;
`;

export const JobList = styled(
  FlatList as new () => FlatList<Job>,
).attrs({
  numColumns: 1,
})`
  flex: 1;
  padding: 0 10px;
  top: -35px;
`;

export const Job = styled.View`
  background: #fff;
  padding: 16px 16px;
  border-radius: 5px;
  margin: 8px;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const JobImage = styled.Image`
  height: 58px;
  width: 58px;
  border-radius: 29px;
  align-self: flex-start;
`;

export const JobTitle = styled.Text`
  font-size: 14px;
  margin-top: 10px;
  margin-left: 12px;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  margin-top: auto;
`;

export const JobCompany = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #e83f5b;
  margin-left: 12px;
`;

export const JobDetails = styled.View`
  justify-content: center;
  flex-direction: column;
  padding: 0 10px;
  flex: 1;
`;

export const JobButton = styled.TouchableOpacity``;
