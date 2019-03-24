import React from 'react'
import {Button, View, StyleSheet, Text, TextInput, Form} from 'react-native'

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
    this.provider = props.provider
  }

  onSubmit = () => {
    console.log(this.props.provider)
    switch(this.props.provider){
      case 'Facebook':
        this.props.loginWithFacebook();
      case 'Google':
        this.props.signInWithGoogleAsync() ? this.props.navigation.navigate('About', this.state) : false;
      case 'Username and Password':
        console.log(this.props.state.username, this.props.state.password);
        this.props.signInWithEmailAndPassword(this.props.state.username, this.props.state.password);
      default:
        console.log('No default '+this.props.provider);
    }
  };

  render() {
    const { error } = this.state;

    return (
      <View>
        <Button type="submit" onPress={this.onSubmit} title={'Sign In With '+this.provider} />
        <Text> Alo </Text>
      </View>
    );
  }
}

export default SignIn

/// {error && <p>{error.message}</p>}