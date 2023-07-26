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
  H3,
  H4,
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

  useEffect(() => {
    console.log(checkedTasks);
    setProgressValue(
      (checkedTasks.filter((x) => x == true).length * 100) / checkedTasks.length
    );
    window.sessionStorage.setItem("checkedTasks", checkedTasks.toString());
  }, [checkedTasks]);

  useEffect(() => {
    window.sessionStorage.setItem("currentTab", currentTab.toString());
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
                {task.description}
                {task.subtask.map((sub) => (
                  <Accordion.Provider id={task.id.toString()}>
                    <FormRow key={sub.id}>
                      <Checkbox
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
                        top
                        id={sub.id.toString()}
                        remember_state
                        left_component={
                          <Tag
                            text={sub.level}
                            className={"tag-" + sub.level}
                          />
                        }
                      >
                        <Accordion.Header>
                          <div>{sub.name}</div>
                        </Accordion.Header>
                        <Accordion.Content>
                          <FormRow direction="vertical">
                            <P>{sub.description}</P>
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
                          </FormRow>
                        </Accordion.Content>
                      </Accordion>
                    </FormRow>
                  </Accordion.Provider>
                ))}
              </>
            );
          }}
        </Tabs.Content>
      </Drawer.Body>
    </Drawer>
  );
}
