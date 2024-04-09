import React from 'react'
import {View,Text,StyleSheet, Dimensions} from "react-native"

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
    }
})
export default UpperComponent
