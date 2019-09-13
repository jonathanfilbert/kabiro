import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const OnboardPage = () => (
  <View style={styles.container}>
    <Text>Hello</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default OnboardPage;
