import React from "react";
import { Drawer, P, FormStatus, Tabs, H2, Modal, Ol, Li } from "@dnb/eufemia"

import { tasks } from "./tasks";
import ReactDOM from "react-dom";

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

function getCurrentTaskTab() {
    tasks.map((item) => {
        if (item.id == "0") {

        } 
    })
}



export default function TaskNavigator() {
    const [currentTaskTab, setCurrentTaskTab] = React.useState("0")
    return(
        <Drawer title="Oppgaver">
            <Drawer.Header>
                <P bottom>Her finner du oppgaver relatert til en spesifikk Kunde!</P>
                <FormStatus state="info">Spør oss om det skulle være noe du lurer på!</FormStatus>                
                    <Tabs
                        id="unique-linked-id"
                        data = {getTaskTabs()}  
                    />
            </Drawer.Header>
            <Drawer.Body id="root">
                <>
                {({key}) => { setCurrentTaskTab(key)}}
                    {tasks.map((obj) => (
                        <>
                        {(() => {
                        if (obj.id == currentTaskTab){
                            console.log("kommer inn")

                            return (
                                <Tabs.Content id="unique-linked-id">
                                    <>
                                        <H2>{obj.title}</H2>
                                        <P top>{obj.description}</P>
                                        <Ol type={obj.id}>
                                            {obj.subtask.map((sub => (
                                                <>
                                                    <Li>{sub.description}</Li>
                                                    <Modal>
                                                        <p style={{ backgroundColor: "white" }}>{sub.hint}</p>
                                                    </Modal>
                                                </>
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
