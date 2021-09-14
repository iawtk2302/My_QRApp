import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Creation from '../screens/Creation';
import Home from '../screens/Home';
import Scan from '../screens/Scan';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient'
import { View,Text} from 'react-native';
const Tab = createBottomTabNavigator();
export default function Tabbar() {
    return (
        <Tab.Navigator
        screenOptions={{
          tabBarShowLabel:false,
          tabBarStyle:{
          elevation:0,
          backgroundColor:'white',
          height:"9%",
          }}} 
        >
          <Tab.Screen name="Home" component={Home} options={
            {
              headerShown:false,
              tabBarIcon:({focused})=>(
                <View style={{alignItems:'center',
                justifyContent:'center',left:15}}>
                  <Icon name="home" style={{
                    color:focused?"black":"black"
                  }} size={28}/>
                  <Text style={{color:focused?"black":"black",fontSize:12}}>HOME</Text>
                </View>
              )  
            }
          }/>                         
          <Tab.Screen name="Scan" component={Scan} options={
            {
              headerShown:false,
              tabBarIcon:({focused})=>(
                <LinearGradient
                colors={['#8E78FF', '#FC7D7B']}
                start={{x: 0, y: 0.5}} end={{x: 1, y: 0}}
                style={{alignItems:'center',
                justifyContent:'center', height:70,width:70,borderRadius:50,bottom:25}}>
                  <Icon2 name="scan1" style={{
                    color:focused?"white":"white"
                  }} size={30}/>
                </LinearGradient>
              )  
            }
          }/>
          <Tab.Screen name="Creation" component={Creation} options={
            {
              headerShown:false,
              tabBarIcon:({focused})=>(
                <View style={{alignItems:'center',
                justifyContent:'center',right:15}}>
                  <Icon name="qrcode" style={{
                    color:focused?"black":"black"
                  }} size={28}/>
                  <Text style={{color:focused?"black":"black",fontSize:12}}>CREATE</Text>
                </View>
              )  
            }}/>
        </Tab.Navigator>
    );
  }