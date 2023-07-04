import React from "react";
import { Drawer, P, FormStatus, Tabs, H2, Modal, Ol, Li } from "@dnb/eufemia"
import { tasks } from "./tasks";

export default function TaskNavigator() {
    return(
        <Drawer title="Oppgaver">
            <Drawer.Header>
                <P bottom>Her finner du oppgaver relatert til en spesifikk Kunde!</P>
                <FormStatus state="info">Spør oss om det skulle være noe du lurer på!</FormStatus>
                <Tabs
                    id="unique-linked-id"
                    data={[
                        {
                            title: 'Oppgave 1',
                            key: 'one',
                        },
                        {
                            title: 'Oppgave 2',
                            key: 'two',
                        },
                        {
                            title: 'Oppgave 3',
                            key: 'three',
                        },
                        {
                            title: 'Oppgave 4',
                            key: 'four',
                        },
                        ,
                        {
                            title: 'Oppgave 5',
                            key: 'five',
                        }
                    ]}
                />
            </Drawer.Header>
            <Drawer.Body>
                <Tabs.Content id="unique-linked-id">
                {tasks.map((item) => (
                    <>
                        <H2>{item.title}</H2>
                        <P top>{item.description}</P>
                        <Ol type={item.id}>
                        {item.subtask.map((sub => (
                            <>
                                <Li>{sub.description}</Li>
                                <Modal>
                                    <p style={{ backgroundColor: "white" }}>{sub.hint}</p>
                                </Modal>
                            </>
                        )))}
                        </Ol>
                    </>
                ))}
                </Tabs.Content>
            </Drawer.Body>

        </Drawer>
    );
}
