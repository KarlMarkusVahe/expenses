import Card from "../UI/Card";
import ExpenseItem from "../Expenses/ExpenseItem";
import "./expenses.css"

function Expenses(props){
    return (
        <Card className="expenses">
            <div className="expenses">
                <ExpenseItem expensedata={props}></ExpenseItem>
            </div>
        </Card>
    )
}

export default Expenses