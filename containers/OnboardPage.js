import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';
import {postNumber} from '../utils/actions/playerNumber';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Button, ButtonText} from '../theme';

class OnboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenNumber: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(text) {
    this.setState({
      chosenNumber: text,
    });
  }

  handleSubmit() {
    this.props.postNumber(this.state.chosenNumber);
    this.setState({
      chosenNumber: '',
    });
    this.props.navigation.navigate('MainScreen');
  }

  render() {
    return (
      <View style={styles.root}>
        <KeyboardAwareScrollView>
          <View style={styles.container}>
            <View style={styles.topContainer}>
              <Text style={styles.topText}>Selamat datang,</Text>
              <Text style={styles.topText}>Masukin jumlah pemainnya dong</Text>
            </View>
            <View style={styles.midContainer}>
              <Text style={styles.midText}>Jumlah Pemain</Text>
              <TextInput
                value={this.state.chosenNumber.toString()}
                style={styles.input}
                multiline={false}
                keyboardType="number-pad"
                placeholder="5"
                onChangeText={this.handleInput}
              />
            </View>
            <View style={styles.bottomContainer}>
              <TouchableOpacity
                style={styles.button}
                underlayColor="#51C273"
                onPress={this.handleSubmit}>
                <Text style={styles.buttonText}>LANJUT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: '100%',
  },
  container: {
    height: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingTop: 30,
  },
  topText: {
    fontSize: 25,
    fontFamily: 'NeoSansPro-Medium',
  },
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  midContainer: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
  midText: {
    alignSelf: 'flex-start',
    fontFamily: 'NeoSansPro-Medium',
    fontSize: 20,
  },
  input: {
    borderBottomWidth: 3,
    borderBottomColor: '#25282B',
    fontFamily: 'NeoSansPro-Medium',
    fontSize: 30,
    color: '#25282B',
    width: '100%',
  },
  bottomContainer: {
    height: '100%',
    flex: 1,
    paddingTop: 200,
  },
  button: Button,
  buttonText: ButtonText,
});

const mapDispatchToProps = dispatch => {
  return {
    postNumber: number => dispatch(postNumber(number)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(withNavigation(OnboardPage));
