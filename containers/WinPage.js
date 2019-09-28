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

class WinPage extends React.Component {
  constructor(props) {
    super(props);
    this.clearGame = this.clearGame.bind(this);
    this.animateOpacity = this.animateOpacity.bind(this);
  }

  clearGame() {
    this.props.clearGame();
    this.props.navigation.navigate('InputScreen');
  }

  _animatedWidth = new Animated.Value(0);
  animateOpacity = () => {
    Animated.timing(this._animatedWidth, {
      toValue: 1,
    }).start();
  };

  componentWillMount() {
    this.animateOpacity;
  }

  render() {
    return (
      <LinearGradient colors={['#5FD890', '#31B057']}>
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
              <Svg height="50%" width="100%" viewBox="0 0 100 100">
                <Circle
                  cx="50"
                  cy="50"
                  r="50"
                  strokeWidth="2.5"
                  fill="#E0E0E0"
                  opacity={0.25}
                />
              </Svg>
            </View>
            <View style={styles.bottomContainer}>
              <TouchableOpacity style={styles.button} onPress={this.clearGame}>
                <Text style={styles.buttonText}>SELESAI</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    marginHorizontal: 30,
    marginTop: 30,
  },
  topContainer: {
    alignItems: 'center',
  },
  anjay: {
    fontFamily: 'NeoSansPro-Medium',
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
  },
  midContainer: {
    marginTop: 50,
    alignItems: 'center',
    height: '100%',
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
