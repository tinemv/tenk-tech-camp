import React from 'react';
import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import { P } from '@dnb/eufemia';

export default function PieChart({title, data}) {

    const options = {
        maintainApectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        }
    }
  
    return (
        <div style={{ marginRight:"2.5rem", marginBottom:"1rem"}}>
            <P space="x-small" style={{ textAlign: "center" }}>{title}</P>
            <Pie data={data} options={options} height={250} width={250} style={{ marginTop:"1rem" }} />
        </div>    
    );
  };
  