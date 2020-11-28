import React, { useState, useEffect } from 'react';
import {Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import IconFeather from 'react-native-vector-icons/Feather';
import {useAuth} from '../../hooks/auth';

import { View, Image } from 'react-native';

import axios from 'axios';

import Button from '../../components/Button';

import {
  Container,
  JobContainer,
  JobImage,
  JobList,
  Job,
  JobTitle,
  JobDetails,
  JobCompany,
  JobButton,
} from './styles';

interface Job {
  id: string;
  company: string;
  image: string;
  job: string;
  description: string;
}
const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]);
  const navigation = useNavigation();


  const apiFake = axios.create({
    baseURL: 'http://localhost:3334',
  });


  useEffect(() => {
    async function loadJobs(): Promise<void> {
      const response = await apiFake.get('/jobs');

      setJobs(response.data);
    }

    loadJobs();
  }, []);

  return (
    <Container>
      <Text 
        style={{
          fontFamily: 'roboto-medium', fontSize: 32, marginBottom: -15, marginTop: 15, color: '#c53030'
          }}>
            Vagas
      </Text>
      <JobContainer>
        <JobList 
          data={jobs}
          keyExtractor={item => item.id} 
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }} 
          renderItem={({item}) => (
            <Job>
              <JobImage source={{uri: item.image}} />
              <JobDetails>
                <JobCompany style={{fontFamily: 'roboto-medium'}}>{item.company}</JobCompany>
                <JobTitle style={{fontFamily: 'roboto-medium'}}>{item.job}</JobTitle>
              </JobDetails>
              <IconFeather onPress={() => navigation.navigate('JobDetails', {
                id: item.id,
                company: item.company,
                image: item.image,
                job: item.job,
                description: item.description,
              })} name="chevron-right" size={25} color="#000" />
            </Job>
          )}
        />
      </JobContainer>

      <Button onPress={() => signOut()} style={{width: 200, height: 40, marginBottom: 20}}>Sair</Button>        
    </Container>
  );
};

export default Dashboard;
