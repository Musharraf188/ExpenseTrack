import './Chart.css';
import CharBar from './ChartBar';

const Chart =(props)=>{
    const point= props.datapoints.map(datapoint=>datapoint.value)
    const totalMaxValue = Math.max(...point);
    return <div className='chart'>
        {props.datapoints.map(datapoint=><CharBar 
        key={datapoint.label} 
        value={datapoint.value}
        maxValue={totalMaxValue}
        />)}
    </div>
}

export default Chart;