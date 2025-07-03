import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebaseAuth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Dashboard: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const checkIfLoggedIn = () => {
        onAuthStateChanged(auth, (user) => {
              if (user) {
                navigation.navigate('Dashboard');
              } 
            });
    }

    useEffect(() => {
        checkIfLoggedIn();
    })

    const handleLogin = () => {
        setError(''); 
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('User logged in:', user);
                navigation.navigate('Dashboard');
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const handleGoToRegister = () => {
        navigation.navigate('Register');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Log In</Text>
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
                title="Sign In" 
                onPress={handleLogin} 
            />
            {error && <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text>}
            <TouchableOpacity onPress={handleGoToRegister}>
                <Text style={styles.text}>Don't have an account? Sign up</Text>
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
