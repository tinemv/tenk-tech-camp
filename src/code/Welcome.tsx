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
            style={{ margin: 25, marginTop: 55 }}
            src={jente_koder}
            alt="JenteKoder"
            height="250"
          />
          <P
            style={{
              color: "white",
              margin: 25,
              marginRight: 100,
              fontSize: "large",
            }}
          >
            Dette er en nettside som holder oversikt over alle transaksjonene i
            DNB. Vi skal bruke den til å finne ut om noen har overført penger
            til Russland som er i strid med tiltakene som er laget for å stoppe
            krigen.
            <br />
            <br />
            For enkelhets skyld så later vi som at alle transaksjoner til
            Russland er ulovlig, selv om det egentlig ikke stemmer.
            <br />
            <br />
            Det vi skal gjøre er å lete etter noen som har overført penger til
            Russland, og rapportere dette til politiet.
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
        ></Section>
        <InfoCard
          style={{ fontSize: "large", bottom: "0px" }}
          text="Har du spørsmål eller trenger hjelp? Spør oss! "
        />
      </div>
    </Section>
  );
}
