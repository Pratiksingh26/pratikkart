import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./Redux/Products/reducer";
export const store = configureStore({
    reducer : {
        data : dataReducer
    }
})