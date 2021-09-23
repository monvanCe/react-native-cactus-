import * as React from 'react'
import {Platform, StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function tab1() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Ana sayfaa</Text>
      </View>
    );
  }

function tab2() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sepetim</Text>
    </View>
  );
}

function tab3() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style= {{fontWeight: 'bold', color: 'red'}}>Sepetim</Text>
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
      <Tab.Navigator
            screenOptions={{
              tabBarStyle: {  height: 60, },
              tabBarActiveTintColor: '#000',
              tabBarInactiveTintColor: '#000',
            }}
      >
        <stack.Screen name="Ana Sayfa" component={tab1} options={{headerShown:false}} />
        <stack.Screen name="Kategoriler" component={tab2} />
        <stack.Screen name="Sepetim" component={tab3} />
        <stack.Screen name="Listelerim" component={tab4} />
        <stack.Screen name="Hesabım" component={tab5} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


