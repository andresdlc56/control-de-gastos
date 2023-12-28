
import { Provider } from 'react-redux';

import { store } from './store';

//Components
import { Balance, TransactionForm, TransactionList, IncomeExpenses, ExpenseChart } from './components';



const App = () => {
    return (
        <Provider store={ store }>
            <div
                className='bg-zinc-900 text-white h-screen flex justify-center items-center'
            >
                <div className='container mx-auto w-3/6'>
                    <div className='bg-zinc-800 p-10 rounded-lg flex gap-x-2'>
                        <div>
                            <h1 className='text-4xl font-bold'>Control de Gastos</h1>
                            <IncomeExpenses />
                            <Balance />
                            <TransactionForm />
                        </div>

                        <div className='flex flex-col flex-1'>
                            <ExpenseChart />
                            <TransactionList />
                        </div>
                    </div>
                </div>
            </div>
        </Provider>
    )
}

export default App