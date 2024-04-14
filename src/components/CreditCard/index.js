// Write your code here
import {useState} from 'react'

import {
  BgContainer,
  LeftContainer,
  DivContainer,
  Heading,
  HrLine,
  CreditCardBg,
  Card,
  CardNo,
  CardNameHeading,
  CardPersonName,
  RightContainer,
  PaymentCardContainer,
  PaymentHeading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNo, setCardNo] = useState('')
  const [cardPersonName, setCardPersonName] = useState('')
  const cardPersonNameText = cardPersonName.toUpperCase()

  const onChangeCardNo = event => {
    setCardNo(event.target.value)
  }

  const onChangeCardPersonName = event => {
    setCardPersonName(event.target.value)
  }

  return (
    <BgContainer>
      <LeftContainer>
        <DivContainer>
          <Heading>CREDIT CARD</Heading>
          <HrLine />
        </DivContainer>
        <CreditCardBg>
          <Card data-testid="creditCard">
            <CardNo>{cardNo}</CardNo>
            <CardNameHeading>CARDHOLDER NAME</CardNameHeading>
            <CardPersonName>{cardPersonNameText}</CardPersonName>
          </Card>
        </CreditCardBg>
      </LeftContainer>
      <RightContainer>
        <PaymentCardContainer>
          <PaymentHeading>Payment Method</PaymentHeading>
          <Input
            type="text"
            placeholder="Card Number"
            value={cardNo}
            onChange={onChangeCardNo}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            value={cardPersonName}
            onChange={onChangeCardPersonName}
          />
        </PaymentCardContainer>
      </RightContainer>
    </BgContainer>
  )
}

export default CreditCard
