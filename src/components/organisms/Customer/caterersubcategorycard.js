import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import colors from '../../../constants/colors'
import Metrics from '../../../assests/Metrics'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { selectedProductData } from '../../../redux/actions/profileaction'

const CatererSubCategoryCard = ({ title, subTitle,imageUri, price,quantity, counter, enableCounter, handleCounterPress,handleIncrement,handleDecrement, index }) => {

    const selectedData=useSelector(state=>state.home)
    // const quantity=selectedData.quantity
    const isSelected = selectedData.selectedProductData && Array.isArray(selectedData.selectedProductData) && selectedData.selectedProductData.includes(index);
   
    const image = 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9vZGxlc3xlbnwwfHwwfHx8MA%3D%3D'
    return (
        <>
            <View style={styles.mainScreen}>
                <Image source={{ uri:imageUri ||image }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={[styles.titleText]}>{title}</Text>
                    <Text style={[styles.textStyle, styles.addressText]}>{subTitle}</Text>
                    <View style={styles.lowerContainer}>
                        <Text style={[styles.textStyle, styles.priceText]}>{price}</Text>
                        {(isSelected)
                            ? <View style={styles.counterContainer}>
                                <MaterialCommunityIcons name='minus' size={25} color={colors.reject} onPress={handleDecrement} />
                                <Text style={styles.counterText}>{quantity}</Text>
                                <MaterialCommunityIcons name='plus' size={25} color={colors.success} onPress={handleIncrement}/>
                            </View>
                            :
                            <TouchableOpacity style={styles.addIconContainer} onPress={handleCounterPress}>
                                <SimpleLineIcons name='basket' size={15} color={colors.CERVmaincolor} />
                                <Text style={styles.addText}>Add</Text>
                            </TouchableOpacity>
                        }
                    </View>
                </View>
            </View>
            <View style={styles.seperator} />
        </>

    )
}

const styles = StyleSheet.create({
    mainScreen: {
        // flex: 1,
        flexDirection: 'row',
        marginHorizontal: Metrics.CountScale(10)
    },
    image: {
        height: Metrics.CountScale(80),
        width: Metrics.CountScale(80),
        resizeMode: 'cover',
        marginRight: Metrics.CountScale(10)
    },
    addIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: Metrics.CountScale(1.5),
        borderColor: colors.lighttextcolor,
        justifyContent: 'flex-end',
        paddingHorizontal: Metrics.CountScale(10),
        marginTop: Metrics.CountScale(10)

    },
    textStyle: {
        marginTop: Metrics.CountScale(5),
        color: colors.lighttextcolor
    },
    titleText: {
        fontWeight: 'bold',
    },
    lowerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRightColor: 'red',
    },
    priceText: {
        alignSelf: 'center'
    },
    textContainer: {
        flex: 1,
    },
    addText: {
        marginHorizontal: Metrics.CountScale(5)
    },
    seperator: {
        borderTopColor: colors.stronglighttext,
        borderTopWidth: Metrics.CountScale(1.5),
        marginVertical: Metrics.CountScale(15)
    },
    counterContainer: {
        flexDirection: 'row',
        borderWidth: Metrics.CountScale(1.5),
        borderColor: colors.lighttextcolor,
        alignItems: 'center',
        marginTop: Metrics.CountScale(10)

    },
    counterText: {
        marginHorizontal: Metrics.CountScale(9)
    }
})

export default CatererSubCategoryCard
