import { TextInput, View, Text, Button, StyleSheet, Dimensions } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Metrics from '../../../assests/Metrics';

const DFormInput = ({ onChange, onBlur, titleText, textInputStyle,editable, secondicon, closesideicon, sideTextenable, sideText, values, secondiconname, placeholder, borderbox, oniconpressed, sideicon, showicon, headingname, secureTextEntry, keyboardType, children, passwordeye, iconname, sideiconsecond, isVisible }) => {
    return (
        <View style={styles.mainScreen}>
            <Text style={[styles.headingtext, titleText]}>{headingname}</Text>
            <View style={[styles.emailpasscomponent, styles.borderbox]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                    {secondicon ? (
                        <FontAwesome5 style={styles.icon} name={secondiconname} size={20} color='#59b0f6' />
                    ) : secondiconname === 'yourCondition' ? (
                        <MaterialCommunityIcons style={styles.icon} size={22} name={iconname} color='#59b0f6' />
                    ) : (
                        <></>
                    )}
                    <TextInput style={[styles.inputfeild,textInputStyle]}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={values}
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry}
                        keyboardType={keyboardType}
                        editable={editable}
                        {...children}
                    />
                </View>
                <TouchableOpacity onPress={passwordeye} style={styles.passwordeye}>
                    {!sideTextenable ?
                        <MaterialCommunityIcons size={24} name={sideicon} color='#59b0f6' /> : <Text style={{ color: '#59b0f6' }}>{sideText}</Text>}
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainScreen: {
        // marginHorizontal: Metrics.CountScale(16),
        // marginVertical: Metrics.CountScale(1)
    },
    emailpasscomponent: {
        flexDirection: 'row',
        borderBottomColor: '#59b0f6',
        alignItems: 'center', // Center items vertically
        borderBottomWidth: 1,
        paddingVertical: Metrics.CountScale(7),
        marginBottom: Metrics.CountScale(6),
        // flex:1
    },
    inputfeild: {
        // borderWidth:2,
        flex: 1,
        marginHorizontal: Metrics.CountScale(10),
    },
    icon: {
        // marginRight:5,
    },
    headingtext: {
        marginVertical: 5,
        color: '#737373',
        fontSize: 15,
        // fontWeight: 'bold'
    },
    passwordeye: {
        // paddingHorizontal: 10,
    },
})
export default DFormInput