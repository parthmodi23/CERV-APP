import React, { useEffect, useState } from 'react'
import FormInput from '../../../components/atoms/commonforminput/forminput'
import { StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import CustomButton from '../../../components/atoms/buttoncomponent/button'
import { useDispatch } from 'react-redux'
import * as authAction from '../../../redux/actions/auth'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { ActivityIndicator } from 'react-native-paper'
import colors from '../../../constants/colors'
import { useNavigation } from '@react-navigation/native'
const ChangePasswordScreen = () => {
    const [passwordvisible, setPasswordvisible] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    const navigation=useNavigation()
    useEffect(() => {
        navigation.setOptions({
            title:'Change Password',
            headerTitleAlign: "center",
        })
    }, [])



    const handleChangePassword = async (values) => {
        console.log(values)
        const password = {
            oldPassword: values.oldpassword,
            newPassword: values.newpassword
        }
        setIsLoading(true)
        await dispatch(authAction.changeuserpassword(password)).then((res) => {
            setIsLoading(false)
            console.log(res)
        })

    }
  return (
    <View style={styles.mainscreen}>
    <Formik
        const initialValues={{
            oldpassword: '',
            newpassword: '',
            confirmpassword: ''
        }}
        validationSchema={Yup.object().shape({
            oldpassword: Yup.string().required("old password id required"),
            newpassword: Yup.string().min(6, "at least 6 character are needed").required("new password is required"),
            newpassword: Yup.string().min(6, "at least 6 characters").required("new password is required"),
        })}
        onSubmit={(values) => {
            handleChangePassword(values)
        }}
    >
        {({ handleChange, handleSubmit, handleBlur, values, touched, errors }) => (
            <View style={styles.formpart}>
                <FormInput
                    headingname={"Old Password"}
                    sideicon={'eye'}
                    placeholder={'Old Password'}
                    onChange={handleChange('oldpassword')}
                    onBlur={handleBlur('oldpassword')}
                    value={values.oldpassword}
                    iconname={'lock'}

                />
                {touched.oldpassword && errors.oldpassword && <Text style={styles.errortext}>{errors.oldpassword}</Text>}

                <FormInput
                    headingname={"New Password"}
                    sideicon={'eye'}
                    placeholder={'New Password'}
                    onChange={handleChange('newpassword')}
                    onBlur={handleBlur('newpassword')}
                    value={values.newpassword}
                    iconname={'lock'}
                    passwordeye={() => setPasswordvisible(!passwordvisible)}
                    secureTextEntry={passwordvisible}
                />
                {touched.newpassword && errors.newpassword && <Text style={styles.errortext}>{errors.newpassword}</Text>}

                <FormInput
                    headingname={"Confirm Password"}
                    sideicon={'eye'}
                    placeholder={'Confirm Password'}
                    onChange={handleChange('confirmpassword')}
                    onBlur={handleBlur('confirmpassword')}
                    value={values.confirmpassword}
                    iconname={'lock'}
                    passwordeye={() => setPasswordvisible(!passwordvisible)}
                    secureTextEntry={passwordvisible}
                />
                {touched.confirmpassword && errors.confirmpassword && <Text style={styles.errortext}>{errors.confirmpassword}</Text>}

                <View style={styles.button}>
                    <CustomButton
                        title={isLoading ? <ActivityIndicator size="small" color={colors.black} /> : "SAVE"}
                        onPress={handleSubmit}
                        disable={isLoading ? true : false}
                    />
                </View>
            </View>
        )}

    </Formik>
</View>
)
}

const styles = StyleSheet.create({
mainscreen: {
flex: 1,
margin: wp(4),
},
button: {
position: 'absolute',
bottom: 0,
width: '100%'
},
formpart: {
flex: 1
}
})

export default ChangePasswordScreen
