import React from 'react'
import {Button, View, StyleSheet, Text} from 'react-native'

class DashboardScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>~~ Perfil ~~</Text>
        <Button title="Go to Settings" 
          onPress={()=>this.props.navigation.navigate('Settings')}
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