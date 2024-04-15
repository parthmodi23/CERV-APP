import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FormInput from '../../atoms/commonforminput/forminput'
import Camera from '../../atoms/camera'
import colors from '../../../constants/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Driverinfo = (props) => {
  return (
   <View>
      <View style={styles.mainscreen}>
    <Text style={styles.headingtext}>Driver info</Text>
    <FormInput
    placeholder={"Name"}
    headingname={"Driver Name"}
    onChange=""
    onBlur=''
    />
    <FormInput
    placeholder={"License Number"}
    headingname={"Driver License Number"}
    onChange=""
    onBlur=''
    />
    <Text style={styles.text}>Driver License Photo</Text>
    <Camera
     imageoutercontainer={styles.imageoutercontainer}
     forimage={styles.forimage}
     />  
     </View>

   </View>
  )
}
const styles=StyleSheet.create({
    mainscreen:{
        margin:10
    },
    text:{
        color:colors.lighttextcolor,
        marginVertical:7,
        fontWeight:'bold',
        fontSize:15
    },
    headingtext:{
      fontSize:20
    },
    imageoutercontainer:{
      width:wp('90%'),
      height:hp('25%'),
      borderRadius:0
    },
    forimage:{
      width:wp('100%'),
      height:hp('100%'),
      resizeMode:'contain',
      aspectRatio:1.5/3
    }
  })
export default Driverinfo
