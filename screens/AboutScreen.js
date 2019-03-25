import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Firebase from '../components/FirebaseData.js'

class AboutScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const {params} = navigation.state
    return {
      headerTitle: 'teste',
    }
  }

  mostrar = () => {
    this.props.navigation.goBack();
  }


  render() {
    const {params} = this.props.navigation.state // this.props.navigation.goBack()
    //console.log('data: '+ JSON.stringify(this.props.navigation.state))
    //console.log('state: '+JSON.stringify(this.props.navigation.state))

    
    ////firebase.isAuthenticated() ? true : this.props.navigation.navigate('Login', this.state)
    // 
    return (
      <View style={styles.container}>
        <Text>About Screen</Text>
        <Button type="submit" onPress={this.mostrar} title={'Sign Out'} /> 
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