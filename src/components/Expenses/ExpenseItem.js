import './ExpenseItem.css'
import ExpenseDate from "../Expenses/expenseDate";
import Card from "../UI/Card";
import {useState} from "react";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.expenseData.title)

    const clickHandler = () => {
        setTitle('updated!')
        console.log(title)
    }

    return (
        <Card className="expense-item">
            <div className="expense-item__date"><ExpenseDate date={props.expenseData.date}></ExpenseDate></div>
            <div className="expense-item__description">
                <h2>{props.expenseData.title}</h2>
                <div className="expense-item__price">{props.expenseData.price}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem
