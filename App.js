import React from 'react';
import { View, Text } from 'react-native-ui-lib';
import Login from './Login'; // Import the Login.js component

export default function App() {
  return (
    <View flex paddingH-25 paddingT-120>
      <Text blue50 text20>Welcome to the App</Text>
      <Login /> {/* Use the Login component */}
    </View>
  );
}
