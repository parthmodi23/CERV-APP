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
import { TextInput,View,Text,Button,StyleSheet, Dimensions } from 'react-native'

import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;

const FormInput = ({onChange,onBlur,values,placeholder,sideicon,headingname,secureTextEntry,keyboardType,children,passwordeye,iconname}) => {
    return (
            <View>
             <Text style={styles.headingtext}>{headingname}</Text>
            <View style={styles.emailpasscomponent}>
             <MaterialCommunityIcons style={styles.icon} size={24} name={iconname} color='#f5694e' />
                <TextInput style={styles.inputfeild}
                    onChangeText={onChange} 
                    onBlur={onBlur}
                    value={values}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    {...children}
                />
            <TouchableOpacity onPress={passwordeye} style={styles.passwordeye}>
            <MaterialCommunityIcons  size={24} name={sideicon} color='#f5694e' />
            </TouchableOpacity>
            </View>
            </View>
        
        

    )
}

const styles=StyleSheet.create({
    emailpasscomponent: {
            flexDirection: 'row',
            borderBottomColor: 'black',
            alignItems: 'center', // Center items vertically
            borderBottomWidth: 2,
    },
    inputfeild:{
        // borderBottomWidth:2,
        width:windowWidth*0.8,
    },
    icon:{
        marginRight:5,
    },
    headingtext: {
        marginVertical: 10,
        color: '#cccccc',
        fontSize: 15,
        fontWeight:'bold'
      },
      passwordeye:{

        // paddingHorizontal: 10,
      },
})

export default FormInput