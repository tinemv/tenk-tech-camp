import React, { useState } from "react";
import { H2, Section, Tabs } from "@dnb/eufemia";
import Welcome from "./Welcome";
import CustomerPage from "./Customer/Profile/CustomerPage";
import { TransactionsPage } from "../ignore/codeDump";
import TaskNavigator from "../ignore/TaskNavigator";
import { tasks } from "../ignore/tasks";

export default function App() {
  const [progressValue, setProgressValue] = useState(0);
  const [checkedTasks, setCheckedTasks] = useState<boolean[]>(() => {
    if (window.sessionStorage.getItem("checkedTasks") == null) {
      return new Array<boolean>(tasks.flatMap((x) => x.subtask).length).fill(
        false
      );
    }
    return window.sessionStorage
      .getItem("checkedTasks")
      .split(",")
      .map((x) => {
        if (x == "false") {
          return false;
        } else {
          return true;
        }
      });
  });

  return (
    <Tabs
      tabs_spacing
      tabs_style="mint-green"
      content_style="black-3"
      style={{ marginLeft: "1rem", marginRight: "1rem" }}
    >
      <Tabs.Content title="Velkommen">
        <TaskNavigator
          progressValue={progressValue}
          setProgressValue={setProgressValue}
          checkedTasks={checkedTasks}
          setCheckedTasks={setCheckedTasks}
        />
        <Welcome />
      </Tabs.Content>
      <Tabs.Content title="Logg inn som kunde">
        <CustomerPage />
      </Tabs.Content>
      <Tabs.Content title="Logg inn som etterforsker">
        <Section spacing top bottom style_type="white">
          <H2 top={0} bottom>
            <TransactionsPage />
          </H2>
        </Section>
      </Tabs.Content>
    </Tabs>
  );
}
