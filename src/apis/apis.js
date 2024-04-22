import AsyncStorage from "@react-native-async-storage/async-storage";
import { HOST } from "./host";

const userToken =await AsyncStorage.getItem('userToken')
console.log(userToken)
export const API={
    GETPROFILEDATA:HOST.CERVHOST+'/api/v1/profile/get-profile-data'
}

export const HEADER={
    TOKENHEADER:`x-access-token:${userToken}`
}