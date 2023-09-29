import {
  Accordion,
  Checkbox,
  Dialog,
  Drawer,
  FormRow,
  Input,
  P,
  Tabs,
  Tag,
} from "@dnb/eufemia";
import React, { useEffect } from "react";
import { Task } from "./TaskNavigator";
import "./styles.css";
import { tasks_level1 } from "./tasks_level1";

export interface TaskLevel1Props {
  currentTab: number;
  setCurrentTab: Function;
  checkedTasks: boolean[];
  setCheckedTasks: Function;
}

export default function TaskLevel1(props: TaskLevel1Props) {
  const { currentTab, setCurrentTab, checkedTasks, setCheckedTasks } = props;

  const [inputText, setInputText] = React.useState("");
  const handleInputText = (event) => {
    setInputText(event.target.value);
  };

  useEffect(() => {
    window.sessionStorage.setItem(
      "checkedTasksLevel1",
      checkedTasks.toString()
    );
  }, [checkedTasks]);

  useEffect(() => {
    window.sessionStorage.setItem(
      "currentTaskTabLevel1",
      currentTab.toString()
    );
  }, [currentTab]);

  return (
    <>
      <FormRow vertical>
        <Input
          label="Report the suspicious person here:"
          type="text"
          onChange={handleInputText}
          value={inputText}
          placeholder="Name of person"
          stretch
          style={{ minWidth: "200px" }}
          suffix={
            <Dialog
              triggerAttributes={{
                text: "Report",
              }}
              title={
                inputText.toLowerCase().split(" ").join("") === "jonasgahrstøre"
                  ? "Congratulations!"
                  : "Oooops... try again!"
              }
            >
              {inputText.toLowerCase().split(" ").join("") ===
              "jonasgahrstøre" ? (
                <P>
                  You solved the case and reported the right person to the
                  police.
                  <br />
                  <br />
                  Jonas Gahr Støre, prime minister of Norway, has transferred
                  money to Russia to support war in Ukraine.
                  <br />
                  <br />
                  Luckily for us, you were able to use technology to effectivly
                  track him down so he can be stopped!
                </P>
              ) : (
                <P>
                  Looks like you have not submitted the correct name.
                  <br />
                  <br />
                  Go back and look through the transactions again to find
                  someone suspicious.
                </P>
              )}
            </Dialog>
          }
        />
      </FormRow>

      <Tabs
        top
        id="tasks-level1-tab"
        data={tasks_level1.map((task) => {
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
        <Tabs.Content id="tasks-level1-tab">
          {({ key }) => {
            const task: Task = tasks_level1[key];
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
