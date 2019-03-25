import React from 'react'
import {Button, View, StyleSheet, Text, TextInput} from 'react-native'
import SignIn from '../components/SignIn.js'
import Firebase from '../components/FirebaseData.js'

class LoginScreen extends React.Component {

  state = {
    username: '',
    password: '',
    authenticated: false
  }

  change = authenticated =>{
    this.setState({authenticated})
    //this.setState({data});
  }

  setUser = username =>{
    this.setState({username})
  }
  setPass = password =>{
    this.setState({password})
  }

  componentWillMount() {
    this.state.firebase = new Firebase(this.change);
    console.log('componentWillMount')
  }

  componentDidUpdate(prevProps) {
    //console.log('componentDidUpdate') //
    this.state.firebase.signOut();
    this.state.authenticated ? this.props.navigation.navigate('About', this.state) : true
  }

  //<Button title="Login with username and password" onPress={()=>this.props.navigation.navigate('About', this.state)} />
// <SignIn signInWithGoogleAsync={this.state.firebase.loginWithGG} provider='Google'/>
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
          secureTextEntry={true}
        />
        <SignIn loginWithFacebook={this.state.firebase.loginWithFB} provider='Facebook'/>
        
        <SignIn signInWithEmailAndPassword={this.state.firebase.loginWithEP} provider='Username and Password' state={this.state} />
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