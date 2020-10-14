import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container } from 'native-base';
import { verticalScale } from '@shared-view';
import { LOGO_AKING } from '@assets';

interface Props {
  navigation?: any;
}

export class SplashComponent extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve('success')
      }, 2000)
    )
  }

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.props.navigation.navigate('GetStarted');
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.content}>
          {/* Image logo */}
          <Image
            style={styles.image}
            source={LOGO_AKING}
            resizeMode={'contain'}
          />
          {/* Text logo */}
          <Text style={styles.text}>aking</Text>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: verticalScale(149),
    height: verticalScale(149)
  },
  text: {
    fontSize: verticalScale(48),
    color: '#010101'
  }
});
