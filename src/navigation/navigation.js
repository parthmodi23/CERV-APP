import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import login from '../screens/auth/login';
import SelectRoleScreen from '../screens/role/selectrolescreen';
import LowerComponent from '../components/atome/commonscreen/lowercomponent';
import RegisterUserScreen from '../screens/auth/registeruser';


const Stack=createStackNavigator()
  
    const MainNavigator = () => {
        return (
        <Stack.Navigator>
          <Stack.Screen name="Register" component={RegisterUserScreen} options={{headerShown:false}}/>
          <Stack.Screen name='login' component={login} options={{headerShown:false}} /> 
          <Stack.Screen name='check' component={LowerComponent} />
          <Stack.Screen name='Select Role' component={SelectRoleScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
        )
    }

export default MainNavigator
