import { Card, FormStatus, H1, H2, P, Section, Upload } from "@dnb/eufemia";
import { Field, Form } from "@dnb/eufemia/extensions/forms";
import { useState } from "react";
import { ApplicationResult } from "./ApplicationResult";

export interface ApplicationProps {
  setCurrentTab: Function;
}

export function isUserInputNull(
  firstName: string,
  lastName: string,
  reasonLetter: string
): boolean {
  return (
    firstName == undefined || lastName == undefined || reasonLetter == undefined
  );
}

export const Application = (props: ApplicationProps) => {
  const { setCurrentTab } = props;
  setCurrentTab("new_tab");

  const [firstName, setFirstName] = useState(undefined);
  const [lastName, setLastName] = useState(undefined);
  const [reasonLetter, setReasonLetter] = useState(undefined);
  const { files, setFiles } = Upload.useUpload("upload-basic");

  const [submittedApplication, setSubmittedApplication] = useState(false);

  return (
    <>
      {!submittedApplication && (
        <div className="ApplicationTab">
          <Section spacing="large" left right style_type="white">
            <H1 style={{ textAlign: "center" }}>Apply for a job in DNB!</H1>

            <P space>
              Hopefully, after being introduced to programming and the endless
              possibilities that code can do, you would like to apply for an
              available position as a software developer in DNB.
            </P>

            <H2 top>Fill out application</H2>

            <Card top stack>
              <Form.SubHeading>Personal details</Form.SubHeading>

              <Field.String
                label="Fornavn"
                onChange={(value) => setFirstName(value)}
                value={firstName == undefined ? undefined : firstName}
              />
              <Field.String
                label="Etternavn"
                onChange={(value) => setLastName(value)}
                value={lastName == undefined ? undefined : lastName}
              />
            </Card>

            <Card top>
              <Form.SubHeading>Why should we choose you?</Form.SubHeading>

              <Field.String
                top
                multiline
                width="stretch"
                autoresize={true}
                autoresizeMaxRows={15}
                placeholder="Write your reason here..."
                onChange={(value) => setReasonLetter(value)}
                value={reasonLetter == undefined ? undefined : reasonLetter}
              />
            </Card>

            <Card top>
              <Form.SubHeading>Upload documents</Form.SubHeading>
              <P>Upload CV and other documentation you find relevant</P>

              <Upload
                top
                id="upload-basic"
                acceptedFileTypes={["pdf", "png", "jpg"]}
              />
            </Card>
            <Form.SubmitButton
              top
              bottom
              onClick={() => {
                if (isUserInputNull(firstName, lastName, reasonLetter)) {
                  return (
                    <FormStatus text="You need to fill out all the text fields!" />
                  );
                }
                return setSubmittedApplication(true);
              }}
            >
              Check application
            </Form.SubmitButton>
          </Section>
        </div>
      )}

      {submittedApplication && (
        <ApplicationResult
          firstName={firstName}
          lastName={lastName}
          reasonLetter={reasonLetter}
          files={files}
          setSubmittedApplication={setSubmittedApplication}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setReasonLetter={setReasonLetter}
          setFiles={setFiles}
        />
      )}
    </>
  );
};
