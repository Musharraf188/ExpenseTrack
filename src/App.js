import React from "react";
import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

const App = () => {
  const expenses=[
  {
    id:'e1',
    title:'Car Insurance',
    amount:'235.87',
    date: new Date(13, 6, 2023)
  },
  {
    id:'e2',
    title:'SmartPhone Expense',
    amount:'499.99',
    date: new Date(1, 2, 2022)
  },
  {
    id:'e3',
    title:'Home Expense',
    amount:'983.87',
    date: new Date(3, 9, 2021)
  },
  {
    id:'e4',
    title:'Personal Expense',
    amount:'320.65',
    date: new Date(12, 4, 2020)
  },
  {
    id:'e5',
    title:'Invesment',
    amount:'235.87',
    date: new Date(9, 6, 2023)
  },
  {
    id:'e6',
    title:'Bike Insurance',
    amount:'143.87',
    date: new Date(13, 5, 2022)
  },
  ]
  return <div>
<Expenses items={expenses}/>

  </div>
}

export default App;
