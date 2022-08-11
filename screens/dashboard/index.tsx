// packages
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { Link } from "react-router-native";
import { config } from '../../core/config';
import axios from 'axios';

// scripts
import styles from './styles';

const Dashboard = () => {
  const onCall = async () => {
    await axios.post(config.services.security.login, {
      params: {
        email: 'user@Celerik.com', password: '123'
    }
    })
  }

  return (
    <View style={styles.container}>
      <Button title="Call2" onPress={onCall} />
      <Link to="/settings">
        <Text>{config.text.common.helloWorld}</Text>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}

export default Dashboard;
