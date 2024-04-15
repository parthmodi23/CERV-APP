import React from 'react'
import { Text, View } from 'react-native'
import ProfileTab from '../../molecules/customer/profiletab'
import { useNavigation } from '@react-navigation/native'

const ProfilePage = (props) => {
  const navigation=useNavigation()
  return (
    <View style={{flex:1}}>
      <ProfileTab title={"account-outline"} text={"Personal information"} />
      <ProfileTab title={"wallet-outline"} text={"Payment Method"} />
      <ProfileTab title={"cards-heart-outline"} text={"My Favorites"} />
      <ProfileTab title={"google-maps"} text={"Saved Address"} />
      <ProfileTab title={"lock-outline"} text={"Change Password"} onPress={()=>navigation.navigate('changepassword')} />
      <ProfileTab title={"logout"} text={"Log Out"} />
    </View>
  )
}

export default ProfilePage
