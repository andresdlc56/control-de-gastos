
//Hooks Store
import { useTransactionStore } from "../../hooks";

//Components
import { TransactionItem } from "../";


export const TransactionList = () => {
        
    //Hooks Store
    const { transactions } = useTransactionStore();

    
    return (
        <>
            <h3 className="text-slate-300 text-xl font-bold block w-full">Historial</h3>

            <ul>
                {
                    transactions.map((transaction) => (
                        <TransactionItem key={ transaction.id } transaction={ transaction } />
                    ))
                }    
            </ul>
        </>
    )
}
