import "@dnb/eufemia";
import { H1, P, Section, Space, Switch } from "@dnb/eufemia";
import FlexContainer from "@dnb/eufemia/components/flex/Container";
import PaymentCard, { PaymentCardCardStatus } from "@dnb/eufemia/extensions/payment-card";
import "@dnb/eufemia/extensions/payment-card/style";
import "@dnb/eufemia/style/themes/theme-ui/extensions";
import { useState } from "react";

export interface CardOverviewProps {
  setCurrentSubTab: Function;
}

export default function CardOverview(props: CardOverviewProps) {
  const { setCurrentSubTab } = props;
  setCurrentSubTab("CardOverview");

  const [card1, setCard1] = useState<PaymentCardCardStatus>("active");
  const [card2, setCard2] = useState<PaymentCardCardStatus>("active");
  const [card3, setCard3] = useState<PaymentCardCardStatus>("active");

  return (
    <Section style_type="white">
      <H1>Card's of the customer</H1>
      <P>
        Review status of cards, and block those who are not fulfilling the
        requirements.
      </P>
      <Space top bottom />

      {/* THE CODE BELOW IS WHAT THEY WILL CODE IN TASK 6, 
      AND IS HERE NOW ONLY TO SHOW WHAT THE ASSIGNMENT IS ABOUT */}

      {/* <FlexContainer align="center">
        <PaymentCard
          product_code="VX5"
          card_number="************1923"
          card_status={card1}
        />
        <Switch
          label="Block card"
          on_change={({ checked }) => {
            if (checked) return setCard1("blocked");
            else return setCard1("active");
          }}
        />
      </FlexContainer>

      <Space top bottom />

      <FlexContainer align="center">
        <PaymentCard
          product_code="053"
          card_number="************1923"
          card_status={card2}
        />
        <Switch
          label="Block card"
          on_change={({ checked }) => {
            if (checked) return setCard2("blocked");
            else setCard2("active");
          }}
        />
      </FlexContainer>

      <Space top bottom />
      <FlexContainer align="center">
        <PaymentCard
          product_code="VL2"
          card_number="************1923"
          card_status={card3}
        />
        <Switch
          label="Block card"
          on_change={({ checked }) => {
            if (checked) return setCard3("blocked");
            else setCard3("active");
          }}
        />
      </FlexContainer> */}
    </Section>
  );
}
