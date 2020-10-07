import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native';
import { Container } from 'native-base';
import { heightPercentageToDP, scale, verticalScale, widthPercentageToDP } from '@shared-view';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Assets } from '@react-navigation/stack';
import { BACKGROUND_STARTED, BACKGROUND_STARTED_2, BACKGROUND_STARTED_3, SLIDE_STARTED, SLIDE_STARTED_2, SLIDE_STARTED_3 } from '@assets';

export interface Props {
  navigation?: any;
}

const data = [
  {
    key: 'one',
    title: 'Welcome to aking',
    text: 'Whats going to happen tomorrow?',
    image: SLIDE_STARTED,
    background: BACKGROUND_STARTED
  },
  {
    key: 'two',
    title: 'Work happens',
    text: 'Get notified when work happens.',
    image: SLIDE_STARTED_2,
    background: BACKGROUND_STARTED_2
  },
  {
    key: 'three',
    title: 'Tasks and assign',
    text: 'Task and assign them to colleagues.',
    image: SLIDE_STARTED_3,
    background: BACKGROUND_STARTED_3
  }
];

type Item = typeof data[0];

export class GetStartedComponent extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  _renderItem = ({ item }: {item : Item}) => {
    return (
      <Container style={styles.container}>
        <View style={styles.slide}>
          <Image source={item.image} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
        <View style={styles.background}>
          <ImageBackground source={item.background} style={styles.backgroundImage}>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('')}} style={styles.gs}>
              <Text style={styles.textGs}>Get Started</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('')}} style={styles.lg}>
              <Text style={styles.textLg}>Log In</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </Container>
    );
  }

  render() {
      return (
        <AppIntroSlider 
          renderItem={this._renderItem} 
          data={data} 
          showNextButton={false}
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}
          showDoneButton={false}
        />
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(10),
    justifyContent: 'center',
  },
  slide: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    margin: 10
  },
  title: {
    textAlign: 'center',
    margin: 5
  },
  background: {
    flex: 1
  },
  backgroundImage: { 
    flex: 1,
    scaleX: scale(1),
    scaleY: scale(1),
    marginBottom: -200,
  },
  dot: {
    marginBottom: scale(380)
  },
  activeDot: {
    marginBottom: scale(380)
  },
  lg: {
    alignItems: 'center',
  },
  textLg: {
  }, 
  gs: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45, 
    marginTop: 80,
    margin: 35,
    borderRadius: 5
  },
  textGs: {
  }
});
