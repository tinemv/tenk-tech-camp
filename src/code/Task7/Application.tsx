import { H1, Section } from "@dnb/eufemia";
import { useState } from "react";
import { ApplicationResult } from "./ApplicationResult";

export interface ApplicationProps {
  setCurrentTab: Function;
}

export const Application = (props: ApplicationProps) => {
  const { setCurrentTab } = props;
  setCurrentTab("new_tab");

  // Task 7C: create similar states like the one below
  const [submittedApplication, setSubmittedApplication] = useState(false);

  return (
    <>
      {!submittedApplication && (
        <Section spacing="large" left right style_type="white">
          <H1 style={{ textAlign: "center" }}>Apply for a job in DNB!</H1>
          {/* Task 7B: Create the application form here */}

        </Section>
      )}

      {submittedApplication && (
        <ApplicationResult
          firstName={undefined}
          lastName={undefined}
          motivationLetter={undefined}
          files={undefined}
          setSubmittedApplication={undefined}
          setFirstName={undefined}
          setLastName={undefined}
          setMotivationLetter={undefined}
          setFiles={undefined}
        />
      )}
    </>
  );
};
