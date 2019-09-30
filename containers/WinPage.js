import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Circle} from 'react-native-svg';
import {withNavigation} from 'react-navigation';
import {clearGame} from '../utils/actions/playerNumber';
import {connect} from 'react-redux';
import Confetti from 'react-native-confetti';

class WinPage extends React.Component {
  constructor(props) {
    super(props);
    this.clearGame = this.clearGame.bind(this);
    this.animateOpacity = this.animateOpacity.bind(this);
  }

  componentDidMount() {
    this.animateOpacity;
    // TODO
    if (this._confettiView) {
      this._confettiView.startConfetti();
    }
  }

  clearGame() {
    this.props.clearGame();
    this._confettiView.stopConfetti();
    this.props.navigation.navigate('InputScreen');
  }

  _animatedWidth = new Animated.Value(0);
  animateOpacity = () => {
    Animated.timing(this._animatedWidth, {
      toValue: 1,
    }).start();
  };

  render() {
    return (
      <View style={styles.root}>
        <LinearGradient colors={['#5FD890', '#31B057']}>
          <Confetti
            ref={node => (this._confettiView = node)}
            confettiCount={1000}
            size={1}
            untilStopped
          />
          <View style={styles.container}>
            <View style={styles.topContainer}>
              <Text style={styles.anjay}>ANJAY!</Text>
            </View>
            <View style={styles.midContainer}>
              <Text style={styles.text1}>Kamu telah terpilih menjadi</Text>
              <Text style={styles.text2}>KETUA KELAS SBF PTI 2019</Text>
              <View style={styles.pulse}>
                <Image
                  source={require('../assets/img/kape.png')}
                  style={styles.kape}
                />
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <TouchableOpacity style={styles.button} onPress={this.clearGame}>
                <Text style={styles.buttonText}>SELESAI</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
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
    // marginHorizontal: 10,
    // marginBottom: 10,
    // marginTop: 10,
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  topContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  anjay: {
    fontFamily: 'NeoSansPro-Medium',
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
  },
  midContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    flex: 1,
  },
  text1: {
    fontFamily: 'NeoSansPro-Regular',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  text2: {
    fontFamily: 'NeoSansPro-Medium',
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },
  kape: {
    position: 'absolute',
    width: 200,
    height: 200,
    opacity: this._animatedWidth,
  },
  button: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: 'NeoSansPro-Medium',
    fontSize: 20,
  },
  pulse: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    width: '100%',
  },
});

const mapDispatchToProps = dispatch => {
  return {
    clearGame: () => dispatch(clearGame()),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(withNavigation(WinPage));
