import * as React from 'react'
import {Platform, StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {tab1} from './Tabs/Tab1'
import {tab2} from './Tabs/Tab2'
import {tab3} from './Tabs/Tab3'
import {tab4} from './Tabs/Tab4'
import {tab5} from './Tabs/Tab5'

function homestack(){
  return( 
    <stack.Navigator>
      <stack.Screen name="Kategoriler" component={tab2} />
      <stack.Screen name="Sepetim" component={tab3} />
    </stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
             
            screenOptions={{
              tabBarStyle: {  height: 50, marginBottom:0,borderRadius:0,margin:0 ,position:'absolute'},
              tabBarActiveTintColor: '#000',
              tabBarInactiveTintColor: '#000',
            }}
       >
        <stack.Screen name="Ana Sayfa" component={tab1} 
              options={{
                headerShown:false,
                tabBarIcon: ({ tintColor, focused }) => (
                  <MaterialCommunityIcons
                    name={focused ? "home-circle" : "home-circle-outline"}
                    color={tintColor}
                    size={30}
                  />
                )              
              }}
         />
        <stack.Screen name="Kategoriler" component={tab2} 
              options={{
                tabBarIcon: ({ tintColor, focused }) => (
                  <MaterialCommunityIcons
                    name={focused ? "ballot" : "ballot-outline"}
                    color={tintColor}
                    size={30}
                  />
                )
              }} 
        />
        <stack.Screen name="Sepetim" component={tab3} 
              options={{
                tabBarIcon: ({ tintColor, focused }) => (
                  <MaterialCommunityIcons
                    name={focused ? "basket" : "basket-outline"}
                    color={tintColor}
                    size={30}
                  />
                )
              }} 
        />
        <stack.Screen name="Listelerim" component={tab4} 
              options={{
                tabBarIcon: ({ tintColor, focused }) => (
                  <MaterialCommunityIcons
                    name={focused ? "heart" : "heart-outline"}
                    color={tintColor}
                    size={30}
                  />
                )
              }} 
        />
        <stack.Screen name="Hesabım" component={tab5} 
              options={{
                tabBarIcon: ({ tintColor, focused }) => (
                  <MaterialCommunityIcons
                    name={focused ? "account-box" : "account-box-outline"}
                    color={tintColor}
                    size={30}
                  />
                )
              }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}