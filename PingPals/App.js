import { StatusBar, ImageBackground, Button } from 'react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { styles } from './styles';



export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./images/frontpage.png')} style={styles.backgroundImage}>
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={() => alert('Login')} color="blue" /> 
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}
