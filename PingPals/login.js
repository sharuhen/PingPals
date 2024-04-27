import React from 'react';
import { Platform, View, Text, TextInput, Button, ImageBackground, StyleSheet } from 'react-native';
import { styles } from './styles';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Implement your login logic here
    // For demonstration purposes, just alert the username and password
    alert(`Logging in with Username: ${username}, Password: ${password}`);
  };

  return (
    <ImageBackground source={require('./images/frontpage.jpg')} style={styles.background}>
      <View style={styles.container}>
      <View style={styles.formContainer}>
          <Text style={styles.title}>Login Page</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button title="Login" onPress={handleLogin} />

          <View style={{ height: 10 }} />
          <Button title="Go to Sign Up" onPress={() => navigation.navigate('SignUp')} />
        </View>
      </View>
    </ImageBackground>
  );
}

