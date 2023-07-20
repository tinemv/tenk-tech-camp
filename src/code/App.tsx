import React, { useState } from "react";
import { Tabs } from "@dnb/eufemia";
import Welcome from "./Welcome";
import CustomerPage from "./Oppgave1/CustomerPage";
import { TransactionsPage } from "../ignore/codeDump";
import TaskNavigator from "../ignore/TaskNavigator";
import styled from "styled-components";
import { tasks } from "../ignore/tasks";

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const LeftArea = styled.div`
  flex-shrink: 0;
`;
const RightArea = styled.div`
  overflow: hidden;
`;

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
    <>
      <FlexWrapper>
        <LeftArea>
          <Tabs
            id="tabs"
            tabs_spacing
            /* tabs_style="mint-green" */
            content_style="black-3"
            style={{
              marginLeft: "1rem",
              marginRight: "1rem",
            }}
            data={[
              {
                title: "Velkommen",
                key: "Velkommen",
              },
              {
                title: "Logg inn som kunde",
                key: "Kunde",
              },
              {
                title: "Logg inn som etterforsker",
                key: "Etterforsker",
              },
            ]}
          />
        </LeftArea>

        <RightArea>
          <TaskNavigator
            progressValue={progressValue}
            setProgressValue={setProgressValue}
            checkedTasks={checkedTasks}
            setCheckedTasks={setCheckedTasks}
          />
        </RightArea>
      </FlexWrapper>
      <Tabs.Content id="tabs">
        {({ key }) => {
          if (key == "Velkommen") {
            return <Welcome />;
          } else if (key == "Kunde") {
            return <CustomerPage />;
          } else if (key == "Etterforsker") {
            return <TransactionsPage />;
          }
        }}
      </Tabs.Content>
    </>
  );
}