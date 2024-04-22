import AsyncStorage from "@react-native-async-storage/async-storage";
import { HOST } from "../../apis/host";

export const SAVECATERERDATA = 'SAVECATERERDATA'


//here sendotp==sendphonennumber
export const savecatererdata = () => {

  try {
    return async (dispatch) => {

      const authToken = await AsyncStorage.getItem('userToken')
      const response = await fetch(
        HOST.CERVHOST+``,
        {
          method: 'GET',
          headers: {
            'x-access-token': authToken,
          },
        }
      );

      const resData = await response.json();
      console.log("resdatalog", resData)
      dispatch(
        {
          type:'SAVEUSERDATA',
          payload: {
            userData: resData.data
          }
        }
      );
      return resData
    }
  }
  catch (error) {
    console.log(error)
    return error
  }
};