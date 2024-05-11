import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Metrics from '../../../assests/Metrics'
import colors from '../../../constants/colors'

const MenuCard = ({ imageUri, enableSubText, onPressCancel, onPressPass, title, subText, enableformessage, requestColor, messageTimeText, iconvisible, requestResultText, requestResult, materialIconEnable, mIconName, onPress, circleborder }) => {

    const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png'
    return (
        <View style={styles.mainScreen}>
            <Pressable onPress={onPress} style={styles.cardContainer }>
                <View style={[styles.imagecontainer, circleborder ? { borderRadius: Metrics.CountScale(5), backgroundColor: '#ebf5fe' } : { borderRadius: Metrics.CountScale(25) }]}>
                    {materialIconEnable ? <MaterialCommunityIcons name={mIconName} color='#2196f3' size={20} /> : <Image style={styles.image} source={{ uri: imageUri || imageUrl }} />}
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.cardNumberContainer}>
                        <Text style={styles.title}>{title}</Text>
                        {/* <MaterialCommunityIcons name='square-edit-outline' size={24} color={colors.checkcolor} /> */}
                    </View>
                    {enableSubText && (<View style={styles.expiresDataContainer}>
                        <Text style={styles.date}>{subText}</Text>
                    </View>)}
                </View>
                {
                    enableformessage && (<View>
                        <Text style={styles.messageTimerText}>{messageTimeText}</Text>
                    </View>)
                }
                {iconvisible && (
                    <> 
                     <View style={styles.icon}>
                        <Pressable style={styles.iconOuterCicle} onPress={onPressPass}>
                        <MaterialCommunityIcons name='pencil-outline' size={25} color={"green"}  />
                        </Pressable>
                        <Pressable style={styles.iconOuterCicle} onPress={onPressCancel}>
                        <MaterialCommunityIcons style={styles.checkIcon} name='trash-can-outline' size={25} color={"red"}/>
                        </Pressable>
                    </View>
                        <View style={styles.arrowRight}>
                            <MaterialCommunityIcons name='chevron-right' size={20} color={colors.lighttextcolor} />
                        </View>
                    </>
                )}
                {requestResult && (<View style={styles.requestResultStyle}>
                    <Text style={{ color: requestColor }}>{requestResultText}</Text>
                </View>)}
            </Pressable>
            {/* <View style={styles.line} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        // marginTop: 200
        // marginHorizontal:  Metrics.CountScale(10),
        // justifyContent: 'center',
        // textAlign: 'center'
    },
    cardContainer: {
        height: Metrics.CountScale(100),
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderRadius: Metrics.CountScale(15),
        paddingHorizontal: Metrics.CountScale(10)
    },
    imagecontainer: {
        width: Metrics.CountScale(70),
        height: Metrics.CountScale(70),
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: 'center',
        marginRight: Metrics.CountScale(5),
        backgroundColor: 'red',
        borderRadius: Metrics.CountScale(25)
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    textContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        marginHorizontal: Metrics.CountScale(5),
        marginVertical: Metrics.CountScale(15)
    },
    cardNumberContainer: {
        flexDirection: 'row',
    },
    expiresDataContainer: {
        flexDirection: 'row',
        color: colors.lighttextcolor
    },
    date: {
        color: colors.lighttextcolor,
        marginHorizontal: Metrics.CountScale(5),
        fontSize: Metrics.CountScale(13),
        // fontWeight:'bold'
    },
    icon: {
        justifyContent: 'space-between',
        flexDirection: 'column',
        marginVertical: Metrics.CountScale(12),
        marginRight:Metrics.CountScale(3)

    },
    checkIcon: {
        // marginLeft: Metrics.CountScale(10)
    },
    title: {
        fontSize: hp(2),
        marginHorizontal: wp(1),
        fontWeight: 'bold'
    },
    line: {
        borderTopWidth: Metrics.CountScale(1.1),
        borderTopColor: colors.line
    },
    requestResultStyle: {
        justifyContent: 'flex-end',
        marginBottom: Metrics.CountScale(20),
        marginRight: Metrics.CountScale(5)
    },
    messageTimerText: {
        marginTop: Metrics.CountScale(10),
        color: colors.lighttextcolor,
        fontSize: Metrics.CountScale(13),
        fontWeight: 'bold'
    },
    arrowRight:{
        alignSelf:'center'
    },
    iconOuterCicle:{
        borderColor:colors.lighttextcolor,
        borderWidth:Metrics.CountScale(1.5),
        padding:Metrics.CountScale(4),
        borderRadius:Metrics.CountScale(20),
    }

})

export default MenuCard
