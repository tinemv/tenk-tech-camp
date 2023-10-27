import React, { useState } from "react";
import { Dropdown, H1, H3, Input, Section, P, H2, Space, Button, Slider, Timeline, Dialog, Switch} from "@dnb/eufemia";
import loan from "../../ignore/loan.png"
import '@dnb/eufemia/style/themes/theme-ui/extensions'
import '@dnb/eufemia/extensions/payment-card/style'
import '@dnb/eufemia'
import PaymentCard, {
  getCardData,
  Designs,
  ProductType,
  CardType,
  BankAxeptType,
} from '@dnb/eufemia/extensions/payment-card'
import Card from "@dnb/eufemia/icons/dnb/card"
import { bell_medium, confetti } from "@dnb/eufemia/icons";

export interface TransactionsProps {
    setCurrentSubTab: Function;
}

const calculateLoan = () => {
  const card = document.getElementsByClassName("cheap_card");
}

export default function CardOverview(props: TransactionsProps) {
  const { setCurrentSubTab } = props;
  const [ sagaPlatinumCard, setSagaPlatinumCard] = useState("active")
  const [ privateBankingCard, setPrivatBankingCard] = useState("active")
  
  setCurrentSubTab("CardOverview");

  return (
    <Section spacing="large" left right style_type="white" style={{display:"flex", justifyContent:"center"}}>
      <div className="loan-container">
        <H1>Card</H1>
        <Section spacing="large" style_type="white" style={{display: "inline"}}>
            <H2>Review status of cards, and block those who are not fulfilling the requirements.</H2>
        </Section>
        <Section spacing="large" style_type="white">
          <Space space="20px" style={{display: "flex"}}>
            <PaymentCard 
              product_code="053" 
              card_number="************1923"
              card_status="active"
              className="cheap_card"/>
            <Space space="small">
              <Timeline>
                <Timeline.Item
                  title="Completed event"
                  subtitle="10. september 2021"
                  state="completed"
                />
                <Timeline.Item
                  title="Completed event"
                  state="completed"
                  icon={confetti}
                />
              </Timeline>
            </Space>
          </Space>
          <Space space="20px" style={{display: "flex"}}>
            <PaymentCard
              card_status="blocked"
              product_code="VP2" 
              card_number="************3790" />
              <Space space="small">
              <Timeline>
                <Timeline.Item
                  title="Completed event"
                  subtitle="10. september 2021"
                  state="completed"
                />
                <Timeline.Item
                  title="Current event"
                  infoMessage="User declined by non compliance of KYC & AML."
                  state="current"
                />
                <Timeline.Item title="Upcoming event" state="upcoming" />
              </Timeline>
            </Space>
            <Switch label="Block" on_change={({ checked }) => 
            checked?
            setSagaPlatinumCard("blocked") : setSagaPlatinumCard("active") } />           
          </Space>
          <Space space="20px" style={{display: "flex"}}>
            <PaymentCard 
              product_code="VP3" 
              card_number="************0001"
              card_status="blocked"
              />  
              <Space space="small">
              <Timeline>
                <Timeline.Item
                  title="Completed event"
                  subtitle="10. september 2021"
                  state="completed"
                />
                <Timeline.Item
                  title="Current event"
                  infoMessage="Applicant do not have enough money for this card."
                  state="current"
                />
                <Timeline.Item title="Upcoming event" state="upcoming" />
              </Timeline>
            </Space>
            <Switch label="Block" on_change={({ checked }) => setPrivatBankingCard(checked)} /> 
          </Space>

          <Space style={{display: "flex", justifyContent: "center", paddingTop: "50px"}}>
            {/* Task 6A: create button */}
            <Button
              text="Save changes and block cards" 
              title="apply"
              variant="secondary"
              icon="chevron_right"
              size="default"
              right
              onClick={() => calculateLoan()}
            /> 
          </Space>
       </Section>
      </div>
    </Section>
  );
}

