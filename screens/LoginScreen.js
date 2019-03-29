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
    this.mounted ? this.setState({authenticated}) : true
  }

  setUser = username =>{
    this.setState({username})
  }
  setPass = password =>{
    this.setState({password})
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount(){
    this.mounted = true
    console.log('componentDidMount '+this.state.firebase) // quando vier por parametro, usar ele
    this.props.navigation.state.params ? console.log(this.props.navigation.state.params.firebase) : true

    !this.state.firebase ? this.setState({firebase: new Firebase(this.change)}) : true
    //this.setState({firebase: new Firebase(this.change)})
    //this.state.firebase = new Firebase(this.change);
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    this.mounted = false
  }

  componentDidUpdate(prevProps) {
    console.log(this.state.authenticated)
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
        <SignIn loginWithFacebook={this.state.firebase ? this.state.firebase.loginWithFB : true} 
          provider='Facebook'/>
        
        <SignIn signInWithEmailAndPassword={this.state.firebase? this.state.firebase.loginWithEP : true} 
          provider='Username and Password' 
          state={this.state} />
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