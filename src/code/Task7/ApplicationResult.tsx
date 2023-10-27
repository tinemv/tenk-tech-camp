import { H1, Section } from "@dnb/eufemia";
import { UploadFile } from "@dnb/eufemia/components/upload/types";

export interface ApplicationResultProps {
  firstName: String;
  lastName: String;
  reasonLetter: String;
  files: UploadFile[];
  setSubmittedApplication: Function;
  setFirstName: Function;
  setLastName: Function;
  setReasonLetter: Function;
  setFiles: Function;
}

export const ApplicationResult = (props: ApplicationResultProps) => {
  const {
    firstName,
    lastName,
    reasonLetter,
    files,
    setSubmittedApplication,
    setFirstName,
    setLastName,
    setReasonLetter,
    setFiles,
  } = props;

  return (
    <>
      <Section space left right style_type="white">
        <H1>Application</H1>
      </Section>
    </>
  );
};
