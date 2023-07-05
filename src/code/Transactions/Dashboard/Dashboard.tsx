import React from "react";
import PieChart from "../../../ignore/PieChart";
import { H1, InfoCard } from "@dnb/eufemia";
import BarChart from "../../../ignore/BarChart";
import "../../../ignore/styles.css";
import { account_medium, card_in_medium, people_1_medium } from "@dnb/eufemia/icons";
import colorPicker from "../../../ignore/Colors";

const barChartData = {
    labels: ['21', '22', '23', '24', '25', '26'], //TODO: Passende labels
    datasets: [
        {
        label: 'Sales',
        data: [100, 200, 150, 300, 250, 180],  //TODO: Hent data fra database / datasett
        backgroundColor: colorPicker.SuccessGreen, 
        },
    ],    
}

const pieChartData = {
    labels: ['Red', 'Blue', 'Yellow'], //TODO: Passende labels
    datasets: [
        {
        data: [300, 200, 150, 75, 50, 10], //TODO: Hent data fra database / datasett
        
        backgroundColor: [colorPicker.Indigo, colorPicker.Violet, colorPicker.SeaGreen, colorPicker.SuccessGreen, colorPicker.SummerGreen, colorPicker.MintGreen],

        hoverColor: [colorPicker.Indigo, colorPicker.Violet, colorPicker.SeaGreen, colorPicker.SuccessGreen, colorPicker.SummerGreen, colorPicker.MintGreen]
        },
    ],    
}


export default function Dashboard() {
    return (
        <div className="DashboardTab">
            <H1 top= "x-small">Dashboard</H1>
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
                    text="4" // TODO: Hent fra database / datasett
                    icon={people_1_medium}
                    space="x-small"                    
                />
                <InfoCard 
                    title="Antall transaksjoner"
                    text="100" // TODO: Hent fra database / datasett
                    icon={card_in_medium}
                    space="x-small"
                />
                <InfoCard 
                    title="Penger i omløp"
                    text="19 milliarder" // TODO: Hent fra database / datasett
                    icon={account_medium}
                    space="x-small"
                />
            </div>
        </div>
    )
}


