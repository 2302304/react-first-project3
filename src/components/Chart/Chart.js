import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {

  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  //console.log(dataPointValues);  data välittyy Chart-komponentille oikein(pylväsdiagrammin vian etsintää)
  //console.log(totalMaximum);    ongelman ratkaisu löytyi chartBar.js luokkien nimeämisestä(css tyyleistä)

  
  return (
    <div className='chart'>
    {props.dataPoints.map((dataPoint) => (
      <ChartBar
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMaximum}
        label={dataPoint.label}
      />
    ))}
  </div>
  );
};

export default Chart;
