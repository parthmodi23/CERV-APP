import React from 'react'
import {View,Text,StyleSheet} from "react-native"


const UpperComponent = ({children,style}) => {
  return (
    <View style={[styles.uppercontainer,style]}>
        {children}
    </View>
  )
}


const styles=StyleSheet.create({
    uppercontainer:{
        height:'30%',
    }
})
export default UpperComponent
