import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Businessinfo from '../molecules/auth/businessinfo'
import Driverinfo from '../molecules/auth/driverinfo'
import Ordertypeanddetails from '../molecules/auth/ordertypeanddetails'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CustomButton from '../atoms/buttoncomponent/button'
import Foodcategory from '../molecules/auth/foodcategory'

const Catererdetailspage = () => {
  const handlepress=()=>{

  }
  return (
    <View style={{marginHorizontal:10}}>  
      <ScrollView>
        <KeyboardAwareScrollView>
        <Businessinfo/>
        <Ordertypeanddetails/>
        <Foodcategory/>
        <Driverinfo/>
        <CustomButton style={styles.savebutton} title={'save'} onPress={handlepress}/> 
        </KeyboardAwareScrollView>
        </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({

})

export default Catererdetailspage
