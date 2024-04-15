import { launchCameraAsync, useCameraPermissions } from 'expo-image-picker'
import React, { useState } from 'react'
import { View, TouchableOpacity, Text, Alert, Image, StyleSheet } from 'react-native'
import colors from '../../constants/colors'
import {useDispatch,useSelector} from 'react-redux'
import * as authAction from '../../redux/actions/auth'
const Camera = ({screen,imageoutercontainer,forimage,button,showButton,myimageurl}) => {
    const [imageuri, setImageuri] = useState()
    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();
    const  dispatch=useDispatch()
    const verifyPermission = async () => {
        if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const PermissionResponse = await requestPermission();
            return PermissionResponse.granted;
        }

        if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert("Missing Permission", "Please grant Camera Permission");
            return false
        }
        return true;
    }
    const takePhoto = async () => {
        //take permission is not working
        // const hasPermission = await verifyPermission();
        const hasPermission = true

        if (!hasPermission) {
            return;
        }

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 4],
            quality: 0.5
        });
        
        const imagepath=image.assets[0].uri
        setImageuri(imagepath)
        dispatch(authAction.storeprofilepicturepath(imagepath))
    }

    return (
        <View style={[styles.mainscreen,screen]}>
            { console.log("image props url",myimageurl)}
            <View style={[styles.imagecontainer,imageoutercontainer]}>
                {imageuri || myimageurl ? <Image source={{ uri: imageuri||myimageurl }} style={[styles.image,forimage]} /> : <Image style={[styles.image,forimage]} source={require('../../assests/images/defaultuser.png')} />}
            </View>
           {showButton && <TouchableOpacity style={[styles.addbutton,button]} onPress={takePhoto}>
                <Text style={styles.plusbutton}>+</Text>
            </TouchableOpacity>}
            <View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imagecontainer: {
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 50,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    addbutton: {
        position: 'absolute',
        backgroundColor: '#ffffff',
        borderRadius: 50,
        bottom: 0,
        right: 0,
        borderColor: colors.CERVmaincolor,
        borderWidth: 1
    },
    plusbutton: {
        fontSize: 20,
        color: colors.CERVmaincolor,
        paddingHorizontal: 8,
        fontWeight: 'bold'
    },

})

export default Camera
