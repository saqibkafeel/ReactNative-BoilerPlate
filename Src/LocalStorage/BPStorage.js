import AsyncStorage from '@react-native-async-storage/async-storage';

setAccessToken = async token => {
  try {
    await AsyncStorage.setItem('BPAccessToken', token);
  } catch (error) {
    console.log(error);
  }
};
getAccessToken = async () => {
  try {
    // console.log( 'get A Token' ,  await AsyncStorage.getItem('SLAccessToken'));
    return await AsyncStorage.getItem('BPAccessToken');
  } catch (error) {
    console.log(error);
  }
};
export const BPStorage = {
  setAccessToken,
  getAccessToken,
};
