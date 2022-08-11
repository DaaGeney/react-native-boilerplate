// packages
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

// scripts
import styles from './styles';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text>Testing 2</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default Dashboard;
