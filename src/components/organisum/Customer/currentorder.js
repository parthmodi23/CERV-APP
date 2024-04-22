import React from 'react'
import { StyleSheet,View,Text } from 'react-native'

const CurrentOrder = () => {
  return (
    <View style={styles.mainScreen}>
    <Text>Current Order</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    mainScreen:{
flex:1,
backgroundColor:'lightyellow',
justifyContent:'center',
alignItems:'center',
    }
})
export default CurrentOrder
