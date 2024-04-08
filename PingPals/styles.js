import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw', // Set width to 100% of viewport width
    height: '100vh', // Set height to 100% of viewport height
  },
  backgroundImage: {
    flex: 1,
    width: '100%', // Ensure the background image covers the entire container
    height: '100%', // Ensure the background image covers the entire container
    resizeMode: 'cover', // Ensures the background image covers the entire container
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  buttonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  logo: {
    width: Platform.OS === 'web' ? 400 : 200, // Different width for web and mobile
    height: Platform.OS === 'web' ? 400 : 200,
    marginTop: 5,
    marginBottom: 5,

  },
  
  loginButton: {
    backgroundColor: 'blue', // Customize background color for the login button
    marginBottom: 5,
  },
  signUpButton: {
    backgroundColor: 'green', // Customize background color for the sign-up button
  },
});
