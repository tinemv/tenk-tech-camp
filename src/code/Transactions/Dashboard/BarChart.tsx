import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";

export default function BarChart() {
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
      );
}