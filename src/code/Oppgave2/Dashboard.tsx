import React from "react";
import PieChart from "../../ignore/PieChart";
import { H1, InfoCard, NumberFormat } from "@dnb/eufemia";
import BarChart from "../../ignore/BarChart";
import "../../ignore/styles.css";
import { account_medium, card_in_medium } from "@dnb/eufemia/icons";
import colorPicker from "../../ignore/Colors";
import {
  getAllTransactions,
  countCrossBorderTransactions,
  countTargetCountries,
  sumTransactions,
} from "../../ignore/codeDump";

const barChartData = {
  labels: ["Norge", "Sverige", "Danmark", "USA", "Spania", "Italia"],
  datasets: [
    {
      label: "?????",
      data: [
        countTargetCountries("Norge"),
        countTargetCountries("Sverige"),
        countTargetCountries("Danmark"),
        countTargetCountries("USA"),
        countTargetCountries("Spania"),
        countTargetCountries("Italia"),
      ],
      backgroundColor: colorPicker.SuccessGreen,
    },
  ],
};

const pieChartData = {
  labels: ["Innenlands", "Utenlands"],
  datasets: [
    {
      label: "Antall",
      data: countCrossBorderTransactions(),

      backgroundColor: [
        colorPicker.Indigo,
        colorPicker.Violet,
        colorPicker.SeaGreen,
        colorPicker.SuccessGreen,
        colorPicker.SummerGreen,
        colorPicker.MintGreen,
      ],

      hoverColor: [
        colorPicker.Indigo,
        colorPicker.Violet,
        colorPicker.SeaGreen,
        colorPicker.SuccessGreen,
        colorPicker.SummerGreen,
        colorPicker.MintGreen,
      ],
    },
  ],
};

export default function Dashboard() {
  return (
    <div className="DashboardTab">
      <H1 style={{ fontSize: "small" }} top="x-small">
        Dashboard
      </H1>
      <div className="chart-container">
        <div>
          <PieChart
            title={"Innenlands vs. utenlands transaksjoner"}
            data={pieChartData}
          />
        </div>

        <div>
          <BarChart
            title={"Antall transaksjoner til ulike land"}
            data={barChartData}
          />
        </div>
      </div>

      <div className="DashboardBottom">
        <InfoCard
          title="Antall transaksjoner totalt"
          text={getAllTransactions().length}
          icon={card_in_medium}
          space="x-small"
        />
        <InfoCard
          title="Penger overført totalt"
          text={sumTransactions()}
          icon={account_medium}
          space="x-small"
        />
      </div>
    </div>
  );
}
