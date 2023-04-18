import logo from './logo.svg';
import './App.css';

import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
    const expenses = [
        {
            date: new Date(2023, 0, 10),
            title: 'New book',
            price: 30.99
        },
        {
            date: new Date(2023, 0, 10),
            title: 'New jeans',
            price: 99.99
        }
    ]

    const addExpenseHandler = (expense) => {
        console.log('In App.js')
        console.log(expense)
    }

  return (
    <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <ExpenseItem expenseData={expenses[0]}></ExpenseItem>
        <ExpenseItem expenseData={expenses[1]}></ExpenseItem>
    </div>
  );
}

export default App;
