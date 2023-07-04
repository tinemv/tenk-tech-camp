import React from "react";
import { Button, Dialog } from "@dnb/eufemia";
import pay_from from "@dnb/eufemia/icons/dnb/pay_from";
import transfer_to from "@dnb/eufemia/icons/dnb/transfer_to";

const transfer = () => {};

const pay = () => {};

export default function PayOrTransferMoney() {
  return (
    <>
      <Dialog
        variant="confirmation"
        title="Betal"
        trigger={(props) => (
          <Button
            {...props}
            icon={transfer_to}
            icon_position="left"
            size="large"
            text="Betal"
            variant="primary"
          />
        )}
      >
        Si hvem du vil betale penger til.
      </Dialog>
      <Dialog
        title="Overfør"
        trigger={(props) => (
          <Button
            {...props}
            icon={pay_from}
            icon_position="left"
            size="large"
            text="Overfør"
            variant="secondary"
            left
          />
        )}
      >
        Si hvem du vil overføre penger til.
      </Dialog>
    </>
  );
}
