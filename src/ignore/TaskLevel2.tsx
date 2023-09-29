import {
  Accordion,
  Checkbox,
  Dialog,
  Drawer,
  FormRow,
  P,
  Tabs,
  Tag,
} from "@dnb/eufemia";
import { useEffect } from "react";
import { Task } from "./TaskNavigator";
import "./styles.css";
import { tasks_level2 } from "./tasks_level2";

export interface TaskLevel2Props {
  currentTab: number;
  setCurrentTab: Function;
  checkedTasks: boolean[];
  setCheckedTasks: Function;
}

export default function TaskLevel2(props: TaskLevel2Props) {
  const { currentTab, setCurrentTab, checkedTasks, setCheckedTasks } = props;

  useEffect(() => {
    window.sessionStorage.setItem(
      "checkedTasksLevel2",
      checkedTasks.toString()
    );
  }, [checkedTasks]);

  useEffect(() => {
    window.sessionStorage.setItem(
      "currentTaskTabLevel2",
      currentTab.toString()
    );
  }, [currentTab]);

  return (
    <>
      <Tabs
        id="tasks-level2-tab"
        data={tasks_level2.map((task) => {
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

      <Drawer.Body>
        <Tabs.Content id="tasks-level2-tab">
          {({ key }) => {
            const task: Task = tasks_level2[key];
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
                      title="Check off when you finish the task"
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
    </>
  );
}
