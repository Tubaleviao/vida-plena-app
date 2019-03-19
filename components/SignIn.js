import React from 'react'
import {Button, View, StyleSheet, Text, TextInput, Form} from 'react-native'

class SignInGoogleBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = event => {
    this.props.firebase
      .doSignInWithGoogle()
      .then(socialAuthUser => {
        this.setState({ error: null });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { error } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <Button type="submit">Sign In with Google</Button>

        <Text>{error && <p>{error.message}</p>}</Text>
      </Form>
    );
  }
}

export default SignInGoogleBase