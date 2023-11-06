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
      {/* Task 4: start implementing here ↓ */}
    </Section>
  );
}
