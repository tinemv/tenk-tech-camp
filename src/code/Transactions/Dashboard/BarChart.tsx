import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { P } from "@dnb/eufemia";
import { plugins } from "chart.js/auto";

export default function BarChart({title, data}) {
      const options = {
        MaintainAspectRatio: false,
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
      }

      return (
        <div style={{ marginLeft:"2.5rem" }}>
            <P space="x-small" style={{ textAlign: "center" }}>{title}</P>
            <div>
                <Bar data={data} options={options} height={250} width={250} style={{ marginTop:"1rem" }}/>
            </div> 
        </div>
        
      );
}