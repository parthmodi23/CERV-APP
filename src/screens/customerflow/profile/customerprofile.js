import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import ProfilePage from '../../../components/organisum/Customer/profilepage'
import Loginform from '../../../components/organisum/loginform'
import ProfileTab from '../../../components/molecules/customer/profiletab'
import Camera from '../../../components/atoms/camera'
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen'
import colors from '../../../constants/colors'
import { useSelector } from 'react-redux'

const {width,height}=Dimensions.get('window')
const CustomerProfile = () => {
  const authredux=useSelector(state=>state.auth)
  return (
    <View style={styles.mainscreen}>
      <View style={styles.cameracontainer}>
      <Camera imageoutercontainer={styles.cameraimagecontainer} 
      button={styles.button} 
      showButton={false}
      myimageurl={authredux.profilefilepath}
      />
      </View>
      <ProfilePage/>
    </View>
  )
}

const styles=StyleSheet.create({
  mainscreen:{
    flex:1,
    backgroundColor:colors.white
  },
  cameracontainer:{
    justifyContent:'center',
    alignItems:'center',
    marginVertical:hp('4%')
    // marginVertical:height*0.02
  },
  cameraimagecontainer:{
    width:wp("40%"),
    height:hp("19%"),
    borderRadius:hp("50%"),
    // width:width*0.45,
    // height:height*0.22,
    // borderRadius:width*.4
  },
  button:{
    bottom:10
  }
})

export default CustomerProfile
