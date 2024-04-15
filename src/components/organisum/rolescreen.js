import React, { useState } from 'react'
import { Image, View, Text, StyleSheet, Dimensions, Alert } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import CustomButton from '../atoms/buttoncomponent/button'
import colors from '../../constants/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import * as authAction from '../../redux/actions/auth'
import { BottomNavigation } from 'react-native-paper'
// const { width, height } = Dimensions.get('window')


const RoleScreen = () => {

    // const [selectedrole, setSelectedrole] = useState(false)
    const [myrole, setmyRole] = useState('Customer')

    const navigation = useNavigation()
    const dispatch = useDispatch()

    const handleuserrole = () => {
        console.log("myrolergrgergerg", myrole)
        if (myrole.length === 0) {
            Alert.alert("Please select your role")
        }
        //for checking 
        if (myrole == "Customer") {
            console.log("Customer")
        } else {
            console.log("Caterer")
        }
        console.log("pass the role", myrole)
        dispatch(authAction.storeuserrole(myrole))
        navigation.navigate('login', {
            role: myrole
        })
    }
    return (

        <View style={styles.mainscreen}>
                <View style={styles.textcontainer}>
                    <Text style={styles.maintext}>Select your Role</Text>
                    <Text style={styles.subtext}>How do you want to use <Text style={styles.cervtext}>CERV?</Text> </Text>
                </View>
                <View style={styles.rolecontainer}>
                                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={styles.iconstyle}>
                        <TouchableOpacity style={[styles.imagecontainer, { borderColor: myrole == 'Customer' ? colors.CERVmaincolor : colors.lighttextcolor }]}
                            onPress={() => {
                                setmyRole('Customer')
                            }}>
                            <View style={[styles.outerline, { borderColor: myrole == 'Customer' ? colors.CERVmaincolor : colors.lighttextcolor }]}>
                                <Image style={styles.image} source={require('../../assests/images/customer.png')} />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.usertext}>Customer</Text>
                    </View>

                    <View style={styles.iconstyle}>
                        <TouchableOpacity style={[styles.imagecontainer, { borderColor: myrole == 'Caterer' ? colors.CERVmaincolor : colors.lighttextcolor }]} onPress={() => setmyRole('Caterer')}>
                            <View style={[styles.outerline, { borderColor: myrole == 'Caterer' ? colors.CERVmaincolor : colors.lighttextcolor }]}>
                                <Image style={styles.image} source={require('../../assests/images/caterer.png')} />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.usertext}>Caterer</Text>
                    </View>
                                </ScrollView>

                </View>
                <View style={styles.button}>
                        <CustomButton onPress={handleuserrole} title={myrole == 'Customer' ? "I am a Customer" : 'I am a Caterer'} />
                    </View>


        </View>
    )
}
const styles = StyleSheet.create({
    maintext: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    textcontainer: {
        marginHorizontal: 10
    },
    subtext: {
        fontSize: 17,
        color: colors.lighttextcolor,
        fontWeight: 'bold',
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
        aspectRatio: 1.5 / 2,
        alignSelf: "center",
    },
    mainscreen: {
        flex: 1,
        marginTop: hp(6),
    },
    imagecontainer: {
        width: wp(42),
        height: hp(20),
        borderRadius: hp(20),
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover'
    },

    outerline: {
        width: wp(32),
        height: hp(15),
        borderWidth: 2,
        borderRadius: hp(50),
        overflow: 'hidden',
        borderColor: colors.lighttextcolor
    },
    rolecontainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    cervtext: {
        color: '#f5694e',
        fontWeight: 'bold'
    },
    iconstyle: {
        marginTop: hp(10),

    },
    usertext: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: hp(3)
    },
    button: {
        // marginTop:hp(10),
        // bottom: 0,
        // flexDirection:'row',
        // justifyContent:'flex-end',
        // alignSelf:'flex-end'
        marginBottom:hp(3),
        marginHorizontal:wp(5)

    }

})
export default RoleScreen
