import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View, Text, Pressable, ActivityIndicator } from 'react-native'
import SubCategoryCard from '../../molecules/caterer/subcategorycard'
import Metrics from '../../../assests/Metrics'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../../../constants/colors'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import * as menuAction from '../../../redux/actions/caterer/menu'
const SubCategory = () => {
    const [error, setError] = useState()
    const [isRefresing, setIsRefresing] = useState(true)
    const [subCategorydata,setSubCategoryData]=useState(null)
    const navigation = useNavigation()
    const route = useRoute()
    const productId = route?.params?.id
    const disptach = useDispatch()
    console.log(productId)
    useEffect(() => {
        disptach(menuAction.getSubAdminCategories(productId))
            .then((data) => {
                setSubCategoryData(data?.data)
                console.log("dispatch response",data)
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setIsRefresing(false)
            })
    },[])
    const catererSubCategoryData = useSelector(state => state?.menu)
    console.log(catererSubCategoryData)
    const myData = [
        {
            id: '1',
            title: 'Noodels'
        },
        {
            id: '2',
            title: 'Non-veg Noodles'
        },
        {
            id: '3',
            title: 'Chinese Noodels'
        },
        {
            id: '4',
            title: 'BBQ Noodels'
        }
    ]

    const handleAddSubCategory = () => {
        navigation.navigate('editcategory')
    }

    if (isRefresing) {
        return (<View style={styles.indicator}>
            <ActivityIndicator
                size={'large'}
                color={colors.black}
            />
        </View>)
    }
    if(subCategorydata?.length===0||null){
        return(<View style={styles.indicator}>
            <Text>Please add some subcategories!</Text>
        </View>)
    }
    return (
        <View style={styles.mainScreen}>
            <FlatList
                data={subCategorydata}
                keyExtractor={(item) => { item.id }}
                renderItem={({ item }) => {
                    return <View style={styles.cardContainer}>
                        <SubCategoryCard
                            title={item.name}
                            iconvisible={true}
                            onPress={{}}
                        />
                    </View>
                }}
            />
            <Pressable style={styles.plusContainer} onPress={handleAddSubCategory}>
                <MaterialCommunityIcons style={styles.plusIcon} name='plus' size={30} color={colors.white} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        paddingHorizontal: Metrics.CountScale(5)
    },
    cardContainer: {
        margin: Metrics.CountScale(10)
    },
    plusContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        margin: Metrics.CountScale(25),

    },
    plusIcon: {
        backgroundColor: colors.CERVmaincolor,
        padding: Metrics.CountScale(15),
        borderRadius: Metrics.CountScale(30),
    },
    indicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SubCategory
