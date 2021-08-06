import * as React from 'react'
import {Platform, StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tab1 from './Tab1'

function tab2({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Kategoriler</Text>
      <Button
        style={{fontSize: 20, color: 'green'}}
        styleDisabled={{color: 'red'}}
        onPress={() => navigation.navigate("Sepetim")}
        title="Press Me"
        >
        Press Me
      </Button>
    </View>
  );
}

function tab3() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sepetim</Text>
    </View>
  );
}

function tab4() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sepetim</Text>
    </View>
  );
}

function tab5() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sepetim</Text>
    </View>
  );
}

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
      <Tab.Navigator>
        <Tab.Screen name="Ana Sayfa" component={tab1} options={{headerShown:false}}/>
        <Tab.Screen name="Listelerim" component={tab4} />
        <Tab.Screen name="Hesabım" component={tab5} />
        <Tab.Screen name="homestack" component={homestack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}