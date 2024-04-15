import React from 'react'
import {View,Text,StyleSheet, Dimensions} from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const {width,height}=Dimensions.get('window')

const UpperComponent = ({children,style}) => {
  return (
    <View style={[styles.uppercontainer,style]}>
        {children}
    </View>
  )
}


const styles=StyleSheet.create({
    uppercontainer:{
        height:height*0.3,
        marginTop:hp(5),
    }
})
export default UpperComponent
