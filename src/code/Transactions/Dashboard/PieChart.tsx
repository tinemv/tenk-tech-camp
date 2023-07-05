import React from 'react';
import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import { P } from '@dnb/eufemia';

export default function PieChart({title}) {
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
        <div style={{
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: "violet"
        }}>
            <P space="x-small">{title}</P>
            <Pie 
            style={{
                maxHeight: "100%", 
                maxWidth: "100%",
            }}
            data={data}
            options={{
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }} 
        />
        </div>
        
    );
  };
  