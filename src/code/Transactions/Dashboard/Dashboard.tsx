import React from "react";
import PieChart from "./PieChart";
import { H1, H2, InfoCard } from "@dnb/eufemia";
import BarChart from "./BarChart";
import "../../../ignore/styles.css";
import { card_in_medium, hand_money_medium, profile_medium } from "@dnb/eufemia/icons";


const barChartData = {
    labels: ['21', '22', '23', '24', '25', '26'],
    datasets: [
        {
        label: 'Sales',
        data: [100, 200, 150, 300, 250, 180],
        backgroundColor: '#5DADE2', 
        },
    ],    
}

const pieChartData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
        {
        data: [300, 50, 100, 75],
        backgroundColor: ['#5DADE2', "#27AE60", '#7DCEA0', '#C39BD3'],
        hoverBackgroundColor: ['#5DADE2',"#27AE60", '#7DCEA0','#C39BD3',],
        },
    ],    
}


export default function Dashboard() {
    return (
        <div className="DashboardTab">
            <H1 space={{ top: "x-small" }}>Dashboard</H1>
            <div className="chart-container">
                <div>
                    <PieChart title={"Land"} data={pieChartData}/>
                </div>

                <div>
                    <BarChart title={"Transaksjoner per dag"} data={barChartData} />
                </div>
            </div>

            <div className="DashboardBottom">
                <InfoCard 
                    title="Antall kunder"
                    text="4"
                    icon={profile_medium}
                    space="x-small"                    
                />
                <InfoCard 
                    title="Antall transaksjoner"
                    text="100"
                    icon={card_in_medium}
                    space="x-small"
                />
                <InfoCard 
                    title="Penger i omløp"
                    text="19 milliarder"
                    icon={hand_money_medium}
                    space="x-small"
                />
            </div>
            
        </div>
    )
}


