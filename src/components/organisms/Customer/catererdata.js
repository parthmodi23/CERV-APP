import React, { useCallback, useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native'
import CatererCard from '../../molecules/customer/caterercard'
import { useDispatch, useSelector } from 'react-redux'
import colors from '../../../constants/colors'
import * as homeAction from '../../../redux/actions/homeaction'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
import CarouselView from '../../molecules/customer/carousel'
import { ScrollView } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'


const CatererData = () => {

    const [isRefreshing, setIsRefresing] = useState(false)
    const [error, setError] = useState(false)
    const [isLike, setIsLike] = useState(false)

    const refRBSheet = useRef()
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const catererData = useSelector(state => state.home.catererData)

    console.log("caterer Data is here",catererData)
    useEffect(() => {
        setIsRefresing(true)
        dispatch(homeAction.gatCatererData())
            .then((data) => {
                setError(false)
                console.log('success')
            })
            .catch((err) => {
                setError(true)
                Alert.alert(err)
            })
        setIsRefresing(false)
    }, [])

    const handleCardPress = (id) => {
        navigation.navigate('singlecatererdetails', {
            params: {
                catererId: id
            }
        })
    }

    const handleCatererLike = (catererId) => {

        if (isLike) {
            setIsLike(false)
            console.log("userdiskike")
            dispatch(homeAction.deleteFavoriteCaterer(catererId)).then((res) => {
                console.log(res)
            })
                .catch((err) => {
                    Alert.alert(err)
                })
        } else {
            try {
                console.log("userlike")
                dispatch(homeAction.addFavoriteCaterer(catererId)).then((res) => {
                    setIsLike(true)
                    console.log("like")
                })
                    .catch((err) => {
                        Alert.alert(err)
                    })
            } catch (error) {
                console.log(error)
            }
        }
    }
    console.log("homescreen log===>", catererData)

    const handleFilter = () => {
        refRBSheet.current.open();
    }

    const handleCloseFilter = () => {
        refRBSheet.current.close();
    }

    if (error) {
        return <View style={styles.errorView}>
            <Text>Somehting went worng!</Text>
        </View>
    }

    return (
        <View style={styles.mainScreen}>
            <ScrollView>
                <CarouselView />
                <View style={styles.filterContainer}>
                    <Text style={styles.filtertext}>Near by Caterer</Text>
                    <MaterialCommunityIcons name='filter-outline' size={28} onPress={handleFilter} />
                </View>
                {/* <FilterBottomSheet
                        refRBSheet={refRBSheet}
                    >
                        <View>
                            <RadioButton.Group>
                        
                            </RadioButton.Group>
                           
                       </View>
               </FilterBottomSheet> */}
               <View>
                <FlatList
                    refreshing={isRefreshing}
                    keyExtractor={(item) => item.id.toString()}
                    data={catererData}
                    renderItem={(item) => {
                        return <View style={styles.cardview} key={item.item.id}>
                            <CatererCard
                                imageUri={item.item.image}
                                title={item.item.name}
                                address={item.item.address}
                                price={`$${item.item.cost_per_plat}/Per Dish`}
                                RatingValue={item.item.rating}
                                likeIcon={isLike ? 'heart' : 'cards-heart-outline'}
                                handleLike={() => handleCatererLike(item.item.id)}
                                enableRating={true}
                                isCurved={true}
                                enablePrice={true}
                                handleCardPress={() => { handleCardPress(item.item.id) }}
                            />
                        </View>
                    }}
                />
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({

    mainScreen: {
        flex: 1
    },
    cardview: {
        marginHorizontal: wp(3),
        marginVertical:hp(1)
    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: hp(1),
        marginHorizontal: wp(5),
    },
    cardText: {
        color: colors.lighttextcolor
    },
    errorView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: wp(4),
    },
    filtertext: {
        fontWeight: 'bold',
        fontSize: wp(4.5)
    }
})
export default CatererData
