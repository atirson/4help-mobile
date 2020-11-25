import React from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Container, NameCompany, LogoCompany, Logo, DescriptionJob, TitleJob, Actions } from './styles';
import SwitchSelector from "react-native-switch-selector";

import Button from '../../components/Button';

interface Job {
  id: string;
  company: string;
  image: string;
  job: string;
  description: string;
}

const JobDetails: React.FC = () => {
  const options = [
    { label: "Candidatar" },
    { label: "Cancelar" },
  ];
  const navigation = useNavigation();
  const route = useRoute(); 
  const { id, company, image, job, description} = route.params as Job;

  return (
    <Container>
      <Logo>
        <LogoCompany source={{uri: image}}/>
      </Logo>
      <NameCompany>Empresa: {company}</NameCompany>
      <TitleJob>Vaga: {job}</TitleJob>
      <DescriptionJob>Descrição: {description}</DescriptionJob>

      <Actions>
        <SwitchSelector
          style={{width: 300, marginTop: 30}}
          options={options}
          initial={1}
          buttonColor={'#c53030'}
          onPress={value => console.log(`Call onPress with value: ${value}`)}
        />
      </Actions>

      <Button style={{marginTop: 35, width: 150, height: 40}} onPress={() => navigation.goBack()}>
        Voltar
      </Button>

    </Container>
  );
}

export default JobDetails;