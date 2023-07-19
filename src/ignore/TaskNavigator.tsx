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
  Section,
} from "@dnb/eufemia";
import { tasks } from "./tasks";
import Progress from "./Progress";

export interface TaskNavigatorProps {
  progressValue: number;
  setProgressValue: Function;
  checkedTasks: boolean[];
  setCheckedTasks: Function;
}

interface TaskTab {
  title: String;
  key: String;
  content: ReactNode;
  subTask: {
    id: number;
    name: string;
    level: string;
    description: ReactNode;
    hint: ReactNode;
  }[];
}

function getTaskTabs(): TaskTab[] {
  return tasks.map((item) => ({
    title: item.title,
    key: item.id,
    content: item.description,
    subTask: item.subtask,
  }));
}

function getTaskTabContent(item: TaskTab, props: any) {
  return (
    <Drawer.Body id="root">
      <Tabs.Content id="unique-linked-id">
        {item.content}
        <Ol type={item.key.toString()}>
          {item.subTask.map((sub) => (
            <FormRow>
              <Checkbox
                right="large"
                title="Kryss av når du er ferdig med oppgaven"
                on_change={({ checked }) => {
                  props.setCheckedTasks(
                    props.checkedTasks.map((task: any, i: number) => {
                      if (i == sub.id) {
                        return (task = checked);
                      } else {
                        return (task = task);
                      }
                    })
                  );
                }}
                checked={props.checkedTasks[sub.id]}
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
      </Tabs.Content>
    </Drawer.Body>
  );
}

function getDataElements(props: any): any {
  return getTaskTabs().map((item) => {
    return {
      title: item.title,
      key: item.key,
      content: getTaskTabContent(item, props),
    };
  });
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
        <P bottom>Her finner du oppgaver relatert til en spesifikk Kunde!</P>
        <FormStatus state="info">
          Spør oss om det skulle være noe du lurer på!
        </FormStatus>
        <Progress progressValue={progressValue} />
        <Tabs id="unique-linked-id" data={getDataElements(props)} />
      </Drawer.Header>
    </Drawer>
  );
}
