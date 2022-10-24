import { BigHeading, BotolaFixWrapper, Column, Row, Table, TieBreakingRule, TieBreakingRuleHeading, TieBreakingRuleText } from './styles/Styles'

export default function Fixtures() {
  return (
    <BotolaFixWrapper contentContainerStyle={{ justifyContent: 'center' }}>
      <BigHeading>Botola Pro</BigHeading>
      <TieBreakingRule>
        <TieBreakingRuleHeading>Tie Breaking Rule</TieBreakingRuleHeading>
        <TieBreakingRuleText>
         In the event that two (or more) teams finish with an equal number of points, the following rules break the tie:  1. Head-to-head games between the teams concerned   1a. Points total  1b. Goal difference  1c. Goals scored 2. Goal difference 3. Goals scored
        </TieBreakingRuleText>
      </TieBreakingRule>
      <Table>
        <Row>
            <Column style={{ width: 20 }}>#</Column>
            <Column style={{ width: 170 }}>Team</Column>
            <Column style={{ width: 20 }}>P</Column>
            <Column style={{ width: 20, color: "white", backgroundColor: "#07c05a" }}>W</Column>
            <Column style={{ width: 20, color: "white", backgroundColor: "#f8b600" }}>D</Column>
            <Column style={{ width: 20, color: "white", backgroundColor: "#e30044" }}>L</Column>
            <Column style={{ width: 20 }}>+</Column>
            <Column style={{ width: 20 }}>-</Column>
            <Column style={{ width: 30 }}>Pts</Column>
        </Row> 
        <Row>
            <Column style={{ width: 20 }}>1</Column>
            <Column style={{ width: 170 }}>Raja Club Athletic</Column>
            <Column style={{ width: 20 }}>6</Column>
            <Column style={{ width: 20 }}>1</Column>
            <Column style={{ width: 20 }}>3</Column>
            <Column style={{ width: 20 }}>2</Column>
            <Column style={{ width: 20 }}>5</Column>
            <Column style={{ width: 20 }}>6</Column>
            <Column style={{ width: 30 }}>6</Column>
        </Row>
      </Table>
    </BotolaFixWrapper>
  )
}