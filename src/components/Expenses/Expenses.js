import './Expenses.css';

import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';



const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState("2022");
    const userInput = (selectedYear) => {
        setFilterYear(selectedYear)
    }
    const filterExpense = props.items.filter((expense => {
        return expense.date.getFullYear().toString() === filterYear;
    }))
    console.log(filterExpense);
    return <Card className='expenses'>
        <ExpenseFilter onSelect={userInput} />
        <ExpenseChart fExpenses={filterExpense}/>
        <ExpenseList onFilter={filterExpense}/>
        {/* <ExpenseItem id={props.items[0].id} title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
        <ExpenseItem id={props.items[1].id} title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
        <ExpenseItem id={props.items[2].id} title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
        <ExpenseItem id={props.items[3].id} title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} />
        <ExpenseItem id={props.items[4].id} title={props.items[4].title} amount={props.items[4].amount} date={props.items[4].date} />
        <ExpenseItem id={props.items[5].id} title={props.items[5].title} amount={props.items[5].amount} date={props.items[5].date} /> */}
    </Card>

}

export default Expenses;