import { Button, H1, P, Section } from "@dnb/eufemia";
import FlexContainer from "@dnb/eufemia/components/flex/Container";
import FlexItem from "@dnb/eufemia/components/flex/Item";
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
        <FlexContainer>
          <FlexItem size={2}>
            <P>Firstname:</P>
          </FlexItem>
          <FlexItem size={10}>{firstName}</FlexItem>

          <FlexItem size={2}>
            <P>Lastname: </P>
          </FlexItem>
          <FlexItem size={10}>{lastName}</FlexItem>

          <FlexItem size={2}>
            <P>Reason letter: </P>
          </FlexItem>
          <FlexItem size={10}>{reasonLetter}</FlexItem>

          <FlexItem size={2}>
            <P>Files: </P>
          </FlexItem>
          <FlexItem size={10}>
            {files.map((f) => (
              <P>{f.file.name}</P>
            ))}
          </FlexItem>
        </FlexContainer>

        <FlexContainer top>
          <FlexItem>
            <Button
              variant="secondary"
              onClick={() => {
                setSubmittedApplication(false);
              }}
            >
              Back
            </Button>
          </FlexItem>
          <FlexItem>
            <Button
              variant="primary"
              onClick={() => {
                setFirstName(undefined);
                setLastName(undefined);
                setReasonLetter(undefined);
                setFiles([]);
                setSubmittedApplication(false);
              }}
            >
              Send application to DNB
            </Button>
          </FlexItem>
        </FlexContainer>
      </Section>
    </>
  );
};
