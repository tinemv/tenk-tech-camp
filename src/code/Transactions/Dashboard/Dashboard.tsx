import React from "react";
import PieChart from "./PieChart";
import { H1, H2 } from "@dnb/eufemia";
import BarChart from "./BarChart";
import "../../../ignore/styles.css";
import StatCard from "./StatCard";


export default function Dashboard() {
    

    return (
        <div className="DashboardTab">
            <H1 space={{ top: "small" }}>Stats</H1>
            <div className="DashboardTop">
                <div style={{ flex: 1, minWidth: "300px"}}>
                    <PieChart />
                </div>
                <div style={{ flex: 1, minWidth: "300px" }}>
                    <BarChart />
                </div>
            </div>
            <div className="DashboardBottom">
                <StatCard title={"Antall kunder"} data={"4"} />
                <StatCard title={"Antall transaksjoner"} data={"100"} />
                <StatCard title={"Penger i omløp"} data={"19 milliarder"} />
            </div>
            
        </div>
    )
}