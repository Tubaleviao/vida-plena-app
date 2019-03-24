import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {authenticated} from '../components/FirebaseData.js'
import {StackActions, NavigationActions} from 'react-navigation';

const resetAction = StackActions.reset({
  index: null,
  actions: [NavigationActions.navigate({ routeName: 'Login' })],
});

class AboutScreen extends React.Component {

  componentWillMount() {
    authenticated ? this.props.navigation.navigate('About', this.state) : this.props.navigation.dispatch(resetAction);
  }

  static navigationOptions = ({ navigation }) => {
    const {params} = navigation.state
    return {
      headerTitle: 'teste',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>About Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AboutScreen