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
              tabBarStyle: {  height: 60, },
              tabBarActiveTintColor: '#000',
              tabBarInactiveTintColor: '#000',
            }}
       >
        <stack.Screen name="Ana Sayfa" component={tab1} 
              options={{
                headerShown:false,
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color.red} size={30} />
                ), 
              }}
         />
        <stack.Screen name="Kategoriler" component={tab2} />
        <stack.Screen name="Sepetim" component={tab3} />
        <stack.Screen name="Listelerim" component={tab4} />
        <stack.Screen name="Hesabım" component={tab5} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}