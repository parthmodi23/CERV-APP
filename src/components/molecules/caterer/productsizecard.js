import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import colors from '../../../constants/colors'
import { DataTable } from 'react-native-paper'
import Metrics from '../../../assests/Metrics'
const ProductSizeCard = ({ size, quantity, price }) => {
    return (
        <View style={styles.mainScreen}>
            <View style={styles.boxContainer}>
                <DataTable.Row style={styles.boxInnerContainer}>
                    <DataTable.Cell style={styles.subTitleText}>{size}</DataTable.Cell>
                    <DataTable.Cell style={styles.subTitleText}>{quantity}</DataTable.Cell>
                    <DataTable.Cell style={styles.subTitleText}>${price}</DataTable.Cell>
                </DataTable.Row>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1
    },
    boxContainer: {
        flexDirection: 'column'
    },
    boxInnerContainer: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
    },
    subTitleText: {
        fontWeight: 'bold',
        paddingHorizontal:Metrics.CountScale(20)
    },
    titleText: {
        color: colors.lighttextcolor
    }
})

export default ProductSizeCard
