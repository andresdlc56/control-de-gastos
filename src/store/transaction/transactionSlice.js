import { createSlice } from '@reduxjs/toolkit';

//Obtener desde el localStorege la "transaction"
//const localData = localStorage.getItem("transactions");
//(localData) ? (JSON.stringify(localData)) : ([])

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState: {
        transactions:  JSON.parse( localStorage.getItem('transactions') ) || []
    },
    reducers: {
        onSetTransactions: (state, { payload }) => {
            state.transactions = payload;
        },

        onAddTrasaction: (state, { payload }) => {
            state.transactions.push( payload );
        },

        onDeleteTransaction: (state, { payload }) => {
            state.transactions = state.transactions.filter( (transaction) => transaction.id !== payload );
        }
    },
});


// Action creators are generated for each case reducer function
export const { onSetTransactions, onAddTrasaction, onDeleteTransaction } = transactionSlice.actions;