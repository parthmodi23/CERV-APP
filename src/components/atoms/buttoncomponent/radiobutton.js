import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native';

import { Button, RadioButton } from 'react-native-paper'
import colors from '../../../constants/colors';

const CustomeRadioButton = ({text,buttonValue}) => {


    return (
        <View style={styles.mainScreen}>
            <View style={styles.radioButtonContainer} >
                <Text>{text}</Text>
                <RadioButton style={styles.radioButton}
                    value={buttonValue}
                    color={colors.CERVmaincolor}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioButtonContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    radioButton: {
        justifyContent: 'flex-end'
    }
})
export default CustomeRadioButton
