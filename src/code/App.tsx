import React, { useState } from "react";
import { Button, H1, H2, Section, Tabs } from "@dnb/eufemia";
import Welcome from "./Welcome";
import CustomerPage from "./Customer/Profile/CustomerPage";
import { TheoryPage, TransactionsPage } from "../ignore/codeDump";
import TaskNavigator  from "../ignore/TaskNavigator";
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
  background-color: red
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
            tabs_style="mint-green"
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
          <Tabs
            id="tabs"
            tabs_spacing
            tabs_style="mint-green"
            content_style="black-3"
            style={{
              marginLeft: "1rem",
              marginRight: "1rem",
            }}
            data={[
              {
                title: "Teori",
                key: "Teori",
              },
              {
                title: "Oppgaver",
                key: "Oppgaver",
              },
            ]}
          />
        </RightArea>
      </FlexWrapper>
      <Tabs.Content id="tabs">
        {({ key }) => {
          if (key == "Velkommen") {
            return (
              <>
                <TaskNavigator
                  progressValue={progressValue}
                  setProgressValue={setProgressValue}
                  checkedTasks={checkedTasks}
                  setCheckedTasks={setCheckedTasks}
                />
                <Welcome />;
              </>
            );
          } else if (key == "Kunde") {
            return <CustomerPage />;
          } else if (key == "Etterforsker") {
            return <TransactionsPage />;
          } else if (key == "Teori") {
            return <TheoryPage />;
          } else if (key == "Oppgaver") {
            return (
              <TaskNavigator
                progressValue={progressValue}
                setProgressValue={setProgressValue}
                checkedTasks={checkedTasks}
                setCheckedTasks={setCheckedTasks}
              />
            );
          }
        }}
      </Tabs.Content>
    </>
  );
}


/* Dette er gammel måte å skrive tabs på:
<Tabs
  tabs_spacing
  tabs_style="mint-green"
  content_style="black-3"
  style={{
    marginLeft: "1rem",
    marginRight: "1rem",
  }}
  width="100%"
>
  <Tabs.Content title="Velkommen">
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
*/
