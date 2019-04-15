import React from 'react'
import {Button, View, StyleSheet, Text, TextInput, AsyncStorage} from 'react-native'
import SignIn from '../components/SignIn.js'
import Firebase from '../components/FirebaseData.js'

class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  _storeData = async (fire) => {
    try {
      await AsyncStorage.setItem('firebase', fire);
    } catch (error) {
      // Error saving data
    }
  }

  state = {
    username: '',
    password: '',
    authenticated: false,
  }

  change = (authenticated,user) =>{
    this.mounted ? this.setState({authenticated}) : true
    console.log('state changed: '+authenticated+' '+this.mounted)
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
    const {params} = this.props.navigation.state
    if(params&&params.firebase){
      this.setState({firebase: params.firebase})
    }else if (!this.state.firebase){
      this.setState({firebase: new Firebase(this.change)})
    }

    //!this.state.firebase ? this.setState({firebase: new Firebase(this.change)}) : true
    //this.setState({firebase: new Firebase(this.change)})
    //this.state.firebase = new Firebase(this.change);
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    this.mounted = false
  }

  componentDidUpdate(prevProps) {
    console.log(this.state.authenticated)
    if(this.state.authenticated){
      this._storeData(this.state.firebase)
      this.props.navigation.navigate('About', this.state)
    }
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

          <SignIn signInWithGoogleAsync={this.state.firebase? this.state.firebase.loginWithGG : true} 
            provider='Google'
            state={this.state}/>
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