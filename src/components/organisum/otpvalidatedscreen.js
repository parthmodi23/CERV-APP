import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, View, Text, Alert, Dimensions, Image, ActivityIndicator, ToastAndroid } from 'react-native'
import colors from '../../constants/colors'
import OTPTextView from 'react-native-otp-textinput';
import CustomButton from '../atoms/buttoncomponent/button'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'
import UpperComponent from '../atoms/commonscreen/uppercontainer';
import LowerComponent from '../atoms/commonscreen/lowercomponent';
import { useDispatch, useSelector } from 'react-redux';
import * as otpAction from '../../redux/actions/verifyotp'
import * as authActions from '../../redux/actions/auth'

const { width, height } = Dimensions.get('window')
const Otpvalidatedscreen = (props) => {
    const [otpinput, setOtpInput] = useState('')
    const dispatch = useDispatch();
    const route = useRoute()
    const [otpsend, setOtpsend] = useState(false)
    const [resendotp, setResendOtp] = useState(false)
    const [isuserregister, setIsuserregister] = useState(false)
    const navigation = useNavigation()
    const userdatawithphone = route.params?.userdata ?? '';

    const otporderdetails = useSelector(state => state.verifyotp)
    const verifyregisteruser = useSelector(state => state.auth)

    console.log("LOG FOR VERIFYUSER", verifyregisteruser)


    //converting jason to formdata for the api payload
    let formData = new FormData()
    for (let key in verifyregisteruser.userdata) {
        formData.append(key, verifyregisteruser.userdata[key])
    }
        console.log(formData)
    // const handleVerifyOtp = async () => {
    //     if (otpinput.length !== 4) {
    //         Alert.alert("Alert", "Please enter valid Otp")
    //     }
    //     //check all the details of user and dispatch if customer else navigate to details page
    //     const verifyOtpResponse = await dispatch(otpAction.verifyotp(otpinput, otporderdetails.otporderid, otporderdetails.countrycode, otporderdetails.phonenumber))
    //     if (verifyOtpResponse.success == true) {
    //         setIsuserregister(true)
    //         if (verifyregisteruser.userselectedrole === 'Customer') {
    //             dispatch(authActions.registeruser(formData)).then((res) => {
    //                 console.log("register user data", res)
    //                 setIsuserregister(false)
    //                 if (res.success == true) {
    //                     Alert.alert("Welcome to CERV!", "Please Login with your credentials😊")
    //                     navigation.navigate('login')
    //                 } else {
    //                     Alert.alert("Error!!", res.message ?? "Something went wrong.Please try again")
    //                 }
    //             })
    //         }
    //         else if (verifyregisteruser.userselectedrole === 'Caterer') {
    //             navigation.navigate('catererdetails')
    //         } else {
    //             Alert.alert("Something went wrong!", "Please restart your app")
    //         }
    //     } else {
    //         Alert.alert("Error!", verifyOtpResponse.message ?? "Invalid OTP")
    //     }
    // }

    const handleVerifyOtp = async () => {
        if (otpinput.length !== 4) {
            Alert.alert("Alert", "Please enter a valid OTP");
            return;
        }
        setIsuserregister(true);
        const otpData = {
            otp: otpinput,
            orderid: otporderdetails.otporderid,
            countrycode: "91",
            phonenumber: otporderdetails.phonenumber
        }
        const verifyOtpResponse = await dispatch(otpAction.verifyotp(otpData));
        if (verifyOtpResponse.success) {
            console.log('hello')
            //we can also add new user if needed in furture
            switch (verifyregisteruser.userselectedrole) {
                case 'Customer':
                    handleCustomerRegistration();
                    break;
                case 'Caterer':
                    //this flag remove the continueos loader of register user
                    setIsuserregister(false);
                    navigation.navigate('catererdetails');
                    break;
                default:
                    Alert.alert("Error!", "Invalid user role");
            }
        } else {
            setIsuserregister(false);
            Alert.alert("Error!", verifyOtpResponse.message ?? "Invalid OTP");
        }
    };

    const handleCustomerRegistration = async () => {
        console.log(formData)
        try{
        const registrationResponse = await dispatch(authActions.registeruser(formData));
        console.log("register user data", registrationResponse);
        setIsuserregister(false);

        if (registrationResponse.success) {
            Alert.alert("Thank you for Register!", "Please login with your credentials 😊");
            navigation.navigate('login');
        } else {
            Alert.alert("Error!", registrationResponse.msg ?? "Something went wrong. Please try again");
        }}catch(err){
            Alert.alert(err)
            return
        }
    };

    const handleresendotp = () => {
        try{
        setResendOtp(true)
        dispatch(otpAction.resendotp(otporderdetails.otporderid)).then((res) => {
            console.log(res)
            setResendOtp(false)
            Alert.alert(res.message ?? "something  went wrong please try again.")
        })}
        catch(error){
            setResendOtp(false)
            Alert.alert(error)
        }
    }


    // const handleOtp = async () => {
    //     if (otpinput.length !== 4) {
    //         Alert.alert("Alert", "Please enter valid Otp")
    //     }
    //     // setOtpVerify(true)
    //     await dispatch(otpAction.verifyotp(otpinput, otporderdetails.otporderid, otporderdetails.countrycode, otporderdetails.phonenumber)).then((res) => {
    //         // setOtpVerify(false)
    //         console.log("verifyuser", res)
    //         if (res.isVerify) {
    //             handleRegisterUser()
    //         } else {
    //             alert("error")
    //         }
    //     })
    // }

    // const handleRegisterUser = async () => {
    //     console.log("register api call")
    //     await dispatch(authActions.registeruser(formData)).then((res) => {
    //         console.log("registeruser", res)
    //     })
    // }



    return (
        <View style={styles.mainscreen}>
            <UpperComponent>
                <View style={styles.uppercontainer}>
                    <View style={styles.uppertextcomponent}>

                        <Text style={styles.phonenumbertext}>Verification Code</Text>
                        <Text style={styles.subtext}>{`we have sent an SMS to\n${userdatawithphone.userphonenumber.slice(0, 2)}******${userdatawithphone.userphonenumber.slice(-2)}. please enter the\ncode you receive below.`}</Text>

                    </View>
                    <View style={styles.iconcontainer}>
                        <Image style={styles.imagepng} source={require('../../assests/images/signuppagepng.png')} />
                    </View>
                </View>


            </UpperComponent>
            <LowerComponent>
                <View>
                    <OTPTextView

                        handleTextChange={(text) => setOtpInput(text)}
                        containerStyle={styles.textInputContainer}
                        // handleCellTextChange={styles.cell} 
                        inputCount={4}
                        keyboardType="numeric"
                        textInputStyle={styles.otpInputStyle} // Style for the text inside the box
                    />
                    <View style={styles.textcontainer}>
                        <Text style={styles.text}>Didn't Get the Code? </Text>

                        {resendotp ? <ActivityIndicator size='small' color={colors.CERVmaincolor} /> : <TouchableOpacity onPress={handleresendotp} style={styles.resendoptbutton}>
                            <Text style={styles.resendcode}>Resend Code</Text>
                        </TouchableOpacity>}
                    </View>
                    <CustomButton
                        style={styles.button}
                        title={isuserregister ? <ActivityIndicator size='small' color='black' /> : 'Verify Code'}
                        disable={isuserregister ? true : false}
                        onPress={handleVerifyOtp}
                    />
                </View>
            </LowerComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    mainscreen: {
        backgroundColor: colors.CERVmaincolor,
    },
    otpInputStyle: {
        width: 50,
        height: 50,
        fontSize: 24,
        borderColor: 'black',
        borderRadius: 10,
        textAlign: 'center',
        borderRightColor: colors.CERVmaincolor,
        backgroundColor: colors.CERVmaincolor,
        borderBottomColor: colors.CERVmaincolor,
    },
    text: {
        color: colors.lighttextcolor,
        fontWeight: "bold",
    },
    resendcode: {
        color: colors.CERVmaincolor
    },
    textInputContainer: {
        marginTop: 50,
        marginBottom: 30,
    },
    button: {
        marginTop: 20
    },
    textcontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    resendoptbutton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        width: width * 0.5,
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
    cell: {
        backgroundColor: 'red',

    }

})

export default Otpvalidatedscreen
