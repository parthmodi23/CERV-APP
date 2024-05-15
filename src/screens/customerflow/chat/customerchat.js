import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import AppointMentCard from '../../doctorapp/AppointMentsCard'
import Metrics from '../../../assests/Metrics'
import { useNavigation } from '@react-navigation/native'
import colors from '../../../constants/colors'
import { SafeAreaView } from 'react-native-safe-area-context'

const CustomerChat = () => {
  const navigation = useNavigation()

  const chatData = [
    {
      firstname: 'Vijay Catering',
      Message: 'Hi, How are you?',
      time: '12:00 PM',
      image:'https://media.istockphoto.com/id/665259392/photo/its-taco-tuesday.jpg?s=612x612&w=0&k=20&c=WyV87UPzd-dGnuVEAMO6ZwHGmnx7eIpYxkNsZC5uNLo='
    },
    {
      firstname: 'Shah Catering',
      Message: 'hey do you have Spicy Noodels.',
      time: 'Yesterday',
      image:'https://media.istockphoto.com/id/650655146/photo/catering-food-wedding-event-table.jpg?s=612x612&w=0&k=20&c=ATGYgW8bM_559jJ5aUNO4HlJqpkOWUmNNMMflx5kajo='
    },
    {
      firstname: 'Ajay Catering',
      Message: 'Hey Ajay.',
      time: '2w',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMtdrWLNhk60mCFav01kBRsvzKWHv08MBgoUpaaYTeVckrPfK4yEutmJXLjU6ZVWHjk_E&usqp=CAU'
    },
    {
      firstname: 'Maharaja Catering',
      Message: 'Thank You Maharaja Catering.',
      time: '3m',
      image:'https://media.istockphoto.com/id/883203364/photo/misted-decanter-of-vodka-and-traditional-ukrainian-snack.jpg?s=612x612&w=0&k=20&c=g3RAgE2KPVeXIKqhS6mkdlq9NhChtYHJYbERsrjDPx0='
    },
  ]

  const myData = chatData.map(chat => ({
    title: chat.firstname,
    subText: chat.Message,
    time: chat.time,
    image:chat.image
  }))

  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:colors.white }}>
       
        <View style={styles.mainScreen}>
          <FlatList
            data={myData}
            renderItem={({ item }) => {
              return <AppointMentCard
              imageUri={item.image}
                title={item.title}
                subText={item.subText}
                messageTimeText={item.time}
                enableformessage={true}
              />
            }}
          />
        </View>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  Screen: {
    flex: 1,
    backgroundColor:colors.white
  },
  mainScreen: {
    flex: 1,
    paddingHorizontal: Metrics.CountScale(20),
    backgroundColor: colors.white
  }
})
export default CustomerChat
