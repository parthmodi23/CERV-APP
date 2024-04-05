import React, { useState } from 'react'
import UpperComponent from '../atome/commonscreen/uppercontainer'
import LowerComponent from '../atome/commonscreen/lowercomponent'
import { StyleSheet, View,Text, Alert, Dimensions, Image } from 'react-native'
import colors from '../../constants/colors'
import OTPTextView from 'react-native-otp-textinput';
import CustomButton from '../atome/buttoncomponent/button'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'

const {width,height}=Dimensions.get('window')
const Otpvalidatedscreen = () => {
    const [otpinput,setOtpInput]=useState('')
    const route=useRoute()
    const navigation=useNavigation()
    const phonennumber=route.params?.userphonenumber;
    console.log(phonennumber)
   const handelOtp=()=>{
        if(otpinput.length!==4){
            Alert.alert("Alert","Please enter valid Otp")

        }else{
        Alert.alert("Your Otp is",otpinput)}
        navigation.navigate('login')
    }

  return (
   <View style={styles.mainscreen}>
     <UpperComponent>
            <View style={styles.uppercontainer}>
                <View style={styles.uppertextcomponent}>

                <Text style={styles.phonenumbertext}>Verification Code</Text>
          <Text style={styles.subtext}>{`we have sent an SMS to\n${phonennumber.slice(3,5)}******${phonennumber.slice(-2)}. please enter the\ncode you receive below.`}</Text>

                </View>
                <View style={styles.iconcontainer}>
        <Image style={styles.imagepng} source={require('../../assests/images/signuppagepng.png')}/>
                </View>
            </View>


        </UpperComponent>
    <LowerComponent>
    <View>
    <OTPTextView
          handleTextChange={(text)=>setOtpInput(text)}
          containerStyle={styles.textInputContainer}

        //   handleCellTextChange={handleCellTextChange}
          inputCount={4}
          keyboardType="numeric"
          textInputStyle={styles.otpInputStyle} // Style for the text inside the boxes
        />
        <View style={styles.textcontainer}>
        <Text style={styles.text}>Didn't Get the Code? </Text>
        <TouchableOpacity style={styles.resendoptbutton}>
        <Text style={styles.resendcode}>Resend Code</Text>
        </TouchableOpacity>
    
        </View>
        <CustomButton style={styles.button} title={'Verify Code'} onPress={handelOtp}/>
     </View>
    </LowerComponent>
   </View>
  )
}

const styles=StyleSheet.create({    
    mainscreen:{
     backgroundColor:colors.CERVmaincolor,
    },
    otpInputStyle: {
        width: 50, 
        height: 50, 
        fontSize: 24, 
        borderWidth: 1, 
        borderColor: 'black', 
        borderRadius: 10, 
        textAlign: 'center', 
        borderRightColor:colors.CERVmaincolor,
    },
    text:{
        color:colors.lighttextcolor,
        fontWeight: "bold",
    },
    resendcode:{
        color:colors.CERVmaincolor
    },
    textInputContainer:{
        marginTop:50,
        marginBottom:30
    },
    button:{
        marginTop:20
    },
    textcontainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    resendoptbutton:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    phonenumbercontainer:{
        margin:10
    },
    phonetext:{
        marginVertical:20
    },
    
    uppertextcomponent:{
        justifyContent:'center'
    },
    uppercontainer:{
        flexDirection:'row',
        margin:15,
    },
    imagepng:{
        width:'100%',
        height:'100%',
        resizeMode:'contain'
    },
    iconcontainer:{
        height:height*0.3,
        width:width*0.5,
    },
    phonenumbertext:{
        color:colors.white,
        fontWeight:'bold',
        fontSize:width*0.065,
    },
    subtext:{
        color:colors.white,
        marginTop:10,
        fontSize:width*0.04
        
    },
  

})

export default Otpvalidatedscreen
