import React, { useDebugValue, useEffect, useReducer, useState } from 'react'

import { View, StyleSheet, Text, Image, Dimensions, Alert, KeyboardAvoidingView } from 'react-native'
import colors from '../../constants/colors'
import PhoneInput from 'react-native-phone-number-input'
import CustomButton from '../atoms/buttoncomponent/button'
import { useNavigation,useRoute } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import UpperComponent from '../atoms/commonscreen/uppercontainer'
import LowerComponent from '../atoms/commonscreen/lowercomponent'
import { useDispatch,useSelector } from 'react-redux';
import * as otpAction from '../../redux/actions/verifyotp'
const { width, height } = Dimensions.get('window')

const Phonenumberscreen = () => {
    const [phonenumber, setPhonenumber] = useState('')
    const navigation = useNavigation(); // Use useNavigation hook to get navigation object
    const route=useRoute()
    const dispatch=useDispatch()
    // const selector=useSelector()
    const role=route.params?.role
    const handlephonenumber = (number) => {
        //with country code 13 with + sign
        if (number.length < 13) {
            Alert.alert("Alert!", "Please enter the valid number")
        } else {
                dispatch(otpAction.sendotp(number.substring(3,13),number.substring(1,3)))
                navigation.navigate('otpscreen',{
                    userphonenumber: number.substring(3,13),
                    countycode: number.substring(0,2),
                    role:role
                })
        }
    }
    return (
        <View style={styles.mainscreen}>
            <UpperComponent>
                <View style={styles.uppercontainer}>
                    <View style={styles.uppertextcomponent}>

                        <Text style={styles.phonenumbertext}>Phone Number</Text>
                        <Text style={styles.subtext}>{`verify your phone number \nfor extra security`}</Text>

                    </View>
                    <View style={styles.iconcontainer}>
                        <Image style={styles.imagepng} source={require('../../assests/images/loginpagepng.png')} />
                    </View>
                </View>


            </UpperComponent>
            <KeyboardAvoidingView behavior='padding' enabled >
                <LowerComponent>
                    <View style={styles.textcomponent}>
                        <Text style={styles.text}>{`we'll send you a verification code.\n Just enter your phone number below `}</Text>
                    </View>
                    <View style={styles.phonenumbercontainer}>

                        <Text style={styles.phonetext}>Phone Number</Text>
                        <View>
                            <PhoneInput
                                defaultValue={phonenumber}
                                onChangeFormattedText={(text) => setPhonenumber(text)}
                                defaultCode='IN'
                                containerStyle={styles.phonenumber}
                                textInputProps={{ maxLength: 10 }}
                                textContainerStyle={{}}
                                countryPickerButtonStyle={{}}
                                countryPickerProps={{}}
                                textInputStyle={{}}
                                flagButtonStyle={{}}
                                layout='second'
                            />
                        </View>
                        <CustomButton style={styles.submitbutton} onPress={() => handlephonenumber(phonenumber)} title={'Submit'} />
                    </View>

                </LowerComponent>
            </KeyboardAvoidingView>

        </View>
    )
}
const styles = StyleSheet.create({
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

export default Phonenumberscreen
