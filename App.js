import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabbar from './src/navigation/tab';

const App = () => {

  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <Tabbar/>
      </NavigationContainer>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  
});

export default App;
