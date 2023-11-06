import { H1, Img, Section } from "@dnb/eufemia";
import { useState } from "react";
import { customer } from "../../data/customer";
import "../../ignore/styles.css";
import AccountTable from "../Extra/AccountTable";
import AccountPage from "../Task5/AccountPage";
import unknown from "./ProfilePictures/Unknown.png";

export interface CustomerPageProps {
  setCurrentTab: Function;
}

/** */
export default function CustomerPage(props: CustomerPageProps) {
  const { setCurrentTab } = props;
  setCurrentTab("Kunde");
  const [accountClicked, setAccountClicked] = useState("Customer");

  return (
    <Section spacing="small" left right style_type="white">
      <div className="CustomerTab">
        {accountClicked === "Customer" && (
          <>
            {/* Task 1A: Change the header here */}
            <H1>Welcome unknown user!</H1>
            <Img
              /* Task 1B: Change the picture here */
              src={unknown}
              alt="User Picture"
              width="250rem"
              height="250rem"
              style={{ borderRadius: "50%" }}
              bottom
              top
            />
            <Section style_type="lavender" spacing>
              <AccountTable
                accountList={customer.accounts}
                setAccountClicked={setAccountClicked}
              />
            </Section>
          </>
        )}

        {accountClicked !== "Customer" && (
          <>
            <AccountPage
              account={customer.accounts.find(
                (account) =>
                  account.name === accountClicked ||
                  account.number === accountClicked
              )}
              setAccountClicked={setAccountClicked}
            />
          </>
        )}
      </div>
    </Section>
  );
}
