import {
  Accordion,
  Checkbox,
  Dialog,
  FormRow,
  P,
  Tabs,
  Tag,
} from "@dnb/eufemia";
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
              <P bottom>{task.description}</P>
              {task.subtask.map((sub) => (
                <div className="TaskTab">
                  <Checkbox
                    style={{ flexShrink: 0 }}
                    right="x-small"
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
                    id={tabId + "_" + sub.id.toString()}
                    remember_state
                    left_component={
                      <Tag text={sub.level} className={"tag-" + sub.level} />
                    }
                  >
                    <Accordion.Header>{sub.name}</Accordion.Header>
                    <Accordion.Content>
                      <FormRow direction="vertical">
                        <P style={{ lineHeight: "1.75rem" }}>
                          {sub.description}
                        </P>
                        {sub.hint ? (
                          <FormRow top bottom direction="horizontal">
                            <Dialog
                              triggerAttributes={{
                                text: "Hint",
                              }}
                              title={"Hint " + sub.name}
                            >
                              <P style={{ lineHeight: "1.75rem" }}>
                                {sub.hint}
                              </P>
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
    </>
  );
}
