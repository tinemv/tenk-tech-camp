import React from "react";
import { P, FormRow, Dialog, Input } from "@dnb/eufemia";
import "./styles.css";
import confetti from "canvas-confetti";

export default function InputField() {
  const [inputText, setInputText] = React.useState("");
  const handleInputText = (event) => {
    setInputText(event.target.value);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 500,
      spread: 200,
      zIndex: 9999, // ensure that confetti is on top
      scalar: 1.2,
    });
  };

  return (
    <FormRow>
      <Input
        space
        type="text"
        onChange={handleInputText}
        value={inputText}
        placeholder="Navn på kriminell"
        stretch
        style={{ minWidth: "200px" }}
        suffix={
          <Dialog
            triggerAttributes={{
              text: "Rapporter person",
              tooltip: "Rapporter personen til Politiet",
            }}
            onOpen={() => {
              if (
                inputText.toLowerCase().split(" ").join("") === "jonasgahrstøre"
              ) {
                triggerConfetti();
              }
            }}
            title={
              inputText.toLowerCase().split(" ").join("") === "jonasgahrstøre"
                ? "Gratulerer!"
                : "Prøv igjen!"
            }
          >
            {inputText.toLowerCase().split(" ").join("") ===
            "jonasgahrstøre" ? (
              <P>
                Du har løst saken!
                <br />
                <br />
                Jonas Gahr Støre, statsministeren i Norge, har ulovlig overført
                penger til Russland. Heldigvis klarte du å oppdage det og
                anmelde det til politiet.
                <br />
                <br />
                Bra jobba og takk for din hjelp!
              </P>
            ) : (
              <P>
                Det ser ikke ut som navnet du har skrevet inn er helt riktig.
                <br />
                <br />
                Her må du nok se gjennom transaksjonene på nytt for å finne
                riktig person å anmelde.
              </P>
            )}
          </Dialog>
        }
      />
    </FormRow>
  );
}
