import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {MaterialCommunityIcons,SimpleLineIcons} from '@expo/vector-icons'
import colors from '../../../constants/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CardData from '../../../Model/carddata';
import CatererData from '../../../components/organisum/Customer/catererdata';
const CustomerHomeScreen = (props) => {

  const navigation=useNavigation()
  useEffect(()=>{
    navigation.setOptions({
      headerTitle:()=> <Image  style={{height:hp(5),width:wp(10),tintColor:colors.CERVmaincolor}} source={require('../../../assests/images/Customerhome.png')}/>,
        headerTitleAlign:"center",
      headerRight:()=><MaterialCommunityIcons
      name='bell-outline'
      size={25}
      style={{marginRight:wp(5)}}
      />,
      headerLeft:()=><SimpleLineIcons
      name='question'
      size={23}
      style={{marginLeft:wp(5)}}
      />
    })
  })

  const checkTokenStored = async () => {
    try {
      // Retrieve the token from AsyncStorage
      const token = await AsyncStorage.getItem('userToken');
      
      // Check if token exists
      if (token) {
        console.log('Token is stored:', token);
        // Do something if the token exists
      } else {
        console.log('Token is not stored');
        // Do something if the token does not exist
      }
    } catch (error) {
      console.error('Error checking token:', error);
      // Handle error if any
    }
  };
  checkTokenStored();
  // Call the function to check if the token is stored
  return (
    <View style={{flex:1}}>
        <Text>Home Screen</Text>
      <CatererData/>
    </View>
  )
}

export default CustomerHomeScreen
