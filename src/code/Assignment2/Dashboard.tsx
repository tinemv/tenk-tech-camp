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
  countTargetCountries,
  sumTransactions,
} from "../../ignore/codeDump";
import Provider from "@dnb/eufemia/shared/Provider";

export interface DashboardProps {
  setCurrentSubTab: Function;
}

/** Dashboard er en funksjon som returnerer koden til Dashboard siden. Kan finnes dersom du logger inn som etterforsker */
export default function Dashboard(props: DashboardProps) {
  const { setCurrentSubTab } = props;
  setCurrentSubTab("Dashboard");

  return (
    <Provider locale="nb-NO" NumberFormat={{ currency: "NOK" }}>
      <div className="DashboardTab">
        {/* Oppgave 2A: Her finner du overskriften til siden */}
        <H1 style={{ fontSize: "small" }}>Dashboard</H1>
        <div className="chart-container">
          <div>
            <PieChart
              title={"Domestic vs. international transactions"}
              data={pieChartData}
            />
          </div>

          <div>
            <BarChart
              title={"Number of transactions sent to a country"}
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

/* Oppgave 2C: Her må du legge til Russland to steder */
const barChartData = {
  labels: ["Norway", "Sweeden", "Denmark", "USA", "Spain", "Italy"],
  datasets: [
    {
      /* Oppgave 2B: Her kan du legge til "Antall" */
      label: "?????",
      data: [
        countTargetCountries("Norway"),
        countTargetCountries("Sweeden"),
        countTargetCountries("Denmark"),
        countTargetCountries("USA"),
        countTargetCountries("Spain"),
        countTargetCountries("Italy"),
      ],
      backgroundColor: colorPicker.SuccessGreen,
    },
  ],
};

const pieChartData = {
  labels: ["Domestic", "International"],
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