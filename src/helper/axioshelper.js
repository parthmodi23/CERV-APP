import axios from 'axios';
import { HOST } from '../apis/host';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ApiConstants } from '../apis/apiconstant';

const whiteListedFormDataUrl = [
  ApiConstants.REGISTER,
  ApiConstants.POST_ADMIN_CATEGORIE,
  ApiConstants.EDIT_ADMIN_CATEGORIEL
]
//no need for token in black
const blackListedUrl = [
  ApiConstants.LOGIN,
  ApiConstants.RESEND_OTP,
  ApiConstants.SEND_OTP,
  ApiConstants.VERIFY_OTP,
]
export const apiClient = axios.create({
  baseURL: HOST.CERVHOST,
});

apiClient.interceptors.request.use(async (config) => {
  const userToken = await AsyncStorage.getItem('userToken')

  try {
    if (userToken && !blackListedUrl.includes(config.url)) {
      config.headers = { ...config.headers, 'x-access-token': userToken }
    }
    if (config.method === 'post' && whiteListedFormDataUrl.includes(config.url)) {
      config.headers = { ...config.headers, 'Content-Type': 'multipart/form-data' };
    }
  } catch (error) {
    console.log("axios error", error)
  }
  console.log("config log", config)
  return config
})


