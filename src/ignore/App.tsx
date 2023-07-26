import React, { useState } from "react";
import { Tabs } from "@dnb/eufemia";
import Welcome from "../code/Intro/Welcome";
import CustomerPage from "../code/Oppgave1/CustomerPage";
import { TransactionsPage } from "./codeDump";
import TaskNavigator from "./TaskNavigator";
import styled from "styled-components";
import { tasks } from "./tasks";

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
  const [currentTab, setCurrentTab] = useState<number>(() => {
    if (window.sessionStorage.getItem("currentTab") != null) {
      return parseInt(window.sessionStorage.getItem("currentTab"));
    }
    return 0;
  });
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
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
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
