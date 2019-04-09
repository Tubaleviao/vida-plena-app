import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
//import Firebase from '../components/FirebaseData.js'

import { StackActions} from 'react-navigation'

class AboutScreen extends React.Component {
  constructor(props) {
    super(props);
  }


  static navigationOptions = ({ navigation }) => {
    const {params} = navigation.state
    return {
      headerTitle: (params ? 'Olá '+params.firebase.user.displayName.split(' ')[0] : 'teste'),
    }
  }

  componentDidMount(){
    //this.setState({firebase: new Firebase()})
  }

  mostrar = () => {
    this.props.navigation.goBack();
  }

  signOut = () => {
    const {params} = this.props.navigation.state
    if(params&&params.firebase){
      params.firebase.signOut();
      //this.props.navigation.navigate('Login', params)
      //this.props.navigation.popToTop()
      //this.props.navigation.goBack()
      //this.props.navigation.dismiss()
      this.props.navigation.navigate('Login', params)
    }else{
      console.log('nop: ')
      //this.props.navigation.goBack()
      this.props.navigation.navigate('Login')
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