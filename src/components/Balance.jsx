import { useTransactionStore } from "../hooks"

export const Balance = () => {

    //Hook Store
    const { transactions } = useTransactionStore();

    //Extraer los amount de cada transaction
    const amounts = transactions.map((transaction) => parseFloat(transaction.amount) );

    //Totalizar los valores de amounts
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className="flex justify-between">
            <h3>Tu Balance</h3>
            <h1 className="text-2xl font-bold">${ total }</h1>
        </div>
    )
}
