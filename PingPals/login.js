import React from 'react';
import { View, Text, TextInput, Button, ImageBackground } from 'react-native';
import { collection, getDocs, query, where } from 'firebase/firestore'; // Corrected imports
import { firestore } from './firebase';
import { styles } from './styles';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async () => {
    try {
      const usersRef = collection(firestore, 'users');
      const q = query(usersRef, where('username', '==', username)); // Query to get user by username
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) { // Check if any documents found
        querySnapshot.forEach(doc => {
          const userData = doc.data();
          if (userData.password === password) {
            //go to dashboard page
            navigation.navigate('dashboard', { user: userData });
          } else {
            alert('Incorrect password');
          }
        });
      } else {
        alert('Username not found');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
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
