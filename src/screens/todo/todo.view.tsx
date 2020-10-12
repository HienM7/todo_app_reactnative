import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Alert,
  BackHandler
} from 'react-native';
import { Container } from 'native-base';
import firestore from '@react-native-firebase/firestore';
import { Todo } from '@core';
import { scale } from '@shared-view';

interface Props {
  navigation?: any;
  isLoading?: boolean;
  data?: Array<Todo>;
  getTodoList: () => void;
}

interface State {
  todoList?: Array<Todo>;
}

export class TodoComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      todoList: []
    }
  }

  backAction = () => {
    Alert.alert("Hold on!", "Are you sure you want to exit the application?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.backAction);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backAction);
  }

  addNewTodo = (item: Todo) => {
    firestore()
      .collection('Todo')
      .add(item)
      .then(() => {
        Alert.alert('Todo added!');
      });
  }

  updateTodoItem = (documentRef: any, item: Todo) => {
    firestore()
      .collection('Todo')
      .doc(documentRef)
      .update(item)
      .then(() => {
        Alert.alert('Todo updated!');
      });
  }

  deleteTodoItem = (documentRef: any) => {
    firestore()
      .collection('Todo')
      .doc(documentRef)
      .delete()
      .then(() => {
        Alert.alert('Todo deleted!');
      });
  }

  getTodoList = () => {
    let rs: Array<Todo> = [];
    firestore()
      .collection('Todo')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          const item = {
            id: documentSnapshot.id,
            content: documentSnapshot.data().content,
            completed: documentSnapshot.data().completed
          };
          rs.push(item);
        });
        this.setState({
          todoList: rs
        })
      });
  }

  render() {
    return (
      <Container style={styles.container}>
        <View style={{ flex: 1 }} >
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 10, marginVertical: 5, backgroundColor: 'orange' }} onPress={() => this.addNewTodo({ content: 'This is content todo demo', completed: false })}>
            <Text>Add New Todo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 10, marginVertical: 5, backgroundColor: 'red' }} onPress={() => this.updateTodoItem('hBaI25g9X5zTf8SQWn1z', { completed: true })}>
            <Text>Update Todo Item</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 10, marginVertical: 5, backgroundColor: 'orange' }} onPress={() => this.deleteTodoItem('hBaI25g9X5zTf8SQWn1z')}>
            <Text>Delete Todo Item</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 10, marginVertical: 5, backgroundColor: 'red' }} onPress={() => this.props.getTodoList()}>
            <Text>Get Todo List</Text>
          </TouchableOpacity>
          {
            this.props.isLoading
              ?
              <ActivityIndicator size="small" color="#0000ff" />
              :
              <FlatList
                data={this.props.data}
                renderItem={({ item, index }) => (
                  <View key={index.toString()} style={styles.item}>
                    <Text style={{ textDecorationLine: item.completed ? 'line-through' : 'none' }}>{item.id}</Text>
                    <Text style={{ textDecorationLine: item.completed ? 'line-through' : 'none' }}>{item.content}</Text>
                    <Text style={{ textDecorationLine: item.completed ? 'line-through' : 'none' }}>{`${item.completed}`}</Text>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
          }
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(10)
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});
