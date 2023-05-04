import './App.css';

import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import Expenses from "./components/Expenses/expenses";

function App() {
    const expensesData = [
        {
            id: 'e1',
            date: new Date(2023, 0, 10),
            title: 'New book',
            price: 30.99
        },
        {
            id: 'e2',
            date: new Date(2023, 0, 10),
            title: 'New jeans',
            price: 99.99
        },
        {
            id: 'e3',
            date: new Date(2024, 0, 18),
            title: 'New bag',
            price: 198.99
        }
    ]

    const addExpenseHandler = (expense) => {
        console.log('In App.js')
        console.log(expense)
    }

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Expenses expenses={expensesData}></Expenses>
        </div>
    );
}

export default App;