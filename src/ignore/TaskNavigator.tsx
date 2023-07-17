import React, { useEffect } from "react";
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
  content: String;
  subTask: {
    id: number;
    name: string;
    level: string;
    description: string;
    hint: string;
  }[];
}

function getTaskTabs(): TaskTab[] {
  let data: TaskTab[] = [];
  tasks.map((item) =>
    data.push({
      title: item.title,
      key: item.id,
      content: item.description,
      subTask: item.subtask,
    })
  );
  console.log(data);
  return data;
}

function getTaskTabContent(item: TaskTab, props: any) {
  return (
    <Drawer.Body id="root">
      <Tabs.Content id="unique-linked-id">
        <H2>{item.title}</H2>
        <P top>{item.content}</P>
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
                <Section>
                  <Dialog
                    triggerAttributes={{
                      text: "Hint " + sub.name,
                    }}
                    title={"Hint " + sub.name}
                  >
                    <P>{sub.hint}</P>
                  </Dialog>
                  <Tag text={sub.level} space='0.5'/>
                </Section>
              </FormRow>
            </FormRow>
          ))}
        </Ol>
      </Tabs.Content>
    </Drawer.Body>
  );
}

function getDataElements(props: any): any {
  let data = [];
  getTaskTabs().map((item) => {
    data.push({
      title: item.title,
      key: item.key,
      content: getTaskTabContent(item, props),
    });
  });

  return data;
}

export default function TaskNavigator(props: TaskNavigatorProps) {
  const { progressValue, setProgressValue, checkedTasks, setCheckedTasks } =
    props;

  useEffect(() => {
    setProgressValue(
      (checkedTasks.filter((x) => x == true).length * 100) / checkedTasks.length
    );
    window.sessionStorage.setItem("checkedTasks", checkedTasks.toString());

    /* console.log(
      "checkedTasks:",
      window.sessionStorage.getItem("checkedTasks").split(",")
    ); */
  }, [checkedTasks]);

  return (
    <Drawer title="Oppgaver">
      <Drawer.Header>
        <P bottom>Her finner du oppgaver relatert til en spesifikk Kunde!</P>
        <FormStatus state="info">
          Spør oss om det skulle være noe du lurer på!
        </FormStatus>
        <Progress progressValue={progressValue} />
        <Tabs
          id="unique-linked-id"
          data={getDataElements(props)}
          on_click={({ selected_key }) => {
            console.log("on_click", selected_key);
          }}
        />
      </Drawer.Header>
    </Drawer>
  );
}
