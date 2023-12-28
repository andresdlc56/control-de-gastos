import { useState } from "react";

//Hooks Store
import { useTransactionStore } from "../../hooks";


export const TransactionForm = () => {

    //Local State para el manejo de los inputs
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);


    //Hooks Store
    const { startAddTransaction } = useTransactionStore();

    
    //Manejador del envio del formulario
    const onSubmit = (e) => {
        e.preventDefault();
        
        const transaction = {
            id: window.crypto.randomUUID(),
            description,
            amount
        }

        //Agregar Transaccion
        startAddTransaction( transaction );
        
        //Reseteando el formulario
        setAmount(0);
        setDescription("");
    }

    return (
        <div>
            <form onSubmit={ onSubmit }>
                <input 
                    type="text" 
                    placeholder="Enter a description" 
                    onChange={ (e) => setDescription( e.target.value ) }
                    className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
                    value={ description }
                />

                <input 
                    type="number" 
                    step="0.01"
                    placeholder="00.00" 
                    onChange={ (e) => setAmount( e.target.value ) }
                    className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
                    value={ amount }
                />

                <button
                    className="bg-indigo-700 text-white px-3 py-2 rounded-lg block w-full"
                >
                    Add Transaccion
                </button>
            </form>
        </div>
    )
}
