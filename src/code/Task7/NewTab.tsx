import { Card, H1, H2, P, Section, Upload } from "@dnb/eufemia";
import { Field, Form } from "@dnb/eufemia/extensions/forms";

export interface NewTabProps {
  setCurrentTab: Function;
}

export const NewTab = (props: NewTabProps) => {
  const { setCurrentTab } = props;
  setCurrentTab("new_tab");

  return (
    <>
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

          <Field.String label="Fornavn" />
          <Field.String label="Etternavn" />
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
          />
        </Card>

        <Card top>
          <Form.SubHeading>Upload documents</Form.SubHeading>
          <P>Upload CV and other documentation you find relevant</P>

          <Upload
            top
            acceptedFileTypes={["jpg", "png"]}
            id="upload-basic"
            title="Upload document"
            text="Drag & drop, or choose a file you would like to upload."
            fileTypeDescription="Allowed file formats:"
            fileSizeDescription="Max file size:"
          />
        </Card>
        <Form.SubmitButton top bottom>
          Submit application
        </Form.SubmitButton>
      </Section>
    </>
  );
};
