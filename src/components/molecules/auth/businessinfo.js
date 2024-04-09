import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FormInput from '../../atoms/commonforminput/forminput'
import Camera from '../../atoms/camera'
import { Form } from 'formik'
import { collection } from 'firebase/firestore'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import colors from '../../../constants/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Businessinfo = () => {
  return (
   <View style={styles.mainscreen}>
    <Text style={styles.headingtext}>Business info</Text>
    <FormInput
    placeholder={"License Number"}
    headingname={"Business License Number"}
    onChange=""
    onBlur=''
    />
    <Text style={styles.text}>Business Licanse Photo</Text>
    <Camera
     imageoutercontainer={styles.imageoutercontainer}
     forimage={styles.forimage}
     
     />
    <FormInput
     headingname={"Address"}
     placeholder="Address"
     onChange={""}
     onBlur={""}
     sideiconsecond={'location-outline'}
     oniconpressed={""}
        />
        <FormInput
        placeholder={"Tell me about your Business"}
        headingname={"Bio"}
        onChange={""}
        onBlur={""}
        multiline={true}
        />
   </View>
  )
}

const styles=StyleSheet.create({
    mainscreen:{
        margin:10
    },
    text:{
      marginVertical:5,
      color:colors.lighttextcolor,
      fontWeight:'bold'
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

export default Businessinfo
