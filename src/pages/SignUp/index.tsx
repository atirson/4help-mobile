import React, {useState, useRef, useCallback} from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView, TextInput, Alert, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconFeather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import getValidationErrors from '../../utils/getValidationErrors';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { 
  Container,
  Title,
  CreateAccountButton,
  CreateAccountButtonText
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const emailInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  const handleSignUp = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 caracteres'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);
        
        Alert.alert(
          'Cadastro realizado com sucesso!',
          'Você já pode fazer logon no 4Help.',
        );

        navigation.navigate('SignIn');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao fazer seu cadastro, tente novamente.',
        );
      }
    },
    [navigation],
  );


  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Icon name={'hand-holding-heart'} size={100} color='#c53030'/>
            <Text style={{fontFamily: 'roboto-medium', fontSize: 48, marginBottom: 15}}>4Help</Text>

            <Text style={{fontFamily: 'roboto-medium', fontSize: 24, marginBottom: 15}}>Faça seu cadastro</Text>

            <Form ref={formRef} onSubmit={handleSignUp} style={{ width: 340 }}>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="default"
                name="name"
                icon="user"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => emailInputRef.current?.focus()}
              />
              <Input
              ref={emailInputRef}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current?.focus()}
              />
              <Input
                ref={passwordInputRef}
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
                name="password"
                icon="lock"
                placeholder="Senha"
              />

              <Button onPress={() => formRef.current?.submitForm()}>
                Cadastrar
              </Button>
            </Form>

          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton onPress={() => navigation.navigate('SignIn')}>
        <IconFeather name="arrow-left" size={20} color="#fff" />
        <CreateAccountButtonText>Fazer logon</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
}

export default SignIn;