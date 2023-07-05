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
  currTaskTab: String;
  setCurrTaskTab: Function;
}

interface TaskTab {
    title: String,
    key: String
}

function getTaskTabs() : TaskTab[] {
    let data: TaskTab[] = []
    tasks.map((item) => 
        data.push({title: item.title, key: item.id})    
    )
    return data
}

function tabOnClick() {
    return (
        <>
    
            <Tabs.Content id="unique-linked-id">               
            <H2>{"rip"}</H2>
            <P top>{"meg"}</P>
            </Tabs.Content>
                            
        </>
    
    )
}


export default function TaskNavigator(props: TaskNavigatorProps) {
  const { progressValue, setProgressValue, checkedTasks, setCheckedTasks, currTaskTab, setCurrTaskTab } =
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

    console.log(
        "current tab: " + currTaskTab
    );
  }, [checkedTasks, currTaskTab]);

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
            data = {getTaskTabs()}
            onClick={tabOnClick}
        />
      </Drawer.Header>
      <Drawer.Body id="root">
            <>
                {({key}) =>{ console.log(key) , setCurrTaskTab(key)}}
                    {tasks.map((obj) => (
                        <>
                        {(() => {
                        if (obj.id === currTaskTab){
                            return ( 
                                <Tabs.Content id="unique-linked-id">
                                    <>
                                        <H2>{obj.title}</H2>
                                        <P top>{obj.description}</P>
                                        <Ol type={obj.id}>
                                            {obj.subtask.map((sub => (
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
                                            )))}
                                        </Ol>
                                    </>        
                                </Tabs.Content>
                            )
                        }})()}
                        </>
                    ))}
                </>
            </Drawer.Body>
    </Drawer>
  );
}


