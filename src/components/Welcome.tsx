import React from "react";
import jente_koder from "../assets/jente_koder.jpg";
import { Section, H1, P, InfoCard } from "@dnb/eufemia";
import "../styles.css";

export default function Welcome() {
  return (
    <Section spacing="small" left right="0.25" style_type="white">
      <div className="WelcomeTab">
        <H1 style={{ margin: 20 }}>Velkommen til workshop!</H1>
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
              marginRight: 200,
              fontSize: "large",
            }}
          >
            Tekst om oppgavene eller noe annet som er relevat å vite
          </P>
        </div>
        <Section
          style={{ marginLeft: 30, marginTop: 20, fontSize: "large" , display:"flex"}}
          style_type="white"
        >
          <P style={{ margin: 20}}>Mer tekst om workshoppen og hvordan de skal gå gjennom oppgavene</P>
          <InfoCard
            style={{fontSize: "large" }}
            text="Har du spørsmål eller trenger hjelp? Spør oss! "
          />
        </Section>
      </div>
    </Section>
  );
}
