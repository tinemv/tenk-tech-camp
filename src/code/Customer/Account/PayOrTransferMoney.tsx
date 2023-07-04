import React from "react";
import {
  Button,
  DatePicker,
  Dialog,
  Dropdown,
  FormRow,
  FormSet,
  InputMasked,
  Textarea,
} from "@dnb/eufemia";
import pay_from from "@dnb/eufemia/icons/dnb/pay_from";
import transfer_to from "@dnb/eufemia/icons/dnb/transfer_to";

const transfer = () => {};

const pay = () => {};

export default function PayOrTransferMoney() {
  return (
    <>
      <Dialog
        variant="confirmation"
        title="Betale til"
        icon={pay_from}
        onConfirm={({ close }) => close()}
        confirmText="Betal penger"
        triggerAttributes={{ text: "Betal" }}
        trigger={(props) => (
          <Button
            {...props}
            icon={pay_from}
            icon_position="left"
            size="large"
            variant="primary"
          />
        )}
      >
        <FormSet space="xx-large" responsive>
          <Dropdown space label="Betale til:" />
          <Dropdown space label="Betale fra:" />
          <DatePicker
            space
            label="Dato:"
            date={new Date()}
            show_input
          ></DatePicker>
          <Textarea
            space
            label="Beskrivelse:"
            rows={1}
            autoresize
            autoresize_max_rows={1}
            on_key_down={({ rows, event }) => {
              if (rows >= 1 && event.key === "Enter") {
                event.preventDefault();
              }
            }}
          />
          <InputMasked
            space
            label="Beløp:"
            as_currency="NOK"
            on_change={({ numberValue }) => {
              console.log(numberValue);
            }}
          />
        </FormSet>
      </Dialog>

      <Dialog
        variant="confirmation"
        title="Overfør tittel"
        icon={transfer_to}
        onConfirm={({ close }) => close()}
        confirmText="Overfør penger"
        triggerAttributes={{ text: "Overfør" }}
        trigger={(props) => (
          <Button
            {...props}
            icon={transfer_to}
            icon_position="left"
            size="large"
            variant="secondary"
            left
          />
        )}
      />
    </>
  );
}
