import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {Button, ButtonText} from '../theme';

const OnboardPage = () => (
  <View style={styles.container}>
    <View style={styles.topContainer}>
      <Text style={styles.topText}>Selamat datang,</Text>
      <Text style={styles.topText}>Masukin jumlah pemainnya dong</Text>
    </View>
    <View style={styles.midContainer}>
      <Text style={styles.midText}>Jumlah Pemain</Text>
      <TextInput
        style={styles.input}
        multiline={false}
        keyboardType="number-pad"
        placeholder="5"
      />
    </View>
    <View style={styles.bottomContainer}>
      <TouchableOpacity style={styles.button} underlayColor="#51C273">
        <Text style={styles.buttonText}>LANJUT</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    marginTop: 100,
    marginHorizontal: 10,
  },
  topText: {
    fontSize: 25,
    fontFamily: 'NeoSansPro-Medium',
  },
  midContainer: {
    marginTop: 50,
  },
  midText: {
    fontFamily: 'NeoSansPro-Medium',
    fontSize: 20,
  },
  input: {
    borderBottomWidth: 3,
    borderBottomColor: '#25282B',
    fontFamily: 'NeoSansPro-Medium',
    fontSize: 30,
    color: '#25282B',
  },
  bottomContainer: {
    marginTop: 280,
  },
  button: Button,
  buttonText: ButtonText,
});

export default OnboardPage;
