import { useState } from 'react';
import ExpenseForm from '../Expenses/ExpenseForm';
import './NewExpense.css';

const NewExpense =(props)=>{
    const [isValid , setIsValid] = useState(false);
    const userInput =(userInput)=>{
        const expenseData={
        ...userInput
        }
props.OnAdd(expenseData)
    }
    const onClickHandler=()=>{
        setIsValid(true);
    }
    const cancelHandler =()=>{
        setIsValid(false);
    }
    return <div className='new-expense'>
       {!isValid && <button type='button' onClick={onClickHandler}>Add New Expenses</button>}
       {isValid && <ExpenseForm onCancel={cancelHandler} onSaveData={userInput}/>}
    </div>
}

export default NewExpense;