import React from "react";
import AccountTable from "./AccountTable";
import { customers } from "../data/CustomerList";
import profile_picture from "../assets/Kjersti_Braathen.jpg";
import { H1, Img, Section } from "@dnb/eufemia";
import "../styles.css";

export default function Customer() {
  return (
    <Section spacing="small" left right style_type="white">
      <div className="CustomerTab">
        <H1>Velkommen {customers[0].name}!</H1>
        <Img
          src={profile_picture}
          alt="User Picture"
          width="250"
          style={{ borderRadius: "50%" }}
        />
        <AccountTable customer={customers[0]} />
      </div>
    </Section>
  );
}
