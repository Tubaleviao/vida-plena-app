import React from 'react'
import {Button, View, StyleSheet, Text} from 'react-native'
import Firebase from '../components/FirebaseData.js'
import {StackActions, NavigationActions} from 'react-navigation';

const resetAction = StackActions.reset({
  index: null,
  actions: [NavigationActions.navigate({ routeName: 'Login' })],
});

class DashboardScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>~~ Perfil ~~</Text>
        <Button title="Go to Settings" 
          onPress={()=>this.props.navigation.navigate('Settings')}
        />
        <Button title="Logout" 
          onPress={()=>{Firebase.signOut(); this.props.navigation.dispatch(resetAction);}}
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

export default DashboardScreen