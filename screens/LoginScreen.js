import React from 'react'
import {Button, View, StyleSheet, Text, TextInput} from 'react-native'
//import SignInGoogleBase from '../components/SignIn.js'

//<SignInGoogleBase />

class LoginScreen extends React.Component {

  state = {
    username: '',
    password: '',
  }

  setUser = username =>{
    this.setState({username})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>~~ Login Screen ~~</Text>
        <TextInput
          placeholder="username"
          value={this.state.username}
          onChangeText={this.setUser}
          autoCapitalize="none"
        />
        <Button title="Login"
          onPress={()=>this.props.navigation.navigate('About', this.state)}
        />
        
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

export default LoginScreen