import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Image, StyleSheet, View,Text } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';
import colors from '../../../constants/colors';

const CatererCard = ({imageUri,title,address,price,RatingValue}) => {
    const [isLike,setIsLike]=useState(false)

    const handleLike=()=>{
        setIsLike(!isLike)
        console.log(isLike) 
    }
    if(isLike){
        console.log("user like")
    }
    const ratingCompleted=(rating)=> {
        console.log("Rating is: " + rating)
      }
    return (
        <View style={styles.mainScreen}>
            <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri:imageUri||'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} />
            </View>
            <View style={styles.textComponent}>
                <View style={styles.catererDetails}>
                    <Text style={styles.catererName}>{title}</Text>
                    <Text style={styles.catererAddress}>{address}</Text>
                    <Text>{price}</Text>
                    <Rating
                        type='star'
                        ratingCount={5}
                        imageSize={20}
                        style={styles.rating}
                        readonly={false}
                        // fractions={1}
                        minValue={0}
                        startingValue={RatingValue}
                        onFinishRating={(rating)=>ratingCompleted(rating)}
                    />
                </View>
                <View style={styles.heartIcon}>
                    {isLike?<MaterialCommunityIcons name='heart' onPress={handleLike} size={30} color={"red"}/>:<MaterialCommunityIcons onPress={handleLike} name='cards-heart-outline' size={30} color={"black"}/>}
                </View>
            </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainScreen:{
        flex:1,
        margin:10,
        justifyContent:'center'
    },
    cardContainer:{
        borderRadius:15,
        elevation:3,
        height:250,
        backgroundColor:colors.white,
        overflow:'hidden'
    },
    catererDetails: {
        flexDirection:'column', 
        width:'80%',
        justifyContent:'space-around',
    },
    textComponent:{
        height:80,
        width:'100%',
        flexDirection:'row',
        // position:'absolute',
        // bottom:0,
        marginVertical:5,
        marginHorizontal:10
    },
    heartIcon:{
        // flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    imageContainer:{
        height:170,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    rating:{
    alignItems:'flex-start',
    marginBottom:10
    },
    image:{
        height:"100%",
        width:'100%',
        resizeMode:'cover',
    },
    catererName:{
        fontWeight:'bold'
    }
    
})

export default CatererCard
