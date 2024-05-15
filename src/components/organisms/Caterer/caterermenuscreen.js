import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import MenuScreen from '../../../components/organisms/Caterer/caterermenuscreen'
import MenuCard from '../../molecules/caterer/caterermenucard'
import Metrics from '../../../assests/Metrics'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import colors from '../../../constants/colors'
import AppModel from '../../atoms/model'
import { useDispatch, useSelector } from 'react-redux'
import * as menuAction from '../../../redux/actions/caterer/menu'
const CatererMenuScreen = (props) => {

  const [isModelVisible, setModelVisible] = useState(false)
  const [isRefreshing, setIsRefresing] = useState(false)
  const [isLoader, setIsLoader] = useState(false)
  const [error, setError] = useState()
  const [deletePrdouctId, setDeleteProductId] = useState(null)
  const [catererCategoriData, setCatererCategoriData] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Menu',
      headerTitleAlign: 'center',
      headerLeft: () => <SimpleLineIcons
        name='question'
        size={23}
        style={{ marginLeft: wp(5) }}
      />
    });
    setIsLoader(true);
    fetchData()
  }, [fetchData]);


  const fetchData=()=>{
    setIsRefresing(true);
  
    dispatch(menuAction.getAdminCategories())
      .then((data) => {
        setError(false);
        console.log("screen log", data);
        setCatererCategoriData(data?.data)
        console.log('success');
      })
      .catch((err) => {
        setError(true);
        console.log(error)
        Alert.alert(err);
      })
      .finally(() => {
        setIsLoader(false)
        setIsRefresing(false); // Set isRefreshing to false after the action completes
      });
  }

  const catererData = useSelector(state => state?.menu)
  console.log("caterer categories data", catererData)
  console.log('caterer error', error)
  const handleDeleteButton = (id) => {
    setDeleteProductId(id)
    setModelVisible(true);
  };
  const handleDeleteProduct = (deletePrdouctId) => {
    dispatch(menuAction.deleteAdminCategorie(deletePrdouctId))
      .then((data) => {
        if (data.success) {
          Alert.alert('Product Category deleted Successfully!')
        }
      })
      .catch((error) => {
        setError(error)
        console.log(error)
      })
  }
  const handleConfirmDelete = () => {
    handleDeleteProduct(deletePrdouctId)
    console.warn('Product is deleted successfully');
    setModelVisible(false);
  };

  const handleCancelDelete = () => {
    setModelVisible(false);
  };

  const navigation = useNavigation()

  const catererRacepiData = [
    { id: 1, title: 'pizza', }, { id: 2, title: 'sizwan', }, { id: 3, title: 'paneer' }
  ]


  const handleOnPress = (id) => {
    navigation.navigate('subcategory', {
      id: id
    })
  }

  const handleAddCategory = () => {
    navigation.navigate('editcategory')
  }

  const editCategory = (id,name,image) => {
    navigation.navigate('editcategory', {
      id: id,
      name:name,
      image:image
    })
  }

  if (isRefreshing) {
    return (<View style={styles.indicator}>
      <ActivityIndicator size="large" color='black' />
    </View>)
  }

  if (catererCategoriData?.length === 0 || null) {
    return (<View style={styles.indicator}>
      <Text>Please add some Categories!</Text>
    </View>)
  }
  return (
    <View style={styles.mainScreen}>
      <FlatList
        data={catererCategoriData || catererRacepiData}
        onRefresh={fetchData}
        refreshing={isLoader}
        keyExtractor={(item) => { item.id }}
        renderItem={({ item }) => {
          return <View style={styles.MenuCardContainer}>
            <MenuCard
              title={item.name}
              iconvisible={true}
              circleborder={true}
              imageUri={item.image}
              onPress={() => handleOnPress(item.id)}
              onPressCancel={() => handleDeleteButton(item.id)}
              onPressPass={() => editCategory(item.id,item.name,item.image)}
            />
          </View>
        }}
      />
      <AppModel
        visible={isModelVisible}
        message={`Are you sure you want to delete the product?`}
        buttonText1={'Cancel'}
        buttonText2={'Yes'}
        onPress1={() => handleCancelDelete()}
        onPress2={() => handleConfirmDelete()}
      />
      <View style={styles.plusContainer}>
        <MaterialCommunityIcons onPress={handleAddCategory} style={styles.plusIcon} name='plus' size={30} color={colors.white} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainScreen: {
    // flex: 1,
    padding: Metrics.CountScale(5),
  },
  MenuCardContainer: {
    marginHorizontal: Metrics.CountScale(10),
    marginVertical: Metrics.CountScale(10),
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  plusContainer: {
    // justifyContent: 'flex-end',
    position:'absolute',
    margin:Metrics.CountScale(10),
    bottom:0,
    right:0

  },
  plusIcon: {
    backgroundColor: colors.CERVmaincolor,
    padding: Metrics.CountScale(10),
    borderRadius: Metrics.CountScale(30),
  }
})

export default CatererMenuScreen
