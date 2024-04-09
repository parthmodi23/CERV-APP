import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import login from '../screens/auth/login';
import SelectRoleScreen from '../screens/role/selectrolescreen';
import RegisterUserScreen from '../screens/auth/registeruser';
import Phonenumberpage from '../screens/auth/phonenumberpage';
import Otpscreen from '../screens/auth/otpscreen';
import CatererHomeScreen from '../screens/catererflow/homescreen';
import CustomerHomeScreen from '../screens/customerflow/homescreen';
import Catererstoredetails from '../screens/auth/catererstoredetails';
import Forgotpasswordscreen from '../screens/auth/forgotpasswordscreen';
import Ordertypeanddetails from '../components/molecules/auth/ordertypeanddetails';


const Stack = createStackNavigator()

//customerstack
const Customerhome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='customerhomescreen' component={CustomerHomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

//caterer stack
const Catererhome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='catererhomescreen' component={CatererHomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

//auth stack
const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='catererdetails'>
      <Stack.Screen name='orderdetails' component={Ordertypeanddetails} options={{headerShown:false}}/>
      <Stack.Screen name='select role' component={SelectRoleScreen} options={{ headerShown: false }} />
      <Stack.Screen name="login" component={login} options={{ headerShown: false }} />
      <Stack.Screen name='forgotpassword' component={Forgotpasswordscreen} options={{ headerShown: false }} />
      <Stack.Screen name="register" component={RegisterUserScreen} options={{ headerShown: false }} />
      <Stack.Screen name='phonenumber' component={Phonenumberpage} options={{ headerShown: false }} />
      <Stack.Screen name='catererhome' component={Catererhome} options={{ headerShown: false }}/>
      <Stack.Screen name='otpscreen' component={Otpscreen} options={{ headerShown: false }} />
    
      {/* //caterer portion */} 
      <Stack.Screen name='catererdetails' component={Catererstoredetails} options={{ headerShown: true }}/>
      <Stack.Screen name='customerhome' component={Customerhome} />
    </Stack.Navigator>
  )
}

export default MainNavigator
