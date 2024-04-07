import { StyleSheet } from 'react-native';

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
});
