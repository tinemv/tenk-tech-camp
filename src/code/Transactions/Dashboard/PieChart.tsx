import React from 'react';
import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

export default function PieChart() {
    const data = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };
  
    return (
        <Pie style={{
            maxHeight: "10rem", 
            width: "10rem"}}
            data={data}
            options={{
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }} 
        />
    );
  };
  