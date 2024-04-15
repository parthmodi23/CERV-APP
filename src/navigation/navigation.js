import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import login from '../screens/auth/login';
import SelectRoleScreen from '../screens/role/selectrolescreen';
import RegisterUserScreen from '../screens/auth/registeruser';
import Phonenumberpage from '../screens/auth/phonenumberpage';
import Otpscreen from '../screens/auth/otpscreen';
import CatererHomeScreen from '../screens/catererflow/homescreen';
import CustomerHomeScreen from '../screens/customerflow/home/homescreen';
import Catererstoredetails from '../screens/auth/catererstoredetails';
import Forgotpasswordscreen from '../screens/auth/forgotpasswordscreen';
import Ordertypeanddetails from '../components/molecules/auth/ordertypeanddetails';
import CatererProfile from '../screens/catererflow/catererprofile';
import CatererChat from '../screens/catererflow/catererchat';
import CatererOrders from '../screens/catererflow/catererorders';
import CustomerProfile from '../screens/customerflow/profile/customerprofile';
import CustomerChat from '../screens/customerflow/chat/customerchat';
import CustomerOrder from '../screens/customerflow/order/customerorder';
import CustomerSearch from '../screens/customerflow/search/customersearch';
import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons,Feather } from '@expo/vector-icons';
import colors from '../constants/colors';
import ChangePassword from '../screens/customerflow/profile/changepassword';


const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator()

const defaultStackNavigation = {

  headerStyle: {
    backgroundColor: 'darkgreen',
  },
  headerTitleStyle: {
    fontFamily: ""
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : 'blue',

};


const CustomerProfileStack=()=>{
  return(
  <Stack.Navigator>
    <Stack.Screen name="profilescreen" component={CustomerProfile} options={{headerShown:false}}/>
    <Stack.Screen name="changepassword" component={ChangePassword} options={{headerShown:false}}/>
  </Stack.Navigator>
  )
}

//customer stack
const Customerhome = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 70,
        },
        tabBarActiveTintColor: colors.CERVmaincolor

      }}
    >
      <BottomTab.Screen name='customerhomescreen'
        component={CustomerHomeScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: !focused ? 'gray' : 'black', fontWeight: 'bold' }}>Home</Text>
          ),
          tabBarIcon: ({ focused, color }) => <MaterialCommunityIcons name="home-outline" size={26}

            // color={focused?colors.CERVmaincolor:"gray"}
            color={color}
          />,
        }}

      />

      <BottomTab.Screen
        name='customersearch'
        component={CustomerSearch}
        options={{
          headerTitle: "Search",
          headerTitleAlign: "left",
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: !focused ? 'gray' : 'black', fontWeight: 'bold' }}>Search</Text>
          ),
          tabBarIcon: ({ focused, color }) => <MaterialIcons
            name="search" size={26}
            // color={focused?colors.CERVmaincolor:"gray"}
            color={color}

          />,
          // tabBarVisibilityAnimationConfig: "fade",
          // tabBarBadge: 5,


        }}
      />

      <BottomTab.Screen
        name='customerorder'
        component={CustomerOrder}
        options={{
          headerTitle: "Order",
          headerTitleAlign: "center",
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: !focused ? 'gray' : 'black', fontWeight: 'bold' }}>Order</Text>
          ),
          tabBarIcon: ({ focused, color }) => <Feather
            name="shopping-bag" size={22}
            // color={focused?colors.CERVmaincolor:"gray"}
            color={color}
          />
        }}

      />
      <BottomTab.Screen
        name='customerchat'
        component={CustomerChat}
        options={{
          headerTitle: "Chat",
          headerTitleAlign: "center",
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: !focused ? 'gray' : 'black', fontWeight: 'bold' }}>Chat</Text>
          ),
          tabBarIcon: ({ focused, color }) => <MaterialCommunityIcons
            name="message-reply-text-outline" size={24}
            // color={focused?colors.CERVmaincolor:"gray"}
            color={color}
          />,
        }} />


      <BottomTab.Screen
        name='customerprofile'
        component={CustomerProfileStack}
        options={{
          headerTitle: "Profile",
          headerTitleAlign: "center",
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: !focused ? 'gray' : 'black', fontWeight: 'bold' }}>Profile</Text>
          ),
          tabBarIcon: ({ focused, color }) => <MaterialCommunityIcons
            name="account-outline" size={27}
            // color={focused?colors.CERVmaincolor:"gray"}
            color={color}
          />,
        }} />
    </BottomTab.Navigator>
  )
}

//caterer stack
const Catererhome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='catererhomescreen' component={CatererHomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name='catererprofile' component={CatererProfile} options={{ headerShown: true }} />
      <Stack.Screen name='catererchat' component={CatererChat} options={{ headerShown: true }} />
      <Stack.Screen name='catererorders' component={CatererOrders} options={{ headerShown: true }} />
    </Stack.Navigator>
  )
}

//auth stack
const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='select role'>
      <Stack.Screen name='orderdetails' component={Ordertypeanddetails} options={{ headerShown: false }} />
      <Stack.Screen name='select role' component={SelectRoleScreen} options={{ headerShown: false }} />
      <Stack.Screen name="login" component={login} options={{ headerShown: false }} />
      <Stack.Screen name='forgotpassword' component={Forgotpasswordscreen} options={{ headerShown: false }} />
      <Stack.Screen name="register" component={RegisterUserScreen} options={{ headerShown: false }} />
      <Stack.Screen name='phonenumber' component={Phonenumberpage} options={{ headerShown: false }} />
      <Stack.Screen name='otpscreen' component={Otpscreen} options={{ headerShown: false }} />

      {/* //customer stack screens */}
      <Stack.Screen name='customerhome' component={Customerhome} options={{ headerShown: false }} />

      {/* //caterer portion */}
      <Stack.Screen name='catererhome' component={Catererhome} options={{ headerShown: false }} />
      <Stack.Screen name='catererdetails' component={Catererstoredetails} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default MainNavigator
