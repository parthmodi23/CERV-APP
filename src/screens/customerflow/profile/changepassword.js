import React, { useEffect, useState } from 'react'
import FormInput from '../../../components/atoms/commonforminput/forminput'
import { StyleSheet, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import CustomButton from '../../../components/atoms/buttoncomponent/button'
import { useDispatch } from 'react-redux'
import * as authAction from '../../../redux/actions/auth'
import { Formik } from 'formik'
import * as Yup from 'yup'
const ChangePassword = ({ navigation }) => {

    const [passwordvisible,setPasswordvisible]=useState(true)

    const dispatch = useDispatch()

    useEffect(() => {
        navigation.setOptions({
            title: 'Change Password'
        });
        const parentNavigation = navigation.getParent();
        if (parentNavigation) {
            headerTitle: 'change password',
                parentNavigation.setOptions({
                    tabBarStyle: {
                        display: "none"
                    }
                });
        }
        // return () => navigation.getParent()?.setOptions({
        //   tabBarStyle: undefined
        // });
    }, [navigation]);

   

    const handleChangePassword = async (values) => {
        console.log(values)
        const password={
            oldPassword:values.oldpassword,
            newPassword:values.newpassword
        }
        const changepassword = await dispatch(authAction.changepassword(password))
        console.log(changepassword)
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
                onSubmit={(values)=>{
                    handleChangePassword(values)}}
            >
                {({handleChange,handleSubmit,handleBlur,values }) => (
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
                        <View style={styles.button}>
                        <CustomButton  title={"SAVE"} onPress={handleSubmit} />
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
    formpart:{
        flex:1
    }
})

export default ChangePassword
