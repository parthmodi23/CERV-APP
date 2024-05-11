import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { FlatList, View, Text } from 'react-native'
import MyRecipes from '../../../components/atoms/data/recipedata'
import RacipeCard from '../../molecules/customer/racipecard'

const RecipeList = () => {

    const [refreshing, setRefreshing] = useState(false)

    useEffect(()=>{
        setRefreshing(true)
        //apicall
        setRefreshing(false)
    },[])
    return (
        <View style={styles.mainScreen}>
            {console.log(MyRecipes)}
            <FlatList
            refreshing={refreshing}
                data={MyRecipes}
                numColumns={2}
                renderItem={(item) => (
                    <View style={styles.cardView}>
                        <RacipeCard
                            recipeImage={item.item.image}
                            recipeName={item.item.name}
                        />
                    </View>
                )}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
    },
    cardView:{
    }
})

export default RecipeList
