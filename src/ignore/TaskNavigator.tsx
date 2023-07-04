import React, { useEffect } from "react";
import {
  Drawer,
  P,
  FormStatus,
  Tabs,
  H2,
  Modal,
  Ol,
  Li,
  Checkbox,
  FormRow,
} from "@dnb/eufemia";
import { tasks } from "./tasks";
import Progress from "./Progress";

export interface TaskNavigatorProps {
  progressValue: number;
  setProgressValue: Function;
  checkedTasks: boolean[];
  setCheckedTasks: Function;
}

export default function TaskNavigator(props: TaskNavigatorProps) {
  const { progressValue, setProgressValue, checkedTasks, setCheckedTasks } =
    props;

  useEffect(() => {
    setProgressValue(
      (checkedTasks.filter((x) => x == true).length * 100) / checkedTasks.length
    );
    window.sessionStorage.setItem("checkedTasks", checkedTasks.toString());

    console.log(
      "checkedTasks:",
      window.sessionStorage.getItem("checkedTasks").split(",")
    );
  }, [checkedTasks]);

  return (
    <Drawer title="Oppgaver">
      <Drawer.Header>
        <P bottom>Her finner du oppgaver relatert til en spesifikk Kunde!</P>
        <FormStatus state="info">
          Spør oss om det skulle være noe du lurer på!
        </FormStatus>
        <Progress progressValue={progressValue}/>
        <Tabs
          id="unique-linked-id"
          data={[
            {
              title: "Oppgave 1",
              key: "one",
            },
            {
              title: "Oppgave 2",
              key: "two",
            },
            {
              title: "Oppgave 3",
              key: "three",
            },
            {
              title: "Oppgave 4",
              key: "four",
            },
            ,
            {
              title: "Oppgave 5",
              key: "five",
            },
          ]}
        />
      </Drawer.Header>
      <Drawer.Body>
        <Tabs.Content id="unique-linked-id">
          {tasks.map((item) => (
            <>
              <H2>{item.title}</H2>
              <P top>{item.description}</P>
              <Ol type={item.id.toString()}>
                {item.subtask.map((sub) => (
                  <FormRow>
                    <Checkbox
                      right="large"
                      title="Kryss av når du er ferdig med oppgaven"
                      on_change={({ checked }) => {
                        setCheckedTasks(
                          checkedTasks.map((task, i) => {
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
                    <FormRow direction="vertical">
                      <Li>{sub.description}</Li>
                      <Modal>
                        <p style={{ backgroundColor: "white" }}>{sub.hint}</p>
                      </Modal>
                    </FormRow>
                  </FormRow>
                ))}
              </Ol>
            </>
          ))}
        </Tabs.Content>
      </Drawer.Body>
    </Drawer>
  );
}
