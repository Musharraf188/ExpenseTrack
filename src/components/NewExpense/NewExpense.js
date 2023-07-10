import { useState } from 'react';
import ExpenseForm from '../Expenses/ExpenseForm';
import './NewExpense.css';

const NewExpense =(props)=>{
    const [isValid , setIsValid] = useState('');
    const userInput =(userInput)=>{
        const expenseData={
        ...userInput
        }
props.OnAdd(expenseData)
    }
    return <div className='new-expense'>
       {!isValid && <button type='button'>Add New Expenses</button>}
       {isValid && <ExpenseForm onSaveData={userInput}/>}
    </div>
}

export default NewExpense;