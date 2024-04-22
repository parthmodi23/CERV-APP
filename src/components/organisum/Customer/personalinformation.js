import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import FormInput from '../../atoms/commonforminput/forminput'
import CustomButton from '../../atoms/buttoncomponent/button'
import { Formik } from 'formik'
import colors from '../../../constants/colors'
import { Alert, StyleSheet, Text, View } from 'react-native'
import PhoneInput from 'react-native-phone-number-input'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Camera from '../../atoms/camera'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import * as  profileAction from '../../../redux/actions/profileaction'
import * as authAction from '../../../redux/actions/auth'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { HeaderTitle } from '@react-navigation/elements'

const PersonalInformation = () => {
    const [isEditable, setIsEditable] = useState(false)
    const navigation = useNavigation()
    const dispatch = useDispatch()
    useEffect(() => {
        navigation.setOptions({
            title: isEditable ? 'Edit Information' : 'Personal Information',
            headerTitleAlign: "center",
        })
        dispatch(profileAction.getUserData())
    }, [isEditable])

    const handleUpdateUserData=async(values)=>{
        console.log("inner values",values)
        let formData = new FormData()
        for(let key in values) {
            formData.append(key, values[key])
        }
      try {
         dispatch(profileAction.editUesrData(formData)).then((res)=>{
             if(res.success){
              Alert.alert("Congratulations!","Your Data has been updated successfully")
              setIsEditable(!isEditable)
             }else{
                 Alert.alert('Oops','Something went wrong please try again')
             }
         })
      } catch (error) {
        Alert.alert(error)
      }
    }





    const authredux = useSelector(state => state.auth)
    const userdata = useSelector(state => state.userProfile.userProfileData)
    console.log(userdata)
    return (
        <View style={styles.mainScreen}>
            <View style={styles.cameracontainer}>
                <Camera imageoutercontainer={styles.cameraimagecontainer}
                    button={styles.button}
                    showButton={isEditable}
                    forimage={styles.imagestyle}
                    myimageurl={authredux.user?.image}

                />
            </View>
            <View style={styles.formField}>
                <KeyboardAwareScrollView>
                    {console.log("new data", userdata)}
                    <Formik
                        initialValues={{
                            username: userdata?.name,
                            email: userdata?.email,
                            phonenumber: userdata?.phone,
                            address: userdata?.address || "A-302 Willioms park",
                        }}
                        validationSchema={Yup.object().shape({
                            //for all the feilds proper validation will apply in last
                            username: Yup.string().required("Use name is require"),
                            email: Yup.string().email('Invalid email').required('Required'),
                            phonenumber: Yup.string().required("phone number is require"),
                            address: Yup.string().required("address is require")
                        })}
                        onSubmit={(values) => {
                            setIsEditable(prv => !prv)
                            if (isEditable == true) {
                               handleUpdateUserData(values)
                            }
                            console.log("user data from formik", values)
                        }}
                        enableReinitialize={true} // Add this line
                    >
                        {({ handleSubmit, handleBlur, handleChange, values, touched, errors }) => {
                            return <View style={styles.formContainer}>
                                <View style={styles.userForm}>
                                    <FormInput
                                        headingname={"User name"}
                                        iconname={'account'}
                                        placeholertext={'Enter your name'}
                                        values={values.username}
                                        onChange={handleChange('username')}
                                        onBlur={handleBlur('username')}
                                        editable={isEditable}
                                    />
                                    {touched.username && errors.username && <Text style={styles.errortext}>{errors.username}</Text>}

                                    <FormInput
                                        headingname={"Emai"}
                                        iconname={'email'}
                                        values={values.email}
                                        onChange={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        editable={false}

                                    />
                                    {touched.email && errors.email && <Text style={styles.errortext}>{errors.email}</Text>}

                                    <FormInput
                                        headingname={"Phone Number"}
                                        iconname={'phone'}
                                        values={values.phonenumber}
                                        onChange={handleChange('phonenumber')}
                                        onBlur={handleBlur('phonenumber')}
                                        editable={false}

                                    />
                                    {touched.phonenumber && errors.phonenumber && <Text style={styles.errortext}>{errors.phonenumber}</Text>}

                                    <FormInput
                                        headingname={"Home Address"}
                                        placeHolder="Enter your home address"
                                        iconname={'home'}
                                        values={values.address}
                                        onChange={handleChange('address')}
                                        onBlur={handleBlur('address')}
                                        editable={isEditable}
                                    />
                                    {touched.address && errors.address && <Text style={styles.errortext}>{errors.address}</Text>}
                                </View>
                                {/* <View style={styles.button}> */}
                                <CustomButton
                                    style={styles.button}
                                    title={isEditable ? "SAVE" : "Edit Information"}
                                    onPress={handleSubmit}
                                />
                                {/* </View> */}
                            </View>
                        }}
                    </Formik>
                </KeyboardAwareScrollView>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    phonetext: {
        colors: colors.lighttextcolor
    },
    userForm: {
        marginBottom: hp(15)
    },
    mainScreen: {
        flex: 1,
        marginHorizontal: wp(5),
        marginVertical: hp(2)
    },
    formField: {
        flex: 1,
    },
    cameracontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: hp('4%')
        // marginVertical:height*0.02
    },
    cameraimagecontainer: {
        width: wp("40%"),
        height: hp("19%"),
        borderRadius: hp("50%"),
        // width:width*0.45,
        // height:height*0.22,
        // borderRadius:width*.4
    },
    formContainer: {
        flex: 1,
    },
    imagestyle: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        // aspectRatio:0.89
    },
    errortext: {
        color: colors.error
    }
})

export default PersonalInformation
