import './Chart.css';
import CharBar from './ChartBar';

const Chart =(props)=>{
    const totalMaxValue = 
    return <div className='chart'>
        {props.dataPoints.map(datapoint=><CharBar 
        key={datapoint.label} 
        value={datapoint.value}
        maxValue={totalMaxValue}
        />)}
    </div>
}

export default Chart;