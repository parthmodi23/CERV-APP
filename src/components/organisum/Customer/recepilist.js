import React from 'react'
import { StyleSheet } from 'react-native'
import { FlatList, View, Text } from 'react-native'
import MyRecepies from '../../../data/recepidata'
import RacipeCard from '../../molecules/customer/racipecard'

const RecepiList = () => {
    return (
        <View style={styles.mainScreen}>
            {console.log(MyRecepies)}
            <FlatList
                data={MyRecepies}
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

export default RecepiList
