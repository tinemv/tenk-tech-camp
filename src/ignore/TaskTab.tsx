import { Accordion, Checkbox, Dialog, Space, Tabs, Tag } from "@dnb/eufemia";
import FlexContainer from "@dnb/eufemia/components/flex/Container";
import { useEffect } from "react";
import { Task } from "./TaskNavigator";
import "./styles.css";

export interface TaskTabProps {
  currentTab: number;
  setCurrentTab: Function;
  checkedTasks: boolean[];
  setCheckedTasks: Function;
  checkedTaskString: string;
  currentTaskString: string;
  tabId: string;
  tasks: Task[];
}

export default function TaskTab(props: TaskTabProps) {
  const {
    currentTab,
    setCurrentTab,
    checkedTasks,
    setCheckedTasks,
    checkedTaskString,
    currentTaskString,
    tabId,
    tasks,
  } = props;

  useEffect(() => {
    window.sessionStorage.setItem(checkedTaskString, checkedTasks.toString());
  }, [checkedTasks]);

  useEffect(() => {
    window.sessionStorage.setItem(currentTaskString, currentTab.toString());
  }, [currentTab]);

  return (
    <>
      <Tabs
        id={tabId}
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

      <Tabs.Content id={tabId}>
        {({ key }) => {
          const task: Task = tasks[key];
          return (
            <>
              <div className="dnb-p">{task.description}</div>
              <Space bottom />
              {task.subtask.map((subTask) => (
                <div className="TaskTab" key={subTask.id}>
                  <Checkbox
                    style={{ flexShrink: 0 }}
                    right="x-small"
                    title="Check off when you finish the task"
                    on_change={({ checked }) => {
                      setCheckedTasks(
                        checkedTasks.map((task: any, i: number) => {
                          if (i == subTask.id) {
                            return (task = checked);
                          } else {
                            return (task = task);
                          }
                        })
                      );
                    }}
                    checked={checkedTasks[subTask.id]}
                  />
                  <Accordion
                    style={{ flexShrink: 1 }}
                    id={tabId + "_" + subTask.id.toString()}
                    remember_state
                    left_component={
                      <Tag
                        text={subTask.level}
                        className={"tag-" + subTask.level}
                      />
                    }
                  >
                    <Accordion.Header>{subTask.name}</Accordion.Header>
                    <Accordion.Content>
                      <FlexContainer>
                        <div
                          className="dnb-p"
                          style={{ lineHeight: "1.75rem" }}
                        >
                          {subTask.description}
                        </div>

                        {subTask.hint ? (
                          <FlexContainer>
                            <Dialog
                              triggerAttributes={{
                                text: "Hint",
                              }}
                              title={"Hint " + subTask.name}
                            >
                              <div
                                className="dnb-p"
                                style={{ lineHeight: "1.75rem" }}
                              >
                                {subTask.hint}
                              </div>
                            </Dialog>
                          </FlexContainer>
                        ) : (
                          <></>
                        )}
                      </FlexContainer>
                    </Accordion.Content>
                  </Accordion>
                </div>
              ))}
            </>
          );
        }}
      </Tabs.Content>
    </>
  );
}
