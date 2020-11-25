import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  /* padding: 80 0px; */
  padding: 20px 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const TitleText = styled.Text`
  font-size: 48px;
  font-weight: bold;
`; 

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #c53030;
  font-size: 16px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: relative;
  left: 0;
  bottom: 0;
  right: 0;
  background: #c53030;
  border-top-width: 1px;
  border-color: #fff;
  padding: 16px 0px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-left: 16px;
`;

 