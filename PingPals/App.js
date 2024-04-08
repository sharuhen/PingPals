import { StatusBar, ImageBackground, Button, Image } from 'react-native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./images/frontpage.jpg')} style={styles.backgroundImage}>
        <View style={styles.logoContainer}>
          <Image source={require('./images/logov2.png')} style={styles.logo} />
        </View>
      </ImageBackground>
      <View style={styles.buttonContainer}>
        <View style={styles.loginButton}>
          <Button title="Login" onPress={() => alert('Login')} color="blue" />
        </View>
        <View style={styles.signUpButton}>
          <Button title="Sign Up" onPress={() => alert('Sign Up')} color="green" />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
