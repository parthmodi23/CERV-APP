import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import OrderCard from '../../../components/molecules/customer/ordercard'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import colors from '../../../constants/colors'
import { useNavigation } from '@react-navigation/native'
import Metrics from '../../../assests/Metrics'
import CatererPastOrder from '../../../components/organisms/Caterer/pastorder'
import CatererCurrentOrder from '../../../components/organisms/Caterer/currentorder'
const CatererOrder = () => {

  const [isTouch,setIsTouch]= useState('CurrentOrder')

  const navigation=useNavigation()

  useEffect(()=>{
    navigation.setOptions({
      title:'Order',
      headerTitleAlign: "center",

    })
  })
  
  return (
    <View style={styles.mainScreen}>
      {/* <OrderStack /> */}
      <View style={styles.orderContainer}>
        <OrderCard
          Title={"Current Order"}
          onPress={()=>{
            setIsTouch('CurrentOrder')
        }}
        textColor={isTouch=='CurrentOrder'?colors.white:colors.lighttextcolor}
          bgcolor={isTouch=='CurrentOrder'?colors.CERVmaincolor:colors.white}
        />
        <OrderCard
          Title={"Past Order"}
           onPress={()=>{
            setIsTouch('PastOrder')
          }}
          textColor={isTouch=='PastOrder'?colors.white:colors.lighttextcolor}

          bgcolor={isTouch=='PastOrder'?colors.CERVmaincolor:colors.white}
        />
      </View>
      <View style={styles.orderHistory}>
    {isTouch==='PastOrder'?<CatererPastOrder/>:<CatererCurrentOrder/>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: colors.white,
    // marginTop:hp(0.5),
    paddingHorizontal:Metrics.CountScale(15)
  },
  orderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: wp(4),
  },
  orderHistory:{
    flex:1,
    marginTop:hp(1)
  }
})

export default CatererOrder
