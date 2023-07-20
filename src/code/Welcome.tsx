import React from "react";
import jente_koder from "../ignore/jente_koder.jpg";
import { Section, H1, H2, P, InfoCard } from "@dnb/eufemia";
import "../ignore/styles.css";

export default function Welcome() {
  return (
    <Section spacing="small" left right="0.25" style_type="white">
      <div className="WelcomeTab">
        {/* INTRO OPPGAVE: Her har du funnet overskriften :D */}
        <H1 style={{ margin: 20, color: "black" }}>Velkommen til workshop!</H1>
        {/* INTO OPPGAVE C: Legg inn underoverskrift her! */}
        <div className="GreenSection">
          <img
            style={{ margin: 25 }}
            sizes="350px"
            src={jente_koder}
            alt="JenteKoder"
            height="350"
          />
          <P
            style={{
              color: "white",
              margin: 25,
              marginRight: 100,
              fontSize: "large",
            }}
          >
            Tekst om oppgavene eller noe annet som er relevat å vite
          </P>
        </div>
        <Section
          style={{
            marginLeft: 30,
            marginTop: 20,
            fontSize: "large",
            display: "flex",
          }}
          style_type="white"
        >
          <P style={{ margin: 20 }}>
            Mer tekst om workshoppen og hvordan de skal gå gjennom oppgavene
          </P>
        </Section>
        <InfoCard
          style={{ fontSize: "large", bottom: "0px" }}
          text="Har du spørsmål eller trenger hjelp? Spør oss! "
        />
      </div>
    </Section>
  );
}
