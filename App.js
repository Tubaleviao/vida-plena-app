import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen'
import AboutScreen from './screens/AboutScreen'
import PerfilScreen from './screens/PerfilScreen'
import ExplorarScreen from './screens/ExplorarScreen'
import SettingsScreen from './screens/SettingsScreen'
import HeaderButton from './components/HeaderButton'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const Inicio = createStackNavigator(
	{Login: AboutScreen, About: AboutScreen,},
	{initialRouteName: "Login",
	  	defaultNavigationOptions: {
	  		headerRight: HeaderButton,
	     	headerTintColor: '#aabbcc',
	    	headerStyle: {
	        	backgroundColor: '#000',
	    	}
		}
	}
);

const Explorar = createStackNavigator(
	{Explorar: ExplorarScreen, Settings: SettingsScreen,},
	{initialRouteName: "Explorar",}
);

const Perfil = createStackNavigator(
	{Perfil: PerfilScreen, Settings: SettingsScreen,},
	{initialRouteName: "Perfil",}
);

const tabBarIconFunc = (Comp, icon) => ({tabBarIcon: ({focused, tintColor}) => (
	<Comp name={icon+(focused ? '' : '-outline')} size={25} color={tintColor} />
),})

Perfil.navigationOptions = tabBarIconFunc(MaterialIcons, 'person') 

Inicio.navigationOptions = tabBarIconFunc(MaterialCommunityIcons, 'home') 

Explorar.navigationOptions = tabBarIconFunc(MaterialCommunityIcons, 'compass') 

const TabNavigator = createBottomTabNavigator(
  {Inicio: Inicio, Explorar: Explorar, Perfil: Perfil},
  {initialRouteName: "Inicio", tabBarOptions: {activeTintColor: '#a41034',},}
);

const AppNavigator = createSwitchNavigator({
  Login: LoginScreen,
  Main: TabNavigator,
})

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer persistenceKey={"ffdssdasddff"}/>;
  }
}
