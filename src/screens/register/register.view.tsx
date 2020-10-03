import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {Container} from 'native-base';
import firestore from '@react-native-firebase/firestore';
import {Todo} from 'src/core/entity';
import {scale} from '@shared-view';
import {TextInput} from 'react-native-gesture-handler';

export interface Props {
  navigation?: any;
  isLoading?: boolean;
  data?: Array<Todo>;
  doRegister: (email: any, password: any, username: any) => void;
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

  checkAndDoRegister = (email :any, password: any, confirmPassword: any, username: any) => {
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
