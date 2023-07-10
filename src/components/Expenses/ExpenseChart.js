import Chart from "../Chart/Chart";

const ExpenseChart =(props)=>{
    const chartdataPoints=[
        {label:'Jan', value:0},
        {label:'Feb', value:0},
        {label:'Mar', value:0},
        {label:'Apr', value:0},
        {label:'May', value:0},
        {label:'Jun', value:0},
        {label:'Jul', value:0},
        {label:'Aug', value:0},
        {label:'Sep', value:0},
        {label:'Oct', value:0},
        {label:'NOv', value:0},
        {label:'Dec', value:0}
    ]
    for(const expense of props.fExpenses){
        const expenseaMonth = expense.date.getMonth();
        chartdataPoints[expenseaMonth].value +=expense.amount 
    }
    return <Chart datapoints={chartdataPoints}/>
}

export default ExpenseChart;