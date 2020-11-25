import 'react-native-gesture-handler';

import React, {useState} from 'react';
import { StatusBar, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import AppProvider from './src/hooks/index';

const fetchFonts = () => {
  return Font.loadAsync({
  'roboto-medium': require('./src/assets/fonts/RobotoSlab-Medium.ttf'),
  'roboto-regular': require('./src/assets/fonts/RobotoSlab-Regular.ttf'),
  });
  };

import Routes from './src/routes';

const App: React.FC = () => {
  const [fontLoading, setFontLoading] = useState(false);

  if(!fontLoading) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoading(true)} /> 
  }

  return (
 <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <AppProvider>
      <View style={{ flex: 1, backgroundColor: '#312e38' }}>
        <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
)};

export default App;
