import { Drawer, FormStatus, Tabs } from "@dnb/eufemia";
import { ReactNode, useEffect } from "react";
import Progress from "./Progress";
import TaskLevel1 from "./TaskLevel1";
import TaskLevel2 from "./TaskLevel2";
import "./styles.css";

export interface TaskNavigatorProps {
  progressValue: number;
  setProgressValue: Function;
  currentTabLevel1: number;
  setCurrentTabLevel1: Function;
  checkedTasksLevel1: boolean[];
  setCheckedTasksLevel1: Function;
  currentTabLevel2: number;
  setCurrentTabLevel2: Function;
  checkedTasksLevel2: boolean[];
  setCheckedTasksLevel2: Function;
}

export interface Task {
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
    progressValue,
    setProgressValue,
    currentTabLevel1,
    setCurrentTabLevel1,
    checkedTasksLevel1,
    setCheckedTasksLevel1,
    currentTabLevel2,
    setCurrentTabLevel2,
    checkedTasksLevel2,
    setCheckedTasksLevel2,
  } = props;

  useEffect(() => {
    setProgressValue(
      ((checkedTasksLevel1.filter((x) => x == true).length +
        checkedTasksLevel2.filter((x) => x == true).length) *
        100) /
        (checkedTasksLevel1.length + checkedTasksLevel2.length)
    );
  }, [checkedTasksLevel1, checkedTasksLevel2]);

  return (
    <Drawer
      title="Tasks"
      space
      triggerAttributes={{ text: "Tasks", variant: "secondary" }}
    >
      <Drawer.Header>
        <FormStatus state="info">
          <p className="dnb-p">
            All files needed for the tasks are located in the{" "}
            <code className="dnb-code">src/code</code>folder
          </p>
        </FormStatus>

        <Progress progressValue={progressValue} />

        <Tabs
          id="task-navigator"
          data={[
            {
              title: "Level 1",
              key: "level_1",
            },
            {
              title: "Level 2",
              key: "level_2",
            },
          ]}
        />
      </Drawer.Header>
      <Drawer.Body>
        <Tabs.Content id="task-navigator">
          {({ key }) => {
            if (key == "level_1") {
              return (
                <TaskLevel1
                  currentTab={currentTabLevel1}
                  setCurrentTab={setCurrentTabLevel1}
                  checkedTasks={checkedTasksLevel1}
                  setCheckedTasks={setCheckedTasksLevel1}
                />
              );
            }
            if (key == "level_2") {
              return (
                <TaskLevel2
                  currentTab={currentTabLevel2}
                  setCurrentTab={setCurrentTabLevel2}
                  checkedTasks={checkedTasksLevel2}
                  setCheckedTasks={setCheckedTasksLevel2}
                />
              );
            }
          }}
        </Tabs.Content>
      </Drawer.Body>
    </Drawer>
  );
}
