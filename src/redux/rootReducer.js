import {combineReducers} from "redux";
import {userReducer} from "./user/userReducer";
import {cartReducer} from "./cart/cartReducer";
import {directoryReducer} from "./directory/directotyReducer";
import {shopReducer} from "./shop/shopReducer";

export default combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})