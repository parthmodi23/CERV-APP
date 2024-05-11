import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Businessinfo from '../../molecules/auth/businessinfo'
import Driverinfo from '../../molecules/auth/driverinfo'
import Ordertypeanddetails from '../../molecules/auth/ordertypeanddetails'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CustomButton from '../../atoms/buttoncomponent/button'
import Foodcategory from '../../molecules/auth/foodcategory'
import { Formik } from 'formik'
import { useNavigation } from '@react-navigation/native'

const Catererdetailspage = () => {

  const navigation=useNavigation()
  const handlepress=()=>{
      navigation.navigate('catererhome')
  }
  return ( 
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
    <Businessinfo />
    <Ordertypeanddetails />
    <Foodcategory />
    <Driverinfo />
    <CustomButton style={styles.saveButton} title={'Save'} onPress={handlepress} />
  </KeyboardAwareScrollView>
  )
}

const styles=StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  saveButton: {
    marginTop: 10,
  },
})

export default Catererdetailspage
