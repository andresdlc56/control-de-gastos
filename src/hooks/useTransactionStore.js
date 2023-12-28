import { useDispatch, useSelector } from "react-redux"

//Store
import { onAddTrasaction, onDeleteTransaction, onSetTransactions } from "../store";


export const useTransactionStore = () => {

    const dispatch = useDispatch();
    const { transactions } = useSelector((state) => state.transac);

    //Metodo para empezar la carga de las transacciones desde el localStorage
    const startLoadTrasactions = () => {
        const localData = localStorage.getItem("transactions");
        console.log( localData );

        if( localData ) {
            dispatch( onSetTransactions( JSON.stringify( localData ) ) );
            return;
        }

        return;
    }


    //Metodo para agregar una transaccion
    const startAddTransaction = ( transaction ) => {
        dispatch( onAddTrasaction( transaction ) );

        const localData = JSON.parse( localStorage.getItem("transactions") );

        if( !localData ) {
            const listTransactions = [];
            listTransactions.push( transaction );

            localStorage.setItem("transactions", JSON.stringify( listTransactions ));
            return;
        }

        localData.push( transaction );

        localStorage.setItem("transactions", JSON.stringify( localData ));
    }

    //Metodo para eliminar una transaccion
    const startDeleteTransaction = ( trasactionId ) => {
        dispatch( onDeleteTransaction( trasactionId ) ); 

        const transactions = JSON.parse( localStorage.getItem("transactions") );
        const transactionsList = transactions.filter((transaction) => transaction.id !== trasactionId);

        localStorage.setItem( "transactions", JSON.stringify( transactionsList ) );
    }

    return {
        //Methods
        startLoadTrasactions,
        startAddTransaction,
        startDeleteTransaction,

        //Props
        transactions,
    }
}