import React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'
import colors from '../../../constants/colors'
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen'
const RacipeCard = ({ recipeImage, recipeName }) => {
    return (
        <View style={styles.mainScreen}>
            <View style={styles.recipeContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: recipeImage || 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505' }} />
                </View>
                <Text style={styles.text}>{recipeName || "helloo"}</Text>
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
    recipeContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        backgroundColor: colors.white,
        borderRadius: wp(2),
        margin:wp(3)
    },
    imageContainer: {
        borderRadius: wp(2),
        overflow: 'hidden',
        marginHorizontal: wp(4),
        marginVertical: hp(2),
        elevation:3,
    },
    image: {
        height:hp(15),
        width: wp(33)
    },
    text: {
        fontWeight: 'bold',
        marginBottom: hp(2)
    }
})
export default RacipeCard
