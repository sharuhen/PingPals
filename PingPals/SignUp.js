import React from 'react';
import { ImageBackground, View, Text, TextInput, Button } from 'react-native';
import { styles } from './styles';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from './firebase'; // Assuming you have imported the Firestore instance correctly

export default function SignUpScreen({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignUp = async () => {
    console.log('checking');

    try {
      // Get a reference to the users collection
      const usersCollectionRef = collection(firestore, 'users');

      // Create a new user document in Firestore
      const docRef = await addDoc(usersCollectionRef, {
        username: username,
        email: email,
        password: password,
      });
      console.log('User signed up with ID: ', docRef.id);
      // Clear input fields after successful sign up
      setUsername('');
      setEmail('');
      setPassword('');
      // Optionally, navigate to another screen after sign up
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle error (e.g., display an error message)
    }
  };

  return (
    <ImageBackground source={require('./images/frontpage.jpg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Sign Up Page</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button title="Sign Up" onPress={handleSignUp} />
          <View style={{ height: 10 }} />
          <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
        </View>
      </View>
    </ImageBackground>
  );
}
