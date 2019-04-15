import React from 'react'
import {Button, View, StyleSheet, Text} from 'react-native'
import Firebase from '../components/FirebaseData.js'
import {StackActions, NavigationActions} from 'react-navigation';
import { PaymentsStripe as Stripe } from 'expo-payments-stripe';

const resetAction = StackActions.reset({
  index: null,
  actions: [NavigationActions.navigate({ routeName: 'Login' })],
});

class DashboardScreen extends React.Component {

  componentWillMount(){
    Stripe.setOptionsAsync({
      publishableKey: 'pk_test_FFRveYM6dqUZrWVwH23wOCWA00ZDB4hyNB', // Your key
      androidPayMode: 'test', // [optional] used to set wallet environment (AndroidPay)
      merchantId: 'your_merchant_id', // [optional] used for payments with ApplePay
    })



    //this.setState({stripe})
    //console.log(stripe)
  }

  async callForm(){
    const options = {
      requiredBillingAddressFields: 'full',
      prefilledInformation: {
        billingAddress: {
          name: 'Gunilla Haugeh',
          line1: 'Canary Place',
          line2: '3',
          city: 'Macon',
          state: 'Georgia',
          country: 'US',
          postalCode: '31217',
        },
      },
    };

    const token = await Stripe.paymentRequestWithCardFormAsync(options);
    console.log(token)
  }
  // onPress={()=>this.props.navigation.navigate('Settings')

  render() {
    return (
      <View style={styles.container}>
        <Text>~~ Perfil ~~</Text>
        <Button title="Pay it" 
          onPress={()=>this.callForm()}
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