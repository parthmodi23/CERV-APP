import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import CustomButton from '../../../components/atoms/buttoncomponent/button'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../../../constants/colors'
import Metrics from '../../../assests/Metrics'




const ItemDetails = ({ titleText, numberOfDish, price, totalPriceStyle, enableSubText, titleTextStyle }) => {
    return (
        <View style={styles.foodListContainer}>
            <View style={styles.recepiText}>
                <Text style={[styles.titleRecepiText, titleTextStyle]}>{titleText}</Text>
                {enableSubText && <Text style={styles.subRecepiText}>{numberOfDish} Dishes</Text>}
            </View>
            <Text style={[styles.recepiPrice, totalPriceStyle]}>${price}</Text>
        </View>
    )
}


const Invoice = () => {
    return (
        <View style={styles.mainScreen}>
            <View style={styles.billDetails}>
                    <Text style={styles.headerTitle}>Address</Text>
                    <View style={styles.addressContainer}>
                        <View style={styles.iconContainer}>
                            <MaterialCommunityIcons name='home-outline' size={25} color={colors.CERVmaincolor} />
                        </View>
                        <Text style={styles.addressText}>374 william S Canning Blvd, Fall River MA 2721</Text>
                    </View>
                    <Text style={styles.billText}>Bill Details</Text>
                    <ItemDetails
                        titleText={'Noodles total(20 Plates)'}
                        price={210.80}
                    />
                    <ItemDetails
                        titleText={'Rice total(20 Plates)'}
                        price={270.80}
                    />
                    <ItemDetails
                        titleText={'Service Charges'}
                        price={1.00}
                    />
                    <ItemDetails
                        titleText={'Delivery Free'}
                        price={2.50}
                    />
                    <View style={styles.line} />
                    <ItemDetails
                        titleText={'Promo Discount'}
                        price={2.50}
                    />
                    <View style={styles.line} />

                    <ItemDetails
                        titleText={'Sub Total'}
                        price={547.10}
                    />
                    <View style={styles.line} />

                    <ItemDetails
                        titleText={'Tax'}
                        price={5.10}
                    />
                    <View style={styles.line} />

                    <ItemDetails
                        titleText={'Total'}
                        price={552.20}
                        titleTextStyle={styles.totalText}
                        totalPriceStyle={styles.totalText}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <CustomButton
                        title={'Send Invoice'}
                        onPress={() => { }}
                    />
                </View>

        </View>

    )
}

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        marginHorizontal: Metrics.CountScale(25)
    },
    headerTitle: {
        fontSize: Metrics.CountScale(20),
        fontWeight: "bold"
    },
    recepiPrice: {
        color: colors.black,
        fontWeight: 'bold'
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    subRecepiText: {
        color: colors.GreyColor
    },
    titleRecepiText: {
        fontWeight: 'bold'
    },
    foodListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    recepiText: {
        flexDirection: 'column',
        // justifyContent: '',
        marginVertical: Metrics.CountScale(7)
    },
    billText: {
        fontWeight: 'bold',
        fontSize: Metrics.CountScale(20)
    },
    totalText: {
        fontWeight: '900',
        fontSize:Metrics.CountScale(17)
    },
    iconContainer: {
        padding: Metrics.CountScale(5),
        borderColor: colors.CERVmaincolor,
        borderWidth: Metrics.CountScale(1.1),
        borderRadius: Metrics.CountScale(5),
        marginVertical: Metrics.CountScale(10)
    },
    addressText: {
        width: Metrics.CountScale(250),
        marginLeft: Metrics.CountScale(10)
    },
    line: {
        borderTopWidth: Metrics.CountScale(1.5),
        borderTopColor: colors.stronglighttext,
        marginVertical: Metrics.CountScale(5)
    },
    billDetails:{
        flex:1
    },
    buttonContainer:{
        marginBottom:Metrics.CountScale(20)
    }
})

export default Invoice
