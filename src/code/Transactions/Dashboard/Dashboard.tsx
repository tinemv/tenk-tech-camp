import React from "react";
import PieChart from "./PieChart";
import { H1, H2, InfoCard } from "@dnb/eufemia";
import BarChart from "./BarChart";
import "../../../ignore/styles.css";
import { card_in, card_in_medium, hand_money, hand_money_medium, profile, profile_medium } from "@dnb/eufemia/icons";


export default function Dashboard() {
    

    return (
        <div className="DashboardTab">
            <H1 space={{ top: "small" }}>Stats</H1>
            <div className="DashboardTop">
                <div style={{ flex: 1, minWidth: "300px", padding: "1rem"}}>
                    <PieChart title={"Kake"}/>
                </div>
                <div style={{ flex: 1, minWidth: "300px", padding: "1rem"}}>
                    <BarChart title={"Søyle"} />
                </div>
            </div>
            <div className="DashboardBottom">
                <InfoCard 
                    title="Antall kunder"
                    text="4"
                    icon={profile_medium}                    
                />
                <InfoCard 
                    title="Antall transaksjoner"
                    text="100"
                    icon={card_in_medium}
                />
                <InfoCard 
                    title="Penger i omløp"
                    text="19 milliarder"
                    icon={hand_money_medium}
                />
            </div>
            
        </div>
    )
}


