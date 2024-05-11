import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';
import colors from '../../../constants/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CatererCard = ({ imageUri, title, address,handleCardPress,enablePrice,customeCardStyle, enableRating, isCurved, price, RatingValue, handleLike, likeIcon }) => {
    const demoimage = 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    return (
        <View style={[styles.mainScreen, isCurved ? styles.curved : null,customeCardStyle]}>
            
                <View style={styles.cardContainer}>
                <TouchableOpacity onPress={handleCardPress}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: imageUri || demoimage }} />
                    </View>
                    <View style={styles.textComponent}>
                        <View style={styles.catererDetails}>
                            <Text style={styles.catererName}>{title}</Text>
                            <Text style={styles.catererAddress}>{address}</Text>
                           {enablePrice && <Text style={styles.catererPrice}>{price}</Text>}
                            <Rating
                                type='star'
                                ratingCount={5}
                                imageSize={20}
                                style={styles.rating}
                                readonly={enableRating}
                                // fractions={1}
                                minValue={0}
                                startingValue={RatingValue}
                                onFinishRating={(rating) => ratingCompleted(rating)}

                            />
                        </View>
                        <View style={styles.heartIcon}>
                            <MaterialCommunityIcons name={likeIcon} onPress={handleLike} size={30} color={"red"} />
                        </View>
                    </View>
            </TouchableOpacity>
                </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        // margin: 10,
        backgroundColor: colors.white,
        overflow: 'hidden',
    },
    curved: {
        borderRadius: 15,
    },
    cardContainer: {
        // elevation: 3,
        // height: 250,
        backgroundColor: colors.white,
        overflow: 'hidden'
    },
    catererDetails: {
        flexDirection: 'column',
        width: '80%',
        justifyContent: 'space-around',
    },
    textComponent: {
        height: hp(11),
        width: '100%',
        flexDirection: 'row',
        // position:'absolute',
        // bottom:0,
        marginVertical: 5,
        marginHorizontal: 10
    },
    heartIcon: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: hp(0.5),
    },
    imageContainer: {
        height: hp(24),
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    rating: {
        alignItems: 'flex-start',
        // marginBottom: 10
    },
    image: {
        height: "100%",
        width: '100%',
        resizeMode: 'stretch',
    },
    catererName: {
        fontWeight: 'bold',
        fontSize: wp(4.7)
    },
    catererPrice: {
        fontWeight: '400',
        fontSize: wp(4)
    },
    catererAddress: {
        fontWeight: '400',
        fontSize: wp(4)
    }


})

export default CatererCard
