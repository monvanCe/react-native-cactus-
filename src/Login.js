import React from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'


  const Register = () => 
 
  (
    <View style={styles.container}>
    
      <Text style={styles.textContainer}> ase lan dayiii </Text>
    </View>
  )

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer:{
    fontSize : 48,
    color: 'black'
  }
})

export default Register