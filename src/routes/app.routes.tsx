import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Dashboard from '../pages/Dashboard';
import JobDetails from '../pages/JobDetails';
import { View, Text, Image } from 'react-native';
import {useAuth} from '../hooks/auth';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  const { user, signOut } = useAuth();
  return (
    <App.Navigator
      screenOptions={() => ({
        headerShown: false,
        cardStyle: { backgroundColor: '#f4ede8' },
      })}
    >
      <App.Screen 
        name="Dashboard" 
        component={Dashboard} 
        options={{
          headerShown: true,
          cardStyle: { backgroundColor: '#f4ede8' },
          title: '', 
          headerStyle: {backgroundColor: '#f4ede8'},
          headerTintColor: '#c53030',
          headerRight: () => (
          <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            <Icon style={{marginRight: 15}} name={'search'} size={22} color='#c53030'/>
            <Image style={{width: 36, height: 36, borderRadius: 18, marginRight: 15}} source={{uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBQskUDuCArgdOamv-lRsZDh8IQQnXLwYDaw&usqp=CAU`}} />
          </View>
          ),
          headerLeft: () => (
            <View style={{flexDirection: "row", marginTop: 10}}>
              <Icon style={{marginLeft: 15}} name={'hand-holding-heart'} size={25} color='#c53030'/>
              <Text style={{fontFamily: 'roboto-medium', fontSize: 22, marginBottom: 15, marginLeft: 10}}>4Help</Text>
            </View>
          )
        }}  
      />
      <App.Screen 
        name="JobDetails" 
        component={JobDetails} 
        options={{
          headerShown: true,
          cardStyle: { backgroundColor: '#f4ede8' },
          title: '', 
          headerStyle: {backgroundColor: '#f4ede8'},
          headerTintColor: '#c53030',
          headerRight: () => (
          <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            <Image style={{width: 36, height: 36, borderRadius: 18, marginRight: 15}} source={{uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBQskUDuCArgdOamv-lRsZDh8IQQnXLwYDaw&usqp=CAU`}} />
          </View>
          ),
          headerLeft: () => (
            <View style={{flexDirection: "row", marginTop: 10}}>
              <Icon style={{marginLeft: 15}} name={'hand-holding-heart'} size={25} color='#c53030'/>
              <Text style={{fontFamily: 'roboto-medium', fontSize: 22, marginBottom: 15, marginLeft: 10}}>4Help</Text>
            </View>
          )
        }}  
      />
    </App.Navigator>
)};

export default AppRoutes;
