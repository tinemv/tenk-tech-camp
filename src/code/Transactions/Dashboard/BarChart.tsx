import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { P } from "@dnb/eufemia";

export default function BarChart({title}) {
    const data = {
        labels: ['21', '22', '23', '24', '25', '26'],
        datasets: [
          {
            label: 'Sales',
            data: [100, 200, 150, 300, 250, 180],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
          },
        ],
      };
      return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "pink"
        }}>
            <P space="x-small">{title}</P>
            <Bar 
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
}