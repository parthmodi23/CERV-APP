import React, { useEffect } from 'react'
import { Image, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {MaterialCommunityIcons,SimpleLineIcons,MaterialIcons} from '@expo/vector-icons'
import colors from '../../../constants/colors';
const CustomerSearch = () => {


    const navigation=useNavigation()
  useEffect(()=>{
    navigation.setOptions({
      
      
      headerLeft:()=><MaterialIcons
      name="search" size={26} 
    //   color={focused?colors.CERVmaincolor:"gray"}
      style={{marginLeft:wp(5)}}

      />,
    })
  })
  return (
   <View>

   </View>
  )
}

export default CustomerSearch
