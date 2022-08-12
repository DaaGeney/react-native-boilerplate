import * as React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

const Settings = () => (
  <View>
    <Link to="/">
      <Text>go back</Text>
    </Link>
  </View>
)

export default Settings;
