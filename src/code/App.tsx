import React from "react";
import { H1, H2, Section, Tabs } from "@dnb/eufemia";
import Welcome from "./Welcome";
import CustomerPage from "./Customer/Profile/CustomerPage";
import { TheoryPage, TransactionsPage } from "../ignore/codeDump";
import styled from "styled-components";

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const LeftArea = styled.div`
  flex-shrink: 1;
  overflow: hidden;
  background-color: yellow;
`;
const RightArea = styled.div`
  overflow: hidden;
  background-color: blue;
`;

export default function App() {
  return (
    <>
      <FlexWrapper>
        <LeftArea>
          <Tabs
            id="tabs"
            tabs_spacing
            tabs_style="mint-green"
            content_style="black-3"
            style={{
              marginLeft: "1rem",
              marginRight: "1rem",
              backgroundColor: "red",
            }}
            data={[
              {
                title: "Velkommen",
                key: "Velkommen",
              },
              {
                title: "Logg inn som kunde",
                key: "Kunde",
              },
              {
                title: "Logg inn som etterforsker",
                key: "Etterforsker",
              },
            ]}
            selected_key="Velkommen"
          />
        </LeftArea>

        <RightArea>
          <Tabs
            id="tabs"
            tabs_spacing
            tabs_style="mint-green"
            content_style="black-3"
            style={{
              marginLeft: "1rem",
              marginRight: "1rem",
              backgroundColor: "pink",
            }}
            data={[
              {
                title: "Teori",
                key: "Teori",
              },
            ]}
            selected_key="Velkommen"
          />
        </RightArea>
      </FlexWrapper>
      <Tabs.Content id="tabs">
        {({ key }) => {
          if (key == "Velkommen") {
            return <Welcome />;
          } else if (key == "Kunde") {
            return <CustomerPage />;
          } else if (key == "Etterforsker") {
            return <TransactionsPage />;
          } else if (key == "Teori") {
            return <TheoryPage />;
          }
        }}
      </Tabs.Content>
    </>
  );
}


/* Dette er gammel måte å skrive tabs på:
<Tabs
  tabs_spacing
  tabs_style="mint-green"
  content_style="black-3"
  style={{
    marginLeft: "1rem",
    marginRight: "1rem",
  }}
  width="100%"
>
  <Tabs.Content title="Velkommen">
    <Welcome />
  </Tabs.Content>
  <Tabs.Content title="Logg inn som kunde">
    <CustomerPage />
  </Tabs.Content>
  <Tabs.Content title="Logg inn som etterforsker">
    <Section spacing top bottom style_type="white">
      <H2 top={0} bottom>
        <TransactionsPage />
      </H2>
    </Section>
  </Tabs.Content>
</Tabs> 
*/
