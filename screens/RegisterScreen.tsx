import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import  {auth}  from '../services/firebaseAuth'; 
import { NativeStackScreenProps } from '@react-navigation/native-stack'; 
import { TouchableOpacity } from 'react-native';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Dashboard: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>; // For RegisterScreen
export default function RegisterScreen({navigation}: Props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = () => {
        setError('');
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Sign Up
                const user = userCredential.user;
                navigation.navigate('Dashboard');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });
    };

    const handleGoToLogin = () => {
        navigation.navigate('Login');
    }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register</Text>
      <TextInput 
        placeholder="Email" 
        onChangeText={setEmail}
        style={styles.input} 
      />
      <TextInput 
        placeholder="Password" 
        onChangeText={setPassword}
        style={styles.input} 
        secureTextEntry 
      />
      <Button 
        title="Sign Up" 
        onPress={handleRegister} 
      />
      {error && <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text>}
      <TouchableOpacity onPress={handleGoToLogin}>
        <Text style={styles.text}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    },
    text: {
        marginTop: 20,
        color: 'blue',
    },
  input: {
    width: 250,
    borderWidth: 1,
    padding: 14,
    marginVertical: 10,
    borderColor: 'grey',
    borderRadius: 4,
  },
});
