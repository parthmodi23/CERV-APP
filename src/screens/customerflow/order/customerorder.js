import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import OrderCard from '../../../components/molecules/customer/ordercard'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import colors from '../../../constants/colors'
import { useNavigation } from '@react-navigation/native'
import PastOrder from '../../../components/organisms/Customer/pastorder'
import CurrentOrder from '../../../components/organisms/Customer/currentorder'
import { OrderStack } from '../../../navigation/navigation'
import Metrics from '../../../assests/Metrics'
const CustomerOrder = () => {

  const [isTouch,setIsTouch]= useState('CurrentOrder')

  const navigation=useNavigation()
  return (
    <View style={styles.mainScreen}>
      {/* <OrderStack /> */}
      <View style={styles.orderContainer}>
        <OrderCard
          Title={"Current Order"}
          onPress={()=>{
            setIsTouch('CurrentOrder')
            
        }}
          bgcolor={isTouch=='CurrentOrder'?colors.CERVmaincolor:colors.white}
        />
        <OrderCard
          Title={"Past Order"}
          onPress={()=>{
            setIsTouch('PastOrder')
          }}
          bgcolor={isTouch=='PastOrder'?colors.CERVmaincolor:colors.white}
        />
      </View>
      <View style={styles.orderHistory}>
    {isTouch==='PastOrder'?<PastOrder/>:<CurrentOrder/>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: colors.white,
    // marginTop:hp(0.5),
    // paddingHorizontal:Metrics.CountScale(15)
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

export default CustomerOrder
