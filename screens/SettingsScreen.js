import React from 'react'
import {Button, View, StyleSheet, Text, TextInput} from 'react-native'
import HeaderButton from '../components/HeaderButton'
import {StackActions, NavigationActions} from 'react-navigation';

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Login' })],
});

class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const {params} = navigation.state
    return {
      headerRight: HeaderButton,
      headerTitle: 'testing',
      headerTintColor: '#fff',
      headerStyle: {
          backgroundColor: '#000',
      },
 //     headerTitle: params.username,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>~~ Settings Screen ~~</Text>
        <Button title="goBack" 
          onPress={()=>{this.props.navigation.dispatch(resetAction);}}
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

export default SettingsScreen