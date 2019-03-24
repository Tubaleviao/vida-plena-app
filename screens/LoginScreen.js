import React from 'react'
import {Button, View, StyleSheet, Text, TextInput} from 'react-native'
import SignIn from '../components/SignIn.js'
import {loginWithFacebook, signInWithGoogleAsync, signInWithEmailAndPassword, authenticated} from '../components/FirebaseData.js'

class LoginScreen extends React.Component {

  state = {
    username: '',
    password: '',
  }

  setUser = username =>{
    this.setState({username})
  }
  setPass = password =>{
    this.setState({password})
  }

  componentWillMount() {
    authenticated ? this.props.navigation.navigate('About', this.state) : false;
  }

  //<Button title="Login with username and password" onPress={()=>this.props.navigation.navigate('About', this.state)} />

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
        <TextInput
          placeholder="password"
          value={this.state.password}
          onChangeText={this.setPass}
          autoCapitalize="none"
        />
        <SignIn loginWithFacebook={loginWithFacebook} provider='Facebook'/>
        <SignIn signInWithGoogleAsync={signInWithGoogleAsync} provider='Google'/>
        <SignIn signInWithEmailAndPassword={signInWithEmailAndPassword} provider='Username and Password' state={this.state}/>
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