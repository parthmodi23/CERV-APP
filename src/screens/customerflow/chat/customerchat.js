import React from 'react'
import { StyleSheet, View } from 'react-native'
import AppointMentCard from '../../doctorapp/AppointMentsCard'

const CustomerChat = () => {
  return (
    <View style={styles.mainScreen}>
      <AppointMentCard
        doctorName={"Johnathan Morgon"}
        time={'Hello Good Morning Mark'}
      />

    </View>
  )
}

const styles=StyleSheet.create({
  mainScreen:{
    flex:1,
  }
})
export default CustomerChat
