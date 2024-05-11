import React from 'react'
import FormInput from '../../atoms/commonforminput/forminput'
import { StyleSheet } from 'react-native'
import { onChildAdded } from 'firebase/database'
import colors from '../../../constants/colors'

const AddCardDetails = () => {
    return (
        <View style={styles.mainScreen}>
            <FormInput
                placeholder={'Card Number'}
                inputType={'cardNumber'}
                headingname={'Card Number'}
                onBlur={() => {}}
                onChange={() => {}}
                keyboardType={'numeric'}
                borderbox={styles.bordercolor}
            />
            <View style={styles.cvvContainer}>
                <FormInput
                    placeholder={'Card Number'}
                    inputType={'cardNumber'}
                    headingname={'Card Number'}
                    onBlur={() => { }}
                    onChange={() => { }}
                    keyboardType={'numeric'}

                />
                <FormInput
                    placeholder={'Card Number'}
                    inputType={'cardNumber'}
                    headingname={'Card Number'}
                    onBlur={() => { }}
                    onChange={() => { }}
                    keyboardType={'numeric'}
                    secureTextEntry={true}
                />
            </View>
            <FormInput
                placeholder={'Card Number'}
                inputType={'cardNumber'}
                headingname={'Card Number'}
                onBlur={() => { }}
                onChange={() => { }}
                keyboardType={'numeric'}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        margin: 10
    },
    cvvContainer: {
        flexDirection: 'row',
    },
    borderbox:{
        bordercolor:colors.black
    }
})

export default AddCardDetails
