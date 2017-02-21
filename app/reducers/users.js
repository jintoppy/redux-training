import AppTypes from '../AppTypes';
const initialState = [];

export default function users(state = initialState, payload){
    switch(payload.type){
        case AppTypes.ADD_USER:
            return state.concat([payload.item]);
        break;
        case AppTypes.USER_FETCHED:
            return payload.item;
        break;
    }
    return state;
}

