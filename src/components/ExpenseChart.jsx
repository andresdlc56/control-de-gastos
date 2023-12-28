
import { VictoryPie, VictoryLabel } from 'victory';

//Hooks Store
import { useTransactionStore } from '../hooks';


export const ExpenseChart = () => {

    //Hooks Store
    const { transactions } = useTransactionStore();

    
    //Haciendo un barrido en el array de transacciones
    //Filtrar todos las transacciones positivas
    //Acomular la sumatoria de todas las transacciones
    const totalIngresos = transactions.filter((transaction) => transaction.amount > 0)
        .reduce((acc, transaction) => (acc += parseFloat( transaction.amount )), 0);

    //Haciendo un barrido en el array de transacciones
    //Filtrar todos las transacciones negativos
    //Acomular la sumatoria de todas las transacciones
    const totalGastos = transactions.filter((transaction) => transaction.amount < 0)
        .reduce((acc, transaction) => (acc += parseFloat( transaction.amount )), 0) * -1;


    const totalGastosPercentage = Math.round((totalGastos / totalIngresos) * 100);
    //console.log( totalGastosPercentage );

    const totalIngresosPercentage = 100 - totalGastosPercentage;
    //console.log( totalIngresosPercentage );

    if( transactions.length === 0 ) {
        return (
            <h2>No hay Transacciones</h2>
        )
    }
    
    return (
        <VictoryPie 
            colorScale={["#e74c3c", "#2ecc71"]}
            data={[
                { x: "Gastos", y: totalGastosPercentage },
                { x: "Ingresos", y: totalIngresosPercentage }
            ]}
            animate={{
                duration: 200
            }}
            labels={ ({ datum }) => `${ datum.y }%` }
            labelComponent={<VictoryLabel 
                angle={45}
                style={{
                    fill: "white"
                }}
            />}
        />
    )
}
