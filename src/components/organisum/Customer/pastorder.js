import React from 'react'
import { StyleSheet,View,Text } from 'react-native'

const PastOrder = () => {
  return (
    <View style={styles.mainScreen}>
    <Text>Past Order</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    mainScreen:{
flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor:'lightgreen'
    }
})
export default PastOrder
