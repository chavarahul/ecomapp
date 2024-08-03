// utils/authUtils.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const checkExistingUser = async () => {
  try {
    const id = await AsyncStorage.getItem('id');
    if (id) {
      const currentUserData = await AsyncStorage.getItem(`user${JSON.parse(id)}`);
      if (currentUserData) {
        return JSON.parse(currentUserData);
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.log('Async Storage Error', error);
    return null;
  }
};
