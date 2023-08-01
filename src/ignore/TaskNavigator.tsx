import React, { ReactNode, useEffect } from "react";
import {
  Drawer,
  P,
  FormStatus,
  Tabs,
  Checkbox,
  FormRow,
  Dialog,
  Tag,
  Accordion,
  Input,
  Section,
} from "@dnb/eufemia";
import { tasks } from "./tasks";
import Progress from "./Progress";
import "./styles.css";

export interface TaskNavigatorProps {
  currentTab: number;
  setCurrentTab: Function;
  progressValue: number;
  setProgressValue: Function;
  checkedTasks: boolean[];
  setCheckedTasks: Function;
}

interface Task {
  id: number;
  title: String;
  description: ReactNode;
  subtask: {
    id: number;
    name: string;
    level: string;
    description: ReactNode;
    hint: ReactNode;
  }[];
}

export default function TaskNavigator(props: TaskNavigatorProps) {
  const {
    currentTab,
    setCurrentTab,
    progressValue,
    setProgressValue,
    checkedTasks,
    setCheckedTasks,
  } = props;

  const [inputText, setInputText] = React.useState("");
  const handleInputText = (event) => {
    setInputText(event.target.value);
  };

  useEffect(() => {
    setProgressValue(
      (checkedTasks.filter((x) => x == true).length * 100) / checkedTasks.length
    );
    window.sessionStorage.setItem("checkedTasks", checkedTasks.toString());
  }, [checkedTasks]);

  useEffect(() => {
    window.sessionStorage.setItem("currentTaskTab", currentTab.toString());
  }, [currentTab]);

  return (
    <Drawer
      title="Oppgaver"
      space
      triggerAttributes={{ text: "Oppgaver", variant: "secondary" }}
    >
      <Drawer.Header>
        <FormStatus state="info">
          <p className="dnb-p">
            Alle filene vi skal jobbe i ligger i{" "}
            <code className="dnb-code">code</code>-mappa som ligger i{" "}
            <code className="dnb-code">src</code>-mappa
          </p>
        </FormStatus>
        <Progress progressValue={progressValue} />

        <Section spacing="small" style={{ marginTop: "10px" }}>
          <FormRow vertical>
            <Section style={{ display: "flex" }}>
              <Input
                space
                label="Meld inn den kriminelle til politiet her:"
                type="text"
                onChange={handleInputText}
                value={inputText}
                suffix={
                  <Dialog
                    triggerAttributes={{
                      text: "Meld inn",
                    }}
                    title={
                      inputText === "Jonas Gahr Støre"
                        ? "Gratulerer!"
                        : "Prøv igjen!"
                    }
                  >
                    <P>
                      {inputText === "Jonas Gahr Støre"
                        ? "Du har løst saken. Jonas Gahr Støre, statsministeren i Norge, har uten lov overført penger til Russland. Heldigvis klarte du å oppdage det og anmelde det til politiet. Bra jobba og takk for din hjelp!"
                        : "Det ser ikke ut som navnet du har skrevet inn er helt riktig. Dobbeltsjekk at du har skrevet alle navnene med stor forbokstav og at du har mellomrom på riktig steder. Hvis det fortsatt blir feil må du kanskje se gjennom transaksjonene på nytt for å finne riktig navn å anmelde."}
                    </P>
                  </Dialog>
                }
              />
            </Section>
          </FormRow>
        </Section>

        <Tabs
          id="tasks-tab"
          data={tasks.map((task) => {
            return {
              title: task.title,
              key: task.id,
            };
          })}
          selected_key={currentTab}
          on_change={({ key }) => {
            setCurrentTab(key);
          }}
        />
      </Drawer.Header>
      <Drawer.Body>
        <Tabs.Content id="tasks-tab">
          {({ key }) => {
            const task: Task = tasks[key];
            return (
              <>
                <P bottom>{task.description}</P>
                {task.subtask.map((sub) => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      minWidth: "370px",
                      justifyContent: "flex-start",
                      alignItems: "baseline",
                      marginBottom: "1rem",
                    }}
                  >
                    <Checkbox
                      style={{ flexShrink: 0 }}
                      right="large"
                      title="Kryss av når du er ferdig med oppgaven"
                      on_change={({ checked }) => {
                        setCheckedTasks(
                          checkedTasks.map((task: any, i: number) => {
                            if (i == sub.id) {
                              return (task = checked);
                            } else {
                              return (task = task);
                            }
                          })
                        );
                      }}
                      checked={checkedTasks[sub.id]}
                    />
                    <Accordion
                      style={{ flexShrink: 1 }}
                      id={sub.id.toString()}
                      remember_state
                      left_component={
                        <Tag text={sub.level} className={"tag-" + sub.level} />
                      }
                    >
                      <Accordion.Header>
                        <div>{sub.name}</div>
                      </Accordion.Header>
                      <Accordion.Content>
                        <FormRow direction="vertical">
                          <P>{sub.description}</P>
                          {sub.id !== 12 ? (
                            <FormRow top bottom direction="horizontal">
                              <Dialog
                                triggerAttributes={{
                                  text: "Hint",
                                }}
                                title={"Hint " + sub.name}
                              >
                                <P>{sub.hint}</P>
                              </Dialog>
                            </FormRow>
                          ) : (
                            <></>
                          )}
                        </FormRow>
                      </Accordion.Content>
                    </Accordion>
                  </div>
                ))}
              </>
            );
          }}
        </Tabs.Content>
      </Drawer.Body>
    </Drawer>
  );
}