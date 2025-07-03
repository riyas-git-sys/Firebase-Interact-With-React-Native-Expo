import {Text, View, StyleSheet, Button} from 'react-native';
import {signOut, onAuthStateChanged} from 'firebase/auth';
import {auth} from '../services/firebaseAuth'; 
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Dashboard: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

export default function DashBoardScreen({navigation}: Props) {
  const handleLogout = () => {
    signOut(auth)
    .then(() => {
      navigation.navigate('Login');
    })
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to the Dashboard</Text>
      <Button title='Logout' onPress={handleLogout} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});