import React from "react";
import jente_koder from "../../ignore/jente_koder.jpg";
import { Section, H1, H2, P, InfoCard } from "@dnb/eufemia";
import "../../ignore/styles.css";

export interface WelcomeProps {
  setCurrentTab: Function;
}

export default function Welcome(props: WelcomeProps) {
  const { setCurrentTab } = props;
  setCurrentTab("Velkommen");
  return (
    <Section spacing="small" left right="0.25" style_type="white">
      <div className="WelcomeTab">
        {/* Intro assignment A */}
        <H1 style={{ margin: 20, color: "black" }}>Welcome to workshop!</H1>
        {/* Intro assignment C */}
        <Section
          style_type="sea-green"
          style={{
            padding: "2rem",
            minWidth: "40rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            columnGap: "1rem",
          }}
        >
          <P
            style={{
              color: "white",
              fontSize: "large",
            }}
          >

           In this workshop we will go though a set of assignments related to web development. 
           We will work on both the customer page and the employee page, which is meant to be a 
           view for respectivly customers and AML workers in a fictive DNB online bank. 
           <br></br>
           <br></br>
           The end goal of the assignments is to come up with a name that is suspicious in an AML context. 
           In this simplified online bank, suspicious means that the person has transfered money to Russia, 
           violating the international sanctions about not supporting the war.  
          </P>
        </Section>
        <br />
        <InfoCard
          style={{ fontSize: "large", bottom: "0px" }}
          text="Do not hesitate to ask us for help or if you have"
        ></InfoCard>
      </div>
    </Section>
  );
}
