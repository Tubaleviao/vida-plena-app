import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

class AboutScreen extends React.Component {

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