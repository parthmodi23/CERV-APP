import React, { useEffect } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {MaterialCommunityIcons,SimpleLineIcons,MaterialIcons} from '@expo/vector-icons'
import colors from '../../../constants/colors';
import RecepiList from '../../../components/organisum/Customer/recepilist';
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
   <View style={styles.recepis}>
<RecepiList/>
   </View>
  )
}

const styles=StyleSheet.create({
  recepis:{
    flex:1,
    margin:10
  }
})

export default CustomerSearch
