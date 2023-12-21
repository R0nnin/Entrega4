import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {title} </Text>
      
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    top:0,
    borderWidth:3,
    borderRadius: 10,
    borderColor: 'black',
    height: 90,          
    backgroundColor: '#606C38',  
    justifyContent: 'center', 
    alignItems: 'center',
  },
  text: {
    top:5,
    color: "white",
    fontWeight: "bold",
    fontSize: 35,
    fontFamily: 'monospace',
  },
});