import React, { ReactNode, useEffect } from "react";
import {
  Drawer,
  P,
  FormStatus,
  Tabs,
  H2,
  Ol,
  Li,
  Checkbox,
  FormRow,
  Dialog,
  Tag,
} from "@dnb/eufemia";
import { tasks } from "./tasks";
import Progress from "./Progress";

export interface TaskNavigatorProps {
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
  const { progressValue, setProgressValue, checkedTasks, setCheckedTasks } =
    props;

  useEffect(() => {
    setProgressValue(
      (checkedTasks.filter((x) => x == true).length * 100) / checkedTasks.length
    );
    window.sessionStorage.setItem("checkedTasks", checkedTasks.toString());
  }, [checkedTasks]);

  return (
    <Drawer
      title="Oppgaver"
      space
      triggerAttributes={{ text: "Oppgaver", variant: "secondary" }}
    >
      <Drawer.Header>
        <FormStatus state="info">
          Spør oss om det skulle være noe du lurer på!
        </FormStatus>
        <Progress progressValue={progressValue} />
        <Tabs
          id="tasks-tab"
          data={[
            {
              title: tasks[0].title,
              key: tasks[0].id,
            },
            {
              title: tasks[1].title,
              key: tasks[1].id,
            },
            {
              title: tasks[2].title,
              key: tasks[2].id,
            },
          ]}
        />
      </Drawer.Header>
      <Drawer.Body>
        <Tabs.Content id="tasks-tab">
          {({ key }) => {
            const task: Task = tasks[key];
            return (
              <>
                {task.description}
                <Ol>
                  {task.subtask.map((sub) => (
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
                      <FormRow direction="vertical">
                        <Li>{sub.description}</Li>
                        <FormRow bottom direction="horizontal">
                          <Dialog
                            triggerAttributes={{
                              text: "Hint " + sub.name,
                            }}
                            title={"Hint " + sub.name}
                          >
                            <P>{sub.hint}</P>
                          </Dialog>
                          <Tag text={sub.level} space="0.5" />
                        </FormRow>
                      </FormRow>
                    </FormRow>
                  ))}
                </Ol>
              </>
            );
          }}
        </Tabs.Content>
      </Drawer.Body>
    </Drawer>
  );
}