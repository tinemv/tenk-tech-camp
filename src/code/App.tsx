import { Tabs } from "@dnb/eufemia";
import { useEffect, useState } from "react";
import styled from "styled-components";
import TaskNavigator from "../ignore/TaskNavigator";
import { TransactionsPage } from "../ignore/codeDump";
import { tasks_level1 } from "../ignore/tasks_level1";
import { tasks_level2 } from "../ignore/tasks_level2";
import Welcome from "./Intro/Welcome";
import CustomerPage from "./Task1/CustomerPage";
import { Application } from "./Task7/Application";

const FlexWrapper = styled.div`
  @media (min-width: 750px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const LeftArea = styled.div`
  flex-shrink: 0;
`;
const RightArea = styled.div`
  overflow: hidden;
`;

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>(() => {
    if (window.sessionStorage.getItem("currentTab") != null) {
      return window.sessionStorage.getItem("currentTab");
    }
    return "Welcome";
  });
  const [currentTaskLevel, setCurrentTaskLevel] = useState<string>(() => {
    if (window.sessionStorage.getItem("currentTaskLevel") != null) {
      return window.sessionStorage.getItem("currentTaskLevel");
    }
    return "level_1";
  });
  const [currentTaskTabLevel1, setCurrentTaskTabLevel1] = useState(() => {
    if (window.sessionStorage.getItem("currentTaskTabLevel1") != null) {
      return parseInt(window.sessionStorage.getItem("currentTaskTabLevel1"));
    }
    return 0;
  });
  const [currentTaskTabLevel2, setCurrentTaskTabLevel2] = useState(() => {
    if (window.sessionStorage.getItem("currentTaskTabLevel2") != null) {
      return parseInt(window.sessionStorage.getItem("currentTaskTabLevel2"));
    }
    return 0;
  });
  const [progressValue, setProgressValue] = useState(0);
  const [checkedTasksLevel1, setCheckedTasksLevel1] = useState<boolean[]>(
    () => {
      if (window.sessionStorage.getItem("checkedTasksLevel1") == null) {
        return new Array<boolean>(
          tasks_level1.flatMap((x) => x.subtask).length
        ).fill(false);
      }
      return window.sessionStorage
        .getItem("checkedTasksLevel1")
        .split(",")
        .map((x) => {
          if (x == "false") {
            return false;
          } else {
            return true;
          }
        });
    }
  );
  const [checkedTasksLevel2, setCheckedTasksLevel2] = useState<boolean[]>(
    () => {
      if (window.sessionStorage.getItem("checkedTasksLevel2") == null) {
        return new Array<boolean>(
          tasks_level2.flatMap((x) => x.subtask).length
        ).fill(false);
      }
      return window.sessionStorage
        .getItem("checkedTasksLevel2")
        .split(",")
        .map((x) => {
          if (x == "false") {
            return false;
          } else {
            return true;
          }
        });
    }
  );

  useEffect(() => {
    window.sessionStorage.setItem("currentTab", currentTab.toString());
  }, [currentTab]);

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
                title: "Welcome",
                key: "Velkommen",
              },
              {
                title: "Customer page",
                key: "Kunde",
              },
              {
                title: "Employee page",
                key: "Etterforsker",
              },
              /* Task 7A: Add tab data here */
              
            ]}
            selected_key={currentTab}
          />
        </LeftArea>
        <RightArea>
          <TaskNavigator
            progressValue={progressValue}
            setProgressValue={setProgressValue}
            currentTaskLevel={currentTaskLevel}
            setCurrentTaskLevel={setCurrentTaskLevel}
            currentTabLevel1={currentTaskTabLevel1}
            setCurrentTabLevel1={setCurrentTaskTabLevel1}
            checkedTasksLevel1={checkedTasksLevel1}
            setCheckedTasksLevel1={setCheckedTasksLevel1}
            currentTabLevel2={currentTaskTabLevel2}
            setCurrentTabLevel2={setCurrentTaskTabLevel2}
            checkedTasksLevel2={checkedTasksLevel2}
            setCheckedTasksLevel2={setCheckedTasksLevel2}
          />
        </RightArea>
      </FlexWrapper>
      <Tabs.Content id="tabs">
        {({ key }) => {
          if (key == "Velkommen") {
            return <Welcome setCurrentTab={setCurrentTab} />;
          } else if (key == "Kunde") {
            return <CustomerPage setCurrentTab={setCurrentTab} />;
          } else if (key == "Etterforsker") {
            return <TransactionsPage setCurrentTab={setCurrentTab} />;
          }
          /* Task 7A: Add tab content here */
          
        }}
      </Tabs.Content>
    </>
  );
}
