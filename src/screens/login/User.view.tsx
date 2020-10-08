import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Container } from 'native-base';
import { scale, verticalScale } from '@shared-view';

export interface Props {
  isLoading?: boolean,
  isLogged?: boolean,
  username?: string
  doLogin: (email: string, password: string) => void;
}

export interface State {
  email: string;
  password: string;
}

export class LoginComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  // doLogin = () => {
  //   auth()
  //     .signInWithEmailAndPassword(this.state.txtEmail, this.state.txtPassword)
  //     .then(() => {
  //       Alert.alert(
  //         "Notifycation",
  //         "Logged in successfully",
  //         [
  //           { text: "OK", onPress: () => console.log("OK Pressed") }
  //         ],
  //         { cancelable: false }
  //       );  
  //     })
  //     .catch(error => {
  //       Alert.alert(
  //         "Notifycation",
  //         "Logged failed",
  //         [
  //           { text: "OK", onPress: () => console.log("OK Pressed") }
  //         ],
  //         { cancelable: false }
  //       );  
  //     });
  // }

  render() {
    const { doLogin, isLoading, isLogged, username } = this.props;
    console.log(isLoading, isLogged, username);
    return (
      <Container style={styles.container}>
        <View>
          <Text style={styles.item}>Welcome Back</Text>
          <Text style={styles.itemText}>Sign in to continue</Text>
        </View>
        <View>
          <View>
            <Text style={styles.userText}>Username</Text>
            <TextInput
              style={styles.userInput}
              placeholder='Enter your email'
              onChangeText={email => this.setState({ email })}
              value={this.state.email}>
            </TextInput>
          </View>
          <View>
            <Text style={styles.userText}> Password </Text>
            <View>
              <TextInput
                style={styles.userInput}
                placeholder='Enter your password'
                onChangeText={(text) => this.setState({ password: text })}
                value={this.state.password}>
              </TextInput>
            </View>

            <View style={styles.forgotRight}>
              <Text style={styles.textForgot}>Forgot Password</Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => doLogin(this.state.email, this.state.password)}>
                <Text style={styles.buttonText}>Log In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingRight: scale(20),
    paddingLeft: scale(20),
    fontFamily: 'AvenirNextRoundedPro-Demi',
  },
  item: {
    height: verticalScale(50),
    width: '100%',
    fontSize: verticalScale(32),
    marginTop: verticalScale(50),
    color: '#313131',
  },
  itemText: {
    height: verticalScale(24),
    width: '100%',
    fontSize: verticalScale(18),
    color: '#9B9B9B',
  },
  userInput: {
    color: '#313131',
    width: '100%',
    height: verticalScale(50),
    fontSize: verticalScale(18),
    borderBottomColor: '#707070',
    borderBottomWidth: scale(1 / 2),
  },
  userText: {
    height: verticalScale(27),
    width: '100%',
    fontSize: verticalScale(22),
    color: '#313131',
    marginTop: scale(40),
  },
  forgotRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%'
  },
  textForgot: {
    color: '#313131',
    fontSize: verticalScale(20),
    height: verticalScale(24),
    marginTop: scale(20)
  },
  button: {
    backgroundColor: '#F96060',
    width: '100%',
    height: verticalScale(48),
    borderRadius: scale(6),
    fontSize: verticalScale(32),
    marginTop: scale(50),
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    height: verticalScale(50),
    width: '100%',
    fontSize: verticalScale(20),
    padding: scale(10),
    textAlign: 'center',
  }
});