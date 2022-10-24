import axios from 'axios'
import { useQuery } from 'react-query'
import { Standing } from '../../../../../../types/standing'
import { BigHeading, BotolaFixWrapper, Column, Row, Spacer, Table, TieBreakingRule, TieBreakingRuleHeading, TieBreakingRuleText } from './styles/Styles'

export default function Fixtures() {

    const { data, isLoading, error } = useQuery<Standing[]>("get botola standing", async () => {
        const result = await axios.get(`https://api.sofascore.com/api/v1/unique-tournament/937/season/45552/standings/total`);
        return result.data.standings
    })

    function truncateString(str: any, num: number) {
        if (str.length > num) {
        return str.slice(0, num) + "...";
        } else {
        return str;
        }
    }

    if(isLoading) return <TieBreakingRuleText>loading...</TieBreakingRuleText>
    if(error) return <TieBreakingRuleText>check network</TieBreakingRuleText>

  return (
    <BotolaFixWrapper contentContainerStyle={{ justifyContent: 'center' }}>
      <BigHeading>{ data && data[0]?.name }</BigHeading>
      <TieBreakingRule>
        <TieBreakingRuleHeading>Tie Breaking Rule</TieBreakingRuleHeading>
        <TieBreakingRuleText>
          { data && data[0]?.tieBreakingRule?.text }
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

        {
            data && data[0]?.rows.map((row) => (
                <Row key={ row.id }>
                    <Column style={{ width: 20 }}>{ row.position }</Column>
                    <Column style={{ width: 170 }}>{ truncateString(row.team.name, 20) }</Column>
                    <Column style={{ width: 20 }}>{ row.matches }</Column>
                    <Column style={{ width: 20 }}>{ row.wins }</Column>
                    <Column style={{ width: 20 }}>{ row.draws }</Column>
                    <Column style={{ width: 20 }}>{ row.losses }</Column>
                    <Column style={{ width: 20 }}>{ row.scoresFor }</Column>
                    <Column style={{ width: 20 }}>{ row.scoresAgainst }</Column>
                    <Column style={{ width: 30 }}>{ row.points }</Column>
                </Row>
            ))
        }
        </Table>
        <Spacer />
    </BotolaFixWrapper>
  )
}