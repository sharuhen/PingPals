import { StatusBar, ImageBackground, Button, Image } from 'react-native';
import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './login';
import SignUpScreen from './SignUp'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./images/frontpage.jpg')} style={styles.backgroundImage}>
        <View style={styles.logoContainer}>
          <Image source={require('./images/logov2.png')} style={styles.logo} />
        </View>
      </ImageBackground>
      <View style={styles.buttonContainer}>
        <View style={styles.loginButton}>
          <Button title="Login" onPress={() => navigation.navigate('Login')} color="blue" />
        </View>
        <View style={styles.signUpButton}>
          <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} color="green" />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
