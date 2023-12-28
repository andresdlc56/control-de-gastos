import { useTransactionStore } from "../../hooks";


export const TransactionItem = ({ transaction = {} }) => {

    //Hooks Store
    const { startDeleteTransaction } = useTransactionStore();


    //Manejador del boton para eliminar transaccion
    const handleDeleteTransaction = ( transactionId ) => {
        startDeleteTransaction( transactionId );
    }


    return (
        <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
            <p className="text-sm">{ transaction.description }</p>

            <div>
                <span>${ transaction.amount }</span>

                <button
                    type="button"
                    onClick={ () => handleDeleteTransaction( transaction.id ) }
                >
                    x
                </button>
            </div>
        </li>
    )
}
