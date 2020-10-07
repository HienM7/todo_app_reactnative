import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';
import {Container} from 'native-base';
import {scale} from '@shared-view';

export interface Props {
  doRegister: (email: string, password: string, username: string) => void;
}

export interface State {
  email: string,
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
      [property]: value
    });
  }

  checkAndDoRegister = (email :string, password: string, confirmPassword: string, username: string) => {
    const { doRegister } = this.props;
    if (!email || !password || !confirmPassword || !username ) {
      return;
    }
    if (password !== confirmPassword) {
      return;
    }
    doRegister(email, password, username);
  }

  render() {
    const {username, password, confirmPassword, email} = this.state;
    return (
      <Container style={styles.container}>
        <View style={{flex: 1}}>
          <TextInput value={username} onChangeText={(value) => this.setValue('username', value)} placeholder="username"/>
          <TextInput value={email} onChangeText={(value) => this.setValue('email', value)} placeholder="email"/>
          <TextInput value={password} onChangeText={(value) => this.setValue('password', value)} placeholder="password"/>
          <TextInput value={confirmPassword} onChangeText={(value) => this.setValue('confirmPassword', value)} placeholder="confirm your password"/>
          <TouchableOpacity onPress={() => this.checkAndDoRegister(email, password, confirmPassword, username)} >
            <Text>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(10),
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
