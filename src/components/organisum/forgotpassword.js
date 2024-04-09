import React from 'react'
import UpperComponent from '../atoms/commonscreen/uppercontainer'
import LowerComponent from '../atoms/commonscreen/lowercomponent'
import CustomButton from '../atoms/buttoncomponent/button'
import FormInput from '../atoms/commonforminput/forminput'
import colors from '../../constants/colors'
import { Dimensions, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native'

const {width,height}=Dimensions.get('window')

const Forgotpassword = () => {
  return (
   <View style={styles.mainscreen}>
     <UpperComponent>
                <View style={styles.uppercontainer}>
                    <View style={styles.uppertextcomponent}>

                        <Text style={styles.phonenumbertext}>Forgot Password</Text>
                        <Text style={styles.subtext}>{`Reset your Password\nimmeditely`}</Text>

                    </View>
                    <View style={styles.iconcontainer}>
                        <Image style={styles.imagepng} source={require('../../assests/images/loginpagepng.png')} />
                    </View>
                </View>


            </UpperComponent>
           
                <LowerComponent>
                <ScrollView accessible>

                <KeyboardAvoidingView style={{}} behavior='padding' enabled >
                    <View style={styles.textcomponent}>
                        <Text style={styles.text}>{`Please enter the email address below,you\nwill receive a link to create a new password\nvia email`}</Text>
                    </View>
                    <View style={styles.phonenumbercontainer}>

                           <FormInput
                           placeholder={"Email id"}
                           headingname={"Email"}
                           iconname={"email"}
                           onChange={""}
                           onBlur={""}
                           keyboardType={'email-address'}

                           />
                        <CustomButton style={styles.submitbutton} onPress={() =>{console.log("submit")}} title={'Submit'} />
                    </View>

            </KeyboardAvoidingView>
            </ScrollView>


                </LowerComponent>
                
   </View>
  )
}

const styles=StyleSheet.create({

    mainscreen: {
        backgroundColor: colors.CERVmaincolor
    },
    textcomponent: {
        marginLeft: 20,
        marginTop: 30
    },
    text: {
        color: colors.lighttextcolor,
        fontSize: width * 0.045
    },

    phonenumbercontainer: {
        margin: 10
    },
    phonetext: {
        marginVertical: 20
    },

    uppertextcomponent: {
        justifyContent: 'center'
    },
    uppercontainer: {
        flexDirection: 'row',
        margin: 15,
    },
    imagepng: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    iconcontainer: {
        height: height * 0.3,
        width: width * 0.5
    },
    phonenumbertext: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: width * 0.065,
    },
    subtext: {
        color: colors.white,
        marginTop: 10,
        fontSize: width * 0.04

    },
    submitbutton: {
        marginVertical: 20
    }

})

export default Forgotpassword
