import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground } from 'react-native'; // Added TextInput and Button
import { styles } from './styles'; // Assuming you have a styles file imported correctly
import { firestore } from './firebase';

export default function AddContact({ route, navigation }) {
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        phoneNumber: ''
    });

    const handleInputChange = (field, value) => {
        setContactInfo(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const addContactToFirestore = () => {
        // Implement adding contact to Firestore
    };

    return (
        <ImageBackground source={require('./images/frontpage.jpg')} style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.title}>Add Contact</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={contactInfo.name}
                    onChangeText={(text) => handleInputChange('name', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={contactInfo.email}
                    onChangeText={(text) => handleInputChange('email', text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    value={contactInfo.phoneNumber}
                    onChangeText={(text) => handleInputChange('phoneNumber', text)}
                />
                <Button title="Add Contact" onPress={addContactToFirestore} />
            </View>
        </ImageBackground>
    );
}
