// import React from 'react'
// import { TextInput,View,Text,Button,StyleSheet, Dimensions } from 'react-native'
// import CustomButton from '../buttoncomponent/button';
// import { Formik } from 'formik';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// const windowWidth = Dimensions.get('window').width;

// const FormInput = ({propss,onSubmit,initialValues,Children,iconname,headingname,passwordeye}) => {
//     return (
//         <View>
//         <Formik
//         initialValues={initialValues}
//         onSubmit={onSubmit}
//         >  
//             {({handleChange,handleBlur,handleSubmit,values})=>(
//             <View>
//              <Text style={styles.headingtext}>{headingname}</Text>
//             <View style={styles.emailpasscomponent}>
//              <MaterialCommunityIcons style={styles.icon} size={24} name={iconname} color='#f5694e' />
//                 {propss.map(props=>(
//                 <TextInput style={styles.inputfeild}
//                     key={name}
//                     onChangeText={handleChange(name)}
//                     onBlur={handleBlur(name)}
//                     value={values[name]}
//                     placeholder={placeholder}
//                     secureTextEntry={secureTextEntry}
//                     keyboardType={keyboardType}
//                     {...Children}
//                 />
//                 ))}
//             <TouchableOpacity onPress={passwordeye} style={styles.passwordeye}>
//             <MaterialCommunityIcons  size={24} name='eye' color='#f5694e' />
//             </TouchableOpacity>
//             </View>
//             </View>
//             )}
//          </Formik>
//          </View>

//     )
// }

// const styles=StyleSheet.create({
//     emailpasscomponent: {
//             flexDirection: 'row',
//             borderBottomColor: 'black',
//             alignItems: 'center', // Center items vertically
//             borderBottomWidth: 2,
//     },
//     inputfeild:{
//         // borderBottomWidth:2,
//         width:windowWidth*0.85,
//     },
//     icon:{
//         marginRight:5,
//     },
//     headingtext: {
//         marginVertical: 10,
//         color: '#cccccc',
//         fontSize: 15,
//         fontWeight:'bold'
//       },
//       passwordeye:{
//         paddingHorizontal: 5,
//       },
// })

// export default FormInput
////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import { TextInput, View, Text, Button, StyleSheet, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;

const FormInput = ({ onChange, onBlur,numberOfLines, editable,closesideicon, values, placeholder, borderbox, oniconpressed, sideicon, showicon, headingname, secureTextEntry, keyboardType, children, passwordeye, iconname, sideiconsecond,isVisible }) => {
    return (
        <View>
            <Text style={styles.headingtext}>{headingname}</Text>
            <View style={[styles.emailpasscomponent, styles.borderbox]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                    <MaterialCommunityIcons style={styles.icon} size={22} name={iconname} color='#f5694e' />
                    <TextInput style={styles.inputfeild}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={values}
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry}
                        keyboardType={keyboardType}
                        editable={editable}
                        numberOfLines={numberOfLines}
                        {...children}
                    />
                </View>
                <TouchableOpacity onPress={passwordeye} style={styles.passwordeye}>
                    <MaterialCommunityIcons size={24} name={sideicon} color='#f5694e' />
                    {/* <Ionicons onPress={oniconpressed} name={sideiconsecond} size={24} color='#f5694e'/> */}
                </TouchableOpacity>
            </View>
        </View>



    )
}

const styles = StyleSheet.create({
    emailpasscomponent: {
        flexDirection: 'row',
        borderBottomColor: 'black',
        alignItems: 'center', // Center items vertically
        borderBottomWidth: 2,
        // flex:1
    },
    inputfeild: {
        // borderBottomWidth:2,
        flex: 1,
        marginHorizontal: 5
    },
    icon: {
        // marginRight:5,
    },
    headingtext: {
        marginVertical: 10,
        color: '#737373',
        fontSize: 15,
        fontWeight: 'bold'
    },
    passwordeye: {
        // paddingHorizontal: 10,
    },
})

export default FormInput