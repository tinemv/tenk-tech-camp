import React from "react";
import PieChart from "../../ignore/PieChart";
import { H1, InfoCard } from "@dnb/eufemia";
import BarChart from "../../ignore/BarChart";
import "../../ignore/styles.css";
import { account_medium, card_in_medium } from "@dnb/eufemia/icons";
import colorPicker from "../../ignore/Colors";
import {
  getAllTransactions,
  countCrossBorderTransactions,
  sumTransactions,
  countTargetCompanies,
} from "../../ignore/codeDump";
import Provider from "@dnb/eufemia/shared/Provider";

export default function Dashboard() {
  return (
    <Provider locale="nb-NO" NumberFormat={{ currency: "NOK" }}>
      <div className="DashboardTab">
        {/* Task 2A */}
        <H1 style={{ fontSize: "small" }}>Dashboard</H1>
        <div className="chart-container">
          {
            <div>
              <PieChart
                title={"Domestic & international transactions"}
                data={pieChartData}
              />
            </div>
          }
          <div>
            <BarChart
              title={"Transactions sent to companies"}
              data={barChartData}
            />
          </div>
        </div>

        <div className="DashboardBottom">
          <InfoCard
            title="Number of transactions in total"
            text={getAllTransactions().length}
            icon={card_in_medium}
            space="x-small"
          />
          <InfoCard
            title="Total amount of money"
            text={sumTransactions()}
            icon={account_medium}
            space="x-small"
          />
        </div>
      </div>
    </Provider>
  );
}

/* Task 2C */
const barChartData = {
  labels: ["DNB", "Interflora", "Skeidar", "Equinor", "IKEA"],
  datasets: [
    {
      /* Task 2B */
      label: "?????",
      data: [
        countTargetCompanies("DNB"),
        countTargetCompanies("Interflora"),
        countTargetCompanies("Skeidar"),
        countTargetCompanies("Equinor"),
        countTargetCompanies("IKEA"),
      ],
      backgroundColor: [colorPicker.SuccessGreen, colorPicker.MintGreen],

      hoverColor: [colorPicker.SuccessGreen, colorPicker.MintGreen],
    },
  ],
};

const pieChartData = {
  labels: ["Domestic", "International"],
  datasets: [
    {
      label: "Amount",
      data: countCrossBorderTransactions(),

      backgroundColor: [
        colorPicker.Violet,
        colorPicker.Indigo,
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
