import React, { useState } from "react";
import { Tabs, Input, P, Dialog } from "@dnb/eufemia";
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
const MiddelArea = styled.div`
display flex;
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

  const [inputText, setInputText] = React.useState("");
  const handleInputText = (event) => {
    setInputText(event.target.value);
  };

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
        <MiddelArea>
          <Input
            space
            type="text"
            onChange={handleInputText}
            value={inputText}
          />
          <Dialog
            triggerAttributes={{
              text: "Meld inn til politiet",
            }}
            title={
              inputText === "Jonas Gahr Støre" ? "Gratulerer!" : "Prøv igjen!"
            }
          >
            <P>
              {inputText === "Jonas Gahr Støre"
                ? "Du har løst saken. Jonas Gahr Støre, statsministeren i Norge, har uten lov overført penger til Russland. Heldigvis klarte du å oppdage det og anmelde det til politiet. Bra jobba og takk for din hjelp!"
                : "Det ser ikke ut som navnet du har skrevet inn er helt rikrig. Dobbeltsjekk at du har skrevet alle navnene med stor forbokstav og at du har mellomrom på riktig steder. Hvis det fortsatt blir feil må du kanskje se gjennom transaksjonene på nytt for å finne riktig navn å anmelde."}
            </P>
          </Dialog>
        </MiddelArea>
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
