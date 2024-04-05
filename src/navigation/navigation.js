import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import login from '../screens/auth/login';
import SelectRoleScreen from '../screens/role/selectrolescreen';
import LowerComponent from '../components/atome/commonscreen/lowercomponent';
import RegisterUserScreen from '../screens/auth/registeruser';
import Phonenumberpage from '../screens/auth/phonenumberpage';
import Otpscreen from '../screens/auth/otpscreen';
import HomeScreen from '../screens/customerflow/homescreen';
import CatererHomeScreen from '../screens/catererflow/homescreen';
import CustomerHomeScreen from '../screens/customerflow/homescreen';


const Stack = createStackNavigator()

const MainNavigator = () => {
  return (
<Stack.Navigator initialRouteName='select role'>
<Stack.Screen name='select role' component={SelectRoleScreen} options={{ headerShown: false }} />
<Stack.Screen name='customerhomescreen' component={CustomerHomeScreen} />
<Stack.Screen name='catererhomescreen'  component={CatererHomeScreen}/>
<Stack.Screen name="login" component={login} options={{ headerShown: false }} />
<Stack.Screen name="register" component={RegisterUserScreen} options={{ headerShown: false }} />
<Stack.Screen name='phonenumber' component={Phonenumberpage} options={{ headerShown: false }} />
<Stack.Screen name='Otpscreen' component={Otpscreen} options={{ headerShown: false }} />
</Stack.Navigator>
  )
}

export default MainNavigator
