import React, { useEffect } from 'react'
import { Alert, Text, View } from 'react-native'
import ProfileTab from '../../molecules/customer/profiletab'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import * as authAction from '../../../redux/actions/auth'
const ProfilePage = (props) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const handleLogOut = async () => {
    Alert.alert("Alert!", "Are you Sure You want to Logout", [
      {
        text: "Yes",
        onPress: () => {
          dispatch(authAction.logout()).then(() => {
            navigation.navigate('login')
          })
        },
        style: {
        },
      },
      {
        text: 'No'
      }
    ])
  }
  useEffect(() => {

  })
  return (
    <View style={{ flex: 1 }}>
      <ProfileTab title={"account-outline"} text={"Personal information"} arrowRight={true} onPress={() => navigation.navigate('personalinfo')} />
      <ProfileTab title={"wallet-outline"} text={"Payment Method"} arrowRight={true} onPress={() => navigation.navigate('savecard')} />
      <ProfileTab title={"cards-heart-outline"} text={"My Favorites"} arrowRight={true} />
      <ProfileTab title={"google-maps"} text={"Saved Address"} arrowRight={true}  onPress={()=> navigation.navigate('saveaddress')}/>
      <ProfileTab title={"lock-outline"} text={"Change Password"} arrowRight={true} onPress={() => navigation.navigate('changepassword')} />
      <ProfileTab title={"logout"} text={"Log Out"} arrowRight={false} onPress={handleLogOut} />
    </View>
  )
}

export default ProfilePage
