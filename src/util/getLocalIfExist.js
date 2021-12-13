export const getLocalIfExist = (localStorageItem, defaultValue) => {
    if (localStorage.getItem(localStorageItem)) return localStorage.getItem(localStorageItem)
    else return defaultValue
}

export const getLocalIfExistArray = (localStorageItem, defaultValue) => {
    if (localStorage.getItem(localStorageItem)) return JSON.parse(localStorage.getItem(localStorageItem))
    else return defaultValue
}