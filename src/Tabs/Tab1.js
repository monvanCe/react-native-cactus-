import * as React from 'react'
import {Platform, StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {tab2} from './Tab2'
import {tab3} from './Tab3'

export function tab1() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Ana sayfa</Text>
      </View>
    );
  }
  const Tab = createBottomTabNavigator();
  const stack = createNativeStackNavigator();