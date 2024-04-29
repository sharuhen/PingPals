import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';
import { collection, getDocs, query, where } from 'firebase/firestore'; // Import Firestore functionalities
import { firestore } from './firebase'; // Import your Firestore instance


export default function Dashboard({ route, navigation }) {
  const { user } = route.params;


  return (
    <ImageBackground source={require('./images/frontpage.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.greeting}>Hello {user.username}!</Text>
        <Button title="Logout" onPress={() => navigation.navigate('Login')} />
        <Button title="Add Contact" onPress={() => navigation.navigate('AddContact',)} />

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 50, // Adjust as needed
    paddingLeft: 20, // Adjust as needed
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Adjust as needed
  },
  password: {
    fontSize: 18,
    color: 'white', // Adjust as needed
  },
});
