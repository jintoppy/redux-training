import AppTypes from '../AppTypes';

export function userFetched(users){
    return {
                type: AppTypes.USER_FETCHED,
                item: users
            };
}

export function addUser(user){
    return {
                type: AppTypes.ADD_USER,
                item: user
            };
}