import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import {Container} from 'native-base';
import {scale, verticalScale} from '@shared-view';

export interface Props {
  doRegister: (email: string, password: string, username: string) => void;
}

export interface State {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export class RegisterComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    };
  }

  setValue(property: string, value: any) {
    this.setState({
      ...this.state,
      [property]: value,
    });
  }

  checkAndDoRegister = () => {
    const {doRegister} = this.props;
    const {email, password, confirmPassword, username} = this.state;
    if (!email || !password || !confirmPassword || !username) {
      Alert.alert(
        "Thông báo",
        "Please type all fields",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert(
        "Thông báo",
        "Your password doesn't match",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
      return;
    }
    doRegister(email, password, username);
  };

  render() {
    const {username, password, confirmPassword, email} = this.state;
    return (
      <Container style={styles.container} >
        <ScrollView style={styles.scrollView}>
          <View>
            <Text style={styles.headerText}>Register</Text>
            <Text style={styles.headerDescription}>Please register to continue</Text>
          </View>
          <View>
            <View>
              <Text style={styles.userText}>Username</Text>
              <TextInput
                style={styles.userInput}
                placeholder="Enter your username"
                onChangeText={value => this.setValue("username", value)}
                value={username}/>
            </View>
            <View>
              <Text style={styles.userText}>Email</Text>
              <TextInput
                style={styles.userInput}
                placeholder="Enter your email"
                onChangeText={value => this.setValue("email", value)}
                value={email}/>
            </View>
            <View>
            <Text style={styles.userText}>Password</Text>
              <TextInput
                style={styles.userInput}
                placeholder="Enter your password"
                onChangeText={value => this.setValue("password", value)}
                value={password}
                secureTextEntry={true}
                />
            </View>
            <View>
              <Text style={styles.userText}>Confirm Password</Text>
              <TextInput
                style={styles.userInput}
                placeholder="Confirm your password"
                onChangeText={value => this.setValue("confirmPassword", value)}
                value={confirmPassword}
                secureTextEntry={true}
                />
            </View>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.checkAndDoRegister()}>
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'AvenirNextRoundedPro-Demi',
    backgroundColor: "#FFF",
    flex:1,
  },
  scrollView: {
    padding: scale(20),
    backgroundColor: "#FFF",

  },
  headerText: {
    fontSize: verticalScale(32),
    marginTop: verticalScale(50),
    color: '#313131',
  },
  headerDescription: {
    fontSize: verticalScale(18),
    color: '#9B9B9B',
  },
  userInput: {
    color: '#313131',
    paddingHorizontal: 0,
    width: '100%',
    fontSize: verticalScale(18),
    borderBottomColor: '#707070',
    borderBottomWidth: scale(1 / 2),
  },
  userText: {
    fontSize: verticalScale(20),
    color: '#313131',
    marginTop: scale(40),
  },
  button: {
    backgroundColor: '#F96060',
    width: '100%',
    height: verticalScale(48),
    borderRadius: scale(6),
    marginVertical: scale(50),
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: verticalScale(20),
    padding: scale(10),
    textAlign: 'center',
  },
});
