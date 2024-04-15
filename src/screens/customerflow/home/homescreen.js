import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {MaterialCommunityIcons,SimpleLineIcons} from '@expo/vector-icons'
import colors from '../../../constants/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  return (
    <View>
        <Text>Home Screen</Text>
      {console.log("new token",AsyncStorage.getItem('userToken'))}
    </View>
  )
}

export default CustomerHomeScreen
