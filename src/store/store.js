import { configureStore } from "@reduxjs/toolkit";


import { transactionSlice } from "./transaction/transactionSlice";


export const store = configureStore({
    reducer: {
        transac: transactionSlice.reducer,
    }
});