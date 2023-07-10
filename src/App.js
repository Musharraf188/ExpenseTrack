import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


  const Dummy_Expenses=[
  {
    id:'e1',
    title:'Car Insurance',
    amount:'235.87',
    date: new Date(2023, 11, 12)
  },
  {
    id:'e2',
    title:'SmartPhone Expense',
    amount:'499.99',
    date: new Date(2022,2,3)
  },
  {
    id:'e3',
    title:'Home Expense',
    amount:'983.87',
    date: new Date(2021,6,17)
  },
  {
    id:'e4',
    title:'Personal Expense',
    amount:'320.65',
    date: new Date(2020, 12,24)
  },
  {
    id:'e5',
    title:'Invesment',
    amount:'235.87',
    date: new Date(2023,3,7)
  },
  {
    id:'e6',
    title:'Bike Insurance',
    amount:'143.87',
    date: new Date(2022,9,15)
  },
  ]
  const App =()=>{
    const [expense, setExpense] = useState(Dummy_Expenses);
  const addExpensehandler =(userInput)=>{
setExpense((prevValue)=>{
  return [userInput, ...prevValue]
})
  }
  return <div>
    <NewExpense OnAdd={addExpensehandler}/>
 <Expenses items={expense}/>

  </div>
}


export default App;
