import React from 'react'
import {Button, View, StyleSheet, Text, TextInput, Form} from 'react-native'

class SignInGoogleBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = () => {
    this.props.firebase
      .signInGoogle()
      .then(socialAuthUser => {
        this.setState({ error: null });
        //this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    const { error } = this.state;

    return (
      <View>
        <Button type="submit" onPress={this.onSubmit} title="Sign In with Google" />

        <Text>Testing</Text>
      </View>
    );
  }
}

export default SignInGoogleBase

/// {error && <p>{error.message}</p>}