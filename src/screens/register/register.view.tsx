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
  doRegister: () => void;
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

  // const doRegister

  render() {
    const {username, password, confirmPassword, email} = this.state;
    // const {doRegister} = this.props;
    return (
      <Container style={styles.container}>
        <View style={{flex: 1}}>
          <TextInput value={username} placeholder="username"/>
          <TextInput value={email} placeholder="email"/>
          <TextInput value={password} placeholder="password"/>
          <TextInput value={confirmPassword} placeholder="confirm your password"/>
          <TouchableOpacity >
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
