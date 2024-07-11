import { configureStore } from "@reduxjs/toolkit";
import TopReducer from "./TopSlice";
import CartReducer from './CartSlice';

const Store = configureStore({
    reducer:{
        Topratedcusines : TopReducer,
        Cart :  CartReducer,

    }
})

export default Store;