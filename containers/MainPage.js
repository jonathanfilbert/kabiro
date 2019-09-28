import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Button, ButtonText} from '../theme';
import Svg, {Circle} from 'react-native-svg';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';
import {playRoulette} from '../utils/actions/playerNumber';
class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay() {
    if (this.props.currentNumber + 1 === this.props.chosenNumber) {
      // NAVIGATE
      this.props.navigation.navigate('ResultScreen');
    } else {
      this.props.playRoulette();
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.heading}>Jumlah Pemain</Text>
          <Text style={styles.subHeading}>{this.props.playerAmount} Orang</Text>
          <Text style={styles.instruction}>Tekan tombol untuk bermain!</Text>
        </View>
        <View style={styles.midContainer}>
          <Svg height="100%" width="100%" viewBox="0 0 100 100">
            <Circle cx="50" cy="50" r="40" strokeWidth="2.5" fill="#31B057" />
          </Svg>
          <Text style={styles.counterMiddle}>{this.props.currentNumber}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={this.handlePlay}>
            <Text style={styles.buttonText}>MAIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    padding: 40,
  },
  heading: {
    fontFamily: 'NeoSansPro-Regular',
    fontSize: 20,
  },
  subHeading: {
    fontSize: 20,
    fontFamily: 'NeoSansPro-Medium',
  },
  midContainer: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterMiddle: {
    fontFamily: 'NeoSansPro-Medium',
    fontSize: 70,
    color: 'white',
    position: 'absolute',
  },
  button: Button,
  buttonText: ButtonText,
  instruction: {
    fontFamily: 'NeoSansPro-Medium',
    fontSize: 30,
    marginTop: 25,
  },
});

const mapStateToProps = state => {
  return {
    playerAmount: state.number.playerAmount,
    currentNumber: state.number.currentNumber,
    chosenNumber: state.number.chosenNumber,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    playRoulette: () => dispatch(playRoulette()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(MainPage));
