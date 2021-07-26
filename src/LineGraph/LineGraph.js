import React , {useState, useEffect}  from 'react'
import {Line} from "react-chartjs-2";
import './LineGraph.css';
import { Typography } from '@material-ui/core';
import {getMonthName} from '../util.js';

const buildChartData = ((data,caseType)=>{
    const dataPoints = [];
    const xDatapoints =[];
    const new_data = data.cases_time_series;

    for(let point in data.cases_time_series){
        if(caseType == "confirm")
          dataPoints.push(new_data[point].dailyconfirmed);
        else if(caseType == "recover")
          dataPoints.push(new_data[point].dailyrecovered);
        else if(caseType == "death")
          dataPoints.push(new_data[point].dailydeceased);
        xDatapoints.push(new_data[point].date);
    }
    return dataPoints;
});


const XAxisData = ((data)=>{
  const xDatapoints =[];
  const new_data = data.cases_time_series;

  for(let point in data.cases_time_series){
      const new_date = new Date(new_data[point].dateymd);
      const new_format = getMonthName(new_date.getMonth()).slice(0,3)+' '+new_date.getFullYear();
      xDatapoints.push(new_format);
  }

  // console.log(xDatapoints);
  return xDatapoints;
});

const graphTitle = ((caseType)=>{
    if(caseType == "confirm")
    {
      return (
        <h5 style={{color:"	rgb(0, 153, 204)"}}>Confirmed Cases</h5>
      );
    }
    else if(caseType == "recover")
    {
      return (
        <h5 style={{color:"	rgba(75,192,192)"}}>Recovered Cases</h5>
      );
    }
    else if(caseType == "death"){
      return (
        <h5 style={{color:"	rgb(204, 0, 0)"}}>Deceased Cases</h5>
      );
    }

});


function LineGraph(props) {

    const[data, setData] = useState([]);
    const[xData, setXData] = useState([]);

    const caseType = props.casetype;

    let bgColor , borderColor, label;

    useEffect(() => {
        const fetchData = (async()=>{
            await fetch('https://api.covid19india.org/data.json')
            .then(response => response.json())
            .then(data => {
                let chartData = buildChartData(data,caseType);
                setData(chartData);
                let XAxisPoints = XAxisData(data);
                setXData(XAxisPoints);
            });
        });
    fetchData();
    }, []);

  
    if(caseType == "confirm")
    {
      bgColor = "	rgb(0, 153, 204,0.2)";
      borderColor = "	rgb(0, 153, 204)";
      label = "Confirmed Cases";
    }
    else if(caseType == "recover")
    {
      bgColor = "	rgb(0, 204, 0,0.2)";
      borderColor = "rgba(75,192,192)"; 
      label = "Recovered Cases"; 
    }
    else if(caseType == "death"){
      bgColor = "rgb(204, 0, 0,0.2)";
      borderColor = "	rgb(204, 0, 0)";  
      label = "Deceased Cases";
    }

    const data1 = {
      labels: xData,
      datasets: [
        {
            // label: label,
            data: data,
            fill: true,
            backgroundColor: bgColor,
            borderColor: borderColor,
            pointRadius : 0,
            borderWidth:2,
            tension : 0,
            pointHoverRadius : 5
        },
      ]
    };

    return (
    <div className="line_graph">
      <div className="graph_header">
        {graphTitle(caseType)}
        <Typography style={{color:"gray"}}>India, Total</Typography>
      </div>
      <hr className ="graph_divider"></hr>
      <Line 
      data={data1}
      options={{
        responsive : true,
        plugins : {
          legend :{
            display : false
          }
        },
        scales: {
          x : {
            ticks :{
              maxTicksLimit : 10
            },
            grid :{
              display : false
            },
          },
          y :{
            grid :{
              display :false 
            }
          }
        }
      }}
      />
    </div>
    )
}

export default LineGraph
