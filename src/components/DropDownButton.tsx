import React from "react";
import { Dropdown } from "@dnb/eufemia";
import { hamburger } from "@dnb/eufemia/icons";

export default function DropDownTask(){
    return (
        <Dropdown
            variant="tertiary"
            data={['Oppgave 1', 'Oppgave 2', 'Oppgave 3', 'Oppgave 4']}
        />
    );
}