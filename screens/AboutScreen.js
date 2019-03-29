import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
//import Firebase from '../components/FirebaseData.js'

class AboutScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const {params} = navigation.state
    return {
      headerTitle: 'teste',
    }
  }

  componentDidMount(){
    //this.setState({firebase: new Firebase()})
  }

  mostrar = () => {
    this.props.navigation.goBack();
  }

  signOut = () => {
    const {firebase} = this.props.navigation.state.params
    if(firebase){
      firebase.signOut();
      this.props.navigation.navigate('Login', this.props.navigation.state.params)
    }else{
      console.log('nop: '+JSON.stringify(this.props.navigation.state.params.firebase))
    }
  }

  render() {
    const {params} = this.props.navigation.state // this.props.navigation.goBack()
    //console.log('data: '+ JSON.stringify(this.props.navigation.state))
    //console.log('state: '+JSON.stringify(this.props.navigation.state))
    //this.props.navigation.state.firebase.signOut();
    
    ////firebase.isAuthenticated() ? true : this.props.navigation.navigate('Login', this.state)
    // 
    return (
      <View style={styles.container}>
        <Text>About Screen</Text>
        <Button type="submit" onPress={this.signOut} title={'Sign Out'} /> 
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