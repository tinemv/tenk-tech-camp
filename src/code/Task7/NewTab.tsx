import { H2, P, Section } from "@dnb/eufemia";

export interface NewTabProps {
  setCurrentTab: Function;
}

export const NewTab = (props: NewTabProps) => {
  const { setCurrentTab } = props;
  setCurrentTab("new_tab");

  return (
    <>
      <Section spacing="small" left right style_type="white">
        <H2>A blank page</H2>
        <P>You need to remove what's here and add inn elements to create your own page.</P>
      </Section>
    </>
  );
};
