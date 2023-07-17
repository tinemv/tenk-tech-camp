import React from "react";
import PieChart from "../../../ignore/PieChart";
import { H1, InfoCard, NumberFormat } from "@dnb/eufemia";
import BarChart from "../../../ignore/BarChart";
import "../../../ignore/styles.css";
import {
  account_medium,
  card_in_medium,
  people_1_medium,
} from "@dnb/eufemia/icons";
import colorPicker from "../../../ignore/Colors";
import { getAllTransactions } from "../../../ignore/codeDump";
import ContentWrapper from "@dnb/eufemia/components/tabs/TabsContentWrapper";

function sumTransactions() {
  var sum = 0;
  getAllTransactions().map((transaction) => {
    sum += transaction.amount;
  });
  return <NumberFormat>{sum}</NumberFormat>;
}

function countCrossBorderTransactions() {
  var innenlandsCounter = 0;
  getAllTransactions().map((transaction) => {
    if (transaction.from.country === transaction.to.country) {
      innenlandsCounter += 1;
    }
  });
  const utenlandsCounter = getAllTransactions().length - innenlandsCounter;
  return [innenlandsCounter, utenlandsCounter];
}

function countTargetCountries(country: String) {
  var counter = 0;
  getAllTransactions().map((transaction) => {
    if (transaction.to.country === country) {
      counter += 1;
    }
  });
  return counter;
}

const barChartData = {
  labels: [
    "Norge",
    "Sverige",
    "Danmark",
    "USA",
    "Spania",
    "Italia",
    "Russland",
  ],
  datasets: [
    {
      label: "Sales",
      data: [
        countTargetCountries("Norge"),
        countTargetCountries("Sverige"),
        countTargetCountries("Danmark"),
        countTargetCountries("USA"),
        countTargetCountries("Spania"),
        countTargetCountries("Italia"),
        countTargetCountries("Russland"),
      ],
      backgroundColor: colorPicker.SuccessGreen,
    },
  ],
};

const pieChartData = {
  labels: ["Innenlands", "Utenlands"], //TODO: Passende labels
  datasets: [
    {
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
      <H1 top="x-small">Dashboard</H1>
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
          title="Antall transaksjoner"
          text={getAllTransactions().length} 
          icon={card_in_medium}
          space="x-small"
        />
        <InfoCard
          title="Penger overført"
          text={sumTransactions()}
          icon={account_medium}
          space="x-small"
        />
      </div>
    </div>
  );
}
