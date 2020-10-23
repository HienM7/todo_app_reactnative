import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Container } from 'native-base';
import { scale, verticalScale } from '@shared-view';


interface Props {
  navigation: any,
  isLoading?: boolean,
  isLogged?: boolean,
  username?: string
  doLogin: (email: string, password: string) => void;
}

interface State {
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

  handleLogin = () => {
    // Check validation
    if (this.state.email != "" && this.state.password != "") {
      this.props.doLogin(this.state.email, this.state.password);
    } else {
      Alert.alert('Thông báo', 'Tài khoản hoăc mật khẩu là bắt buộc!!')
    }
  }

  // TODO: signIn With Email And Password
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
    const { isLoading, isLogged, username, navigation } = this.props;
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
                secureTextEntry={true}
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
                onPress={() => this.handleLogin()}>
                <Text style={styles.buttonText}>Log In</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.textRegister}>Haven't registered for My Account yet?</Text>
              <Text style={[styles.textRegister, { marginTop: verticalScale(5) }]}>Create you login <Text onPress={() => navigation.navigate('Register')} style={[styles.textRegister, { color: 'blue', textDecorationLine: 'underline' }]}>here.</Text></Text>
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
    width: '100%',
    fontSize: verticalScale(32),
    marginTop: verticalScale(30),
    color: '#313131',
  },
  itemText: {
    width: '100%',
    marginTop: verticalScale(10),
    fontSize: verticalScale(18),
    color: '#9B9B9B',
  },
  userInput: {
    color: '#313131',
    width: '100%',
    fontSize: verticalScale(18),
    borderBottomColor: '#707070',
    borderBottomWidth: scale(1 / 2),
  },
  userText: {
    width: '100%',
    fontSize: verticalScale(22),
    color: '#313131',
    marginTop: verticalScale(40),
  },
  forgotRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%'
  },
  textForgot: {
    color: '#313131',
    fontSize: verticalScale(20),
    marginTop: verticalScale(20)
  },
  button: {
    backgroundColor: '#F96060',
    width: '100%',
    height: verticalScale(48),
    borderRadius: scale(6),
    fontSize: verticalScale(32),
    marginTop: verticalScale(50),
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    width: '100%',
    fontSize: verticalScale(20),
    padding: scale(10),
    textAlign: 'center',
  },
  textRegister: {
    color: '#313131',
    fontSize: verticalScale(16),
    marginTop: verticalScale(20)
  }
});