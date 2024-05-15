import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import SelectRoleScreen from '../screens/role/selectrolescreen';
import RegisterUserScreen from '../screens/auth/registeruser';
import Phonenumberpage from '../screens/auth/phonenumberpage';
import Otpscreen from '../screens/auth/otpscreen';
// import Catererstoredetails from '../screens/auth/catererstoredetails';
import Forgotpasswordscreen from '../screens/auth/forgotpasswordscreen';
import CustomerProfile from '../screens/customerflow/profile/customerprofile';
import CustomerChat from '../screens/customerflow/chat/customerchat';
import CustomerOrder from '../screens/customerflow/order/customerorder';
import CustomerSearch from '../screens/customerflow/search/customersearch';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons, Feather, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import colors from '../constants/colors';
import ChangePassword from '../screens/customerflow/profile/changepassword';
import Loginform from '../components/organisms/auth/loginform';
import PaymentMethod from '../screens/customerflow/profile/paymentmethod';
import PersonalInformation from '../components/organisms/Customer/personalinformation';
import SaveAddress from '../components/organisms/Customer/saveaddres';
// import OrderCard from '../components/molecules/customer/ordercard';
import FavoritePage from '../screens/customerflow/profile/favoritepage';
// import { FA5Style } from '@expo/vector-icons/build/FontAwesome5';
// import CarouselView from '../components/molecules/customer/carousel';
// import NotificationCard from '../components/molecules/customer/notificationcard';
// import notification from '../components/organisms/Customer/notification';
import NotificationPage from '../components/organisms/Customer/notification';
// import FilterBottomSheet from '../components/organisms/Customer/filterbottomsheet';
// import CustomeRadioButton from '../components/atoms/buttoncomponent/radiobutton';
import DoctorLogin from '../screens/doctorapp/Login';
import Register from '../screens/doctorapp/Register';
// import Forgotpassword from '../components/organisms/auth/forgotpassword';
// import forgotpassword from '../screens/doctorapp/forgotpassword';
import DForgotPassword from '../screens/doctorapp/forgotpassword';
// import PatientRegister from '../screens/doctorapp/PatientRegister';
import CurrentOrder from '../components/organisms/Customer/currentorder';
import PastOrder from '../components/organisms/Customer/pastorder';
import DoctorHomeScreen from '../screens/doctorapp/DoctorHomeScreen';
import DoctorChat from '../screens/doctorapp/DoctorChat';
// import AppointMentCard from '../screens/doctorapp/AppointMentsCard';
// import DoctorCalender from '../screens/doctorapp/DoctorCalender';
// import PatientSelection from '../screens/doctorapp/PatientSelection';
import PastClinet from '../screens/doctorapp/PastClinet';
import AcceptedRequest from '../screens/doctorapp/AcceptedRequest';
import PendingRequest from '../screens/doctorapp/PendingRequest';
import BookingDetails from '../screens/doctorapp/BookingDetails';
import Metrics from '../assests/Metrics';
// import TopTabNavigator from '../screens/doctorapp/CustomeTopTabBar';
import CustomTabBar from '../screens/doctorapp/CustomeTopTabBar';
// import CustomeHeader from '../screens/doctorapp/CustomeHeader';
import CatererHomeScreen from '../screens/catererflow/menu/homescreen';
// import DoctorChangePassword from '../screens/doctorapp/DoctorChangePassword';
// import AddBankAccount from '../screens/doctorapp/AddBankAccount';
import CatererPastOrder from '../components/organisms/Caterer/pastorder';
import CatererCurrentOrder from '../components/organisms/Caterer/currentorder';
import CatererOrder from '../screens/catererflow/orders/catererorders';
import CustomerHomeScreen from '../screens/customerflow/home/homescreen';
import CatererChat from '../screens/catererflow/chat/catererchat';
import CatererProfile from '../screens/catererflow/profile/catererprofile';
// import SubCategoryCard from '../components/molecules/caterer/subcategorycard';
// import subcategory from '../components/organisms/Caterer/subcategory';
import SubCategory from '../components/organisms/Caterer/subcategory';
import EditCategory from '../components/organisms/Caterer/editcategory';
// import CatererProfilePage from '../components/organisms/Caterer/catererprofilepage';
import { wp } from '../helper/function';
// import ProductDetailsPage from '../components/organisms/Caterer/productdetailspage';
// import OrderDetailsPage from '../components/organisms/Customer/orderdetailspage';
// import ShowBankPhoto from '../screens/doctorapp/ShowBankPhoto';
// import PatientCard from '../screens/patient/PatientCard';
// import Invoice from '../screens/catererflow/orders/invoice';
// import MyAppoitment from '../screens/patient/MyAppoitment';
// import PatientChatCard from '../screens/patient/PatientChatCard';
// import ServiceCard from '../screens/patient/Home/ServiceCard';
import PatientHomeScreen from '../screens/patient/Home/PatientHomeScreen';
// import DoctorHomeCard from '../screens/patient/Home/DoctorHomeCard';
// import PastOrderDetails from '../screens/catererflow/orders/pastorderdetails';
import CatererRecipeDetails from '../components/organisms/Customer/catererdetails';
import DoctorProfile from '../screens/patient/Home/DoctorProfile';
import ReviewCard from '../screens/patient/Home/ReviewCard';
import DoctorList from '../screens/patient/Home/DoctorList';
import BookSlot from '../screens/patient/Home/BookSlot';
import OrderReceipt from '../components/organisms/Customer/orderrecipt';
import CurrentOrderDetails from '../components/organisms/Customer/currentorderdetails';
import OnboardingScreen from '../components/organisms/auth/onbording';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator()
const Tab = createMaterialTopTabNavigator();


const CustomerStack = () => {
  return (
    <Stack.Navigator initialRouteName='home'>
      <Stack.Screen name='home' component={CustomerBottomTab} options={{ headerShown: false }} />
      <Stack.Screen name='singlecatererdetails' component={CatererRecipeDetails} />
      <Stack.Screen name='savecard' component={PaymentMethod} options={{ headerShown: true }} />
      <Stack.Screen name="personalinfo" component={PersonalInformation} options={{ headerShown: true }} />
      <Stack.Screen name="changepassword" component={ChangePassword} options={{ headerShown: true }} />
      <Stack.Screen name="saveaddress" component={SaveAddress} options={{ headerShown: true }} />
      <Stack.Screen name="favoritecaterer" component={FavoritePage} options={{ headerShown: true }} />
      <Stack.Screen name='orderreceipt' component={OrderReceipt} />
      <Stack.Screen name='notification' component={NotificationPage} />
      <Stack.Screen name='currentorderdetails' component={CurrentOrderDetails}/>
      <Stack.Screen name='order' component={CustomerOrder} />
    </Stack.Navigator>
  )
}



export const OrderStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 16, fontWeight: '500' },
        tabBarStyle: { backgroundColor: colors.white },
        tabBarIndicatorStyle: { backgroundColor: colors.CERVmaincolor },
      }}
    >
      <Tab.Screen name="pastorder" component={PastOrder} />
      <Tab.Screen name="currentorder" component={CurrentOrder} />
    </Tab.Navigator>
  );
}


export const CatererOrderStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 16, fontWeight: '500' },
        tabBarStyle: { backgroundColor: colors.white },
        tabBarIndicatorStyle: { backgroundColor: colors.CERVmaincolor },
      }}
    >
      <Tab.Screen name="pastorder" component={CatererPastOrder} />
      <Tab.Screen name="currentorder" component={CatererCurrentOrder} />
    </Tab.Navigator>
  );
}



//customer stack
const CustomerBottomTab = () => {
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
            <Text style={{ color: !focused ? 'gray' : 'black', fontWeight: 'bold', top: Metrics.CountScale(-10) }}>Home</Text>
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
            <Text style={{ color: !focused ? 'gray' : 'black', fontWeight: 'bold', top: Metrics.CountScale(-10) }}>Search</Text>
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
            <Text style={{ color: !focused ? 'gray' : 'black', fontWeight: 'bold', top: Metrics.CountScale(-10) }}>Order</Text>
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
            <Text style={{ color: !focused ? 'gray' : 'black', fontWeight: 'bold', top: Metrics.CountScale(-10) }}>Chat</Text>
          ),
          tabBarIcon: ({ focused, color }) => <MaterialCommunityIcons
            name="message-reply-text-outline" size={24}
            // color={focused?colors.CERVmaincolor:"gray"}
            color={color}
          />,
          tabBarBadge: 2,

        }} />

      <BottomTab.Screen
        name='profilescreen'
        component={CustomerProfile}
        options={{
          headerTitle: "Profile",
          headerTitleAlign: "center",
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: !focused ? 'gray' : 'black', fontWeight: 'bold', top: Metrics.CountScale(-10) }}>Profile</Text>
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
    <Stack.Navigator initialRouteName='catererBottomTab'>
      <Stack.Screen name='catererhomescreen' component={CatererBottomTab} options={{ headerShown: false }} />
      <Stack.Screen name='catererprofile' component={CatererProfile} options={{ headerShown: true }} />
      <Stack.Screen name='subcategory' component={SubCategory} />
      <Stack.Screen name='editcategory' component={EditCategory} />

    </Stack.Navigator>
  )
}


const CatererBottomTab = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 70,
        },
        tabBarActiveTintColor: colors.CERVmaincolor,

      }}
    >
      <BottomTab.Screen name='customerhomescreen'
        component={CatererHomeScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: !focused ? 'gray' : 'black', fontWeight: 'bold', top: Metrics.CountScale(-10) }}>Home</Text>
          ),
          tabBarIcon: ({ focused, color }) => <MaterialCommunityIcons name="home-outline" size={26} color={color} />,
        }}
      />


      <BottomTab.Screen
        name='customerorder'
        component={CatererOrder}
        options={{
          headerTitle: "Order",
          headerTitleAlign: "center",
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: !focused ? 'gray' : 'black', fontWeight: 'bold', top: Metrics.CountScale(-10) }}>Order</Text>
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
        component={CatererChat}
        options={{
          headerTitle: "Chat",
          headerTitleAlign: "center",
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: !focused ? 'gray' : 'black', fontWeight: 'bold', top: Metrics.CountScale(-10) }}>Chat</Text>
          ),
          tabBarIcon: ({ focused, color }) => <MaterialCommunityIcons
            name="message-reply-text-outline" size={24}
            // color={focused?colors.CERVmaincolor:"gray"}
            color={color}
          />,
          tabBarBadge: 2,

        }} />

      <BottomTab.Screen
        name='profilescreen'
        component={CatererProfile}
        options={{
          headerTitle: "Profile",
          headerTitleAlign: "center",
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: !focused ? 'gray' : 'black', fontWeight: 'bold', top: Metrics.CountScale(-10) }}>Profile</Text>
          ),
          headerLeft: () => <SimpleLineIcons
            name='question'
            size={23}
            style={{ marginLeft: wp(4) }}
          />,
          tabBarIcon: ({ focused, color }) => <MaterialCommunityIcons
            name="account-outline" size={27}
            // color={focused?colors.CERVmaincolor:"gray"}
            color={color}
          />,
        }} />
    </BottomTab.Navigator>
  )
}



const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='select role'>
      <Stack.Screen name='select role' component={SelectRoleScreen} options={{ headerShown: false }} />
      <Stack.Screen name="login" component={Loginform} options={{ headerShown: false }} />
      <Stack.Screen name='forgotpassword' component={Forgotpasswordscreen} options={{ headerShown: false }} />
      <Stack.Screen name="register" component={RegisterUserScreen} options={{ headerShown: false }} />
      <Stack.Screen name='phonenumber' component={Phonenumberpage} options={{ headerShown: false }} />
      <Stack.Screen name='otpscreen' component={Otpscreen} options={{ headerShown: false }} />
     
      {/* <Stack.Screen name='catererdetails' component={Catererhome} options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  )
}

//auth stack
const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='onbording'>
      <Stack.Screen name='authflow' component={AuthNavigator} options={{ headerShown: false }} />
      <Stack.Screen name='onbording' component={OnboardingScreen} options={{ headerShown: false }} />
      <Stack.Screen name='catererhome' component={Catererhome} options={{ headerShown: false }} />
      <Stack.Screen name='customerhome' component={CustomerStack} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

// const DoctorPatientSelectionStack = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarLabelStyle: { fontSize: 12, color: '#2196f3' },
//         tabBarItemStyle: {},
//         tabBarStyle: { backgroundColor: '#f8f8f8' },
//         tabBarIndicatorContainerStyle: { borderRadius: Metrics.CountScale(100), marginLeft: Metrics.CountScale(10) },
//         tabBarIndicatorStyle: { backgroundColor: '#ffff', height: Metrics.CountScale(40), borderRadius: Metrics.CountScale(20), bottom: Metrics.CountScale(6), width: Metrics.CountScale(100), elevation: 3 },
//         style: {
//           alignSelf: "center",
//           // width: '50%',
//           borderRadius: 100,
//           borderColor: "blue",
//           backgroundColor: "blue",
//           elevation: 5,
//           shadowOpacity: .10,
//           shadowRadius: 4,
//         },

//       }}
//     // tabBar={()=>{
//     //   return null
//     // }} 
//     >
//       <Tab.Screen name="PendingRequest" component={PendingRequest} />
//       <Tab.Screen name="AcceptedRequest" component={AcceptedRequest} />
//       <Tab.Screen name='PastClient' component={PastClinet} />
//     </Tab.Navigator>
//   );
// }

const MyTabs = () => {
  return (
    <Tab.Navigator style={{
      backgroundColor: colors.white
    }} tabBar={props => <CustomTabBar {...props} />} >
      <Tab.Screen name="Pending" component={PendingRequest} />
      <Tab.Screen name="Accepted" component={AcceptedRequest} />
      <Tab.Screen name='Past Client' component={PastClinet} />
    </Tab.Navigator>
  );
};

const DoctorStack = () => {
  return <Stack.Navigator
    screenOptions={{
      headerTitleAlign: "center"
    }}
  >
    <Stack.Screen name='home' component={DoctorBottomTabBar} options={{ headerShown: false }} />
    <Stack.Screen name='PatientSelection' component={MyTabs} options={{
      headerTitle: 'Profile',
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: colors.doctorMainColor,
        elevation: 0,
      },
      headerTitleStyle: {
        color: colors.white
      },

    }} />
    <Stack.Screen name='Bookingdetails' component={BookingDetails} />
  </Stack.Navigator>
}

const DoctorBottomTabBar = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: Metrics.CountScale(70),
          paddingHorizontal: Metrics.CountScale(20)
        },
        tabBarLabelStyle: { backgroundColor: 'green' },
        tabBarLabelStyle: { backgroundColor: 'red' }

      }}
      initialRouteName='homescreen'
    >
      <BottomTab.Screen name='chat' component={DoctorChat}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ top: Metrics.CountScale(-10), color: colors.lighttextcolor }}>Chat</Text>
          ),
          tabBarIcon: ({ focused, color }) => <MaterialCommunityIcons name="chat-outline" size={20} color={colors.lighttextcolor} />,
          tabBarLabelStyle: { backgroundColor: 'red' },
          headerShown: false
        }}

      />
      <BottomTab.Screen name='homescreen' component={DoctorHomeScreen} options={{
        tabBarLabel: ({ focused }) => (
          null
        ),
        tabBarIcon: ({ focused, color }) => <View style={{ backgroundColor: colors.doctorMainColor, height: Metrics.CountScale(70), width: Metrics.CountScale(70), borderRadius: Metrics.CountScale(35), justifyContent: 'center', alignItems: 'center' }}><MaterialCommunityIcons name="home-outline" size={40} color={colors.white} /></View>,
        tabBarIconStyle: { bottom: Metrics.CountScale(30) },
        headerShown: true,
        headerTitle: 'Home',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: colors.AppColor
        },
        headerRight: () => {
          <MaterialCommunityIcons />
        }
      }} />

      <BottomTab.Screen name='profile' component={DoctorProfile}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ top: Metrics.CountScale(-10), color: colors.lighttextcolor }}>Profile</Text>
          ),
          tabBarIcon: ({ focused, color }) => <FontAwesome5 name="user-alt" size={20} color={colors.lighttextcolor} />,
        }}
      />
      {/* <Stack.Screen name='PatientSelection' component={DoctorPatientSelection}/> */}

    </BottomTab.Navigator>
  )
}

const DoctorNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='PatientRegister'>
      <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
      <Stack.Screen name='ForgotPassword' component={DForgotPassword} options={{ headerShown: false }} />
      <Stack.Screen name='PatientRegister' component={DoctorHomeScreen} options={{ headerShown: true }} />
      {/* <Stack.Screen name='PatientSelection' component={DoctorPatientSelection}/> */}
    </Stack.Navigator>
  )
}

export default MainNavigator

