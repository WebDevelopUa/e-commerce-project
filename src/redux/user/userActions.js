import {SET_CURRENT_USER} from "./userTypes";

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user
})