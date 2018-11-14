import { AsyncStorage } from "react-native"

const getFromStorage = async (keyName) => {
    try {
        const value = await AsyncStorage.getItem(keyName);
        if (value !== null) {
            return JSON.parse(value);
        } else {
            throw JSON.stringify({message: 'NOT FOUND IN STORAGE'});
        }
    } catch (error) {
        throw error;
    }
}

const putInStorage = async (data, keyName) => {
    try {
        await AsyncStorage.setItem(keyName, JSON.stringify(data));
    } catch (error) {
        throw JSON.stringify(error);
    }
}

const deleteFromStorage = async (keyName) => {
    try {
        await AsyncStorage.removeItem(keyName);
    } catch (error) {
        throw JSON.stringify(error);
    }
}

export { getFromStorage, putInStorage, deleteFromStorage }