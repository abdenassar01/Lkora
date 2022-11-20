import axios from 'axios'
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query'
import { Standing } from '../../../../types/standing';
import { COLOR } from '../../../assets/color';
import { Tournomant, TOURNOMANTS } from '../../../assets/tournomants';
import SkeltonStandingLoader from './loader/SkeltonStandingLoader';
import SkeltonStandingRefetchLoader from './loader/SkeltonStandingRefetchLoader';
import { Avatar, BigHeading, BotolaFixWrapper, Column, Row, Spacer, SpacerHorisontal, Table, TieBreakingRule, TieBreakingRuleHeading, TieBreakingRuleText, TournamentsWrapper, TournomantItem, TournomantItemPressable } from './styles/Styles'

export default function Fixtures() {

  const [ tournomantId, setTournomantId ] = useState<number>(16)
  const [ seasonId, setSeasonId ] = useState<number>(41087)

    const { data, isLoading, error, refetch, isRefetching } = useQuery<Standing[]>("get botola standing", async () => {
        const result = await axios.get(`https://api.sofascore.com/api/v1/unique-tournament/${ tournomantId }/season/${ seasonId }/standings/total`);
        return result.data.standings
    })

    const onTournomantChange = (tournomant: Tournomant) => {
      setSeasonId(tournomant.seasonId);
      setTournomantId(tournomant.id);
    }

    useEffect(() => {
      refetch();
    },[tournomantId])

    if(isLoading) return <SkeltonStandingLoader />
    if(error) return <TieBreakingRuleText>check network</TieBreakingRuleText>

  return (
    <BotolaFixWrapper contentContainerStyle={{ justifyContent: 'center' }}>
      <BigHeading>{ data && data[0]?.name }</BigHeading>
      <TournamentsWrapper horizontal>
        {
          TOURNOMANTS.map((tournomant) => (
              <TournomantItemPressable key={ tournomant.id } onPress={ () => onTournomantChange(tournomant) }>          
                <TournomantItem 
                  style={{ 
                    backgroundColor: 
                      (tournomantId === tournomant.id) ? COLOR.main : COLOR.text, 
                    color: (tournomantId === tournomant.id) ? COLOR.text : COLOR.helperText
                  }}  
                >{ tournomant.label }</TournomantItem>
              </TournomantItemPressable> 
          ))
        }
        <SpacerHorisontal />
      </TournamentsWrapper>
      <TieBreakingRule>
        <TieBreakingRuleHeading>Tie Breaking Rule</TieBreakingRuleHeading>
        <TieBreakingRuleText>
          { 
            (isRefetching) ? "Loading..." :
            data && data[0]?.tieBreakingRule?.text 
          }
        </TieBreakingRuleText>
      </TieBreakingRule>

        {
          (isRefetching) ? <SkeltonStandingRefetchLoader /> :
          data?.map(group => (
            <Table key={ Math.random() * Math.random() }>
              <Row>
                  <Avatar source={{ uri: `https://api.sofascore.app/api/v1/unique-tournament/${ tournomantId }/image` }} ></Avatar>
                  <Column style={{ width:  "7%" }}>#</Column>
                  <Column style={{ width: "40%", textAlign: 'left' }}>Team</Column>
                  <Column style={{ width:  "6.5%" }}>P</Column>
                  <Column style={{ width:  "6.5%", color: "white", backgroundColor: "#07c05a" }}>W</Column>
                  <Column style={{ width:  "6.5%", color: "white", backgroundColor: "#f8b600" }}>D</Column>
                  <Column style={{ width:  "6.5%", color: "white", backgroundColor: "#e30044" }}>L</Column>
                  <Column style={{ width:  "6.5%" }}>+</Column>
                  <Column style={{ width:  "6.5%" }}>-</Column>
                  <Column style={{ width:  "9%" }}>Pts</Column>
              </Row>

              {
                  group?.rows.map((row) => (
                      <Row key={ row.id }>
                          <Avatar source={{ uri: `https://api.sofascore.app/api/v1/team/${ row.team.id }/image` }} ></Avatar>
                          <Column style={{ width: "7%" }}>{ row.position }</Column> 
                          <Column style={{ width: "40%", textAlign: 'left' }}>
                            { row.team.shortName }</Column>
                          <Column style={{ width: "6.5%" }}>{ row.matches }</Column>
                          <Column style={{ width: "6.5%" }}>{ row.wins }</Column>
                          <Column style={{ width: "6.5%" }}>{ row.draws }</Column>
                          <Column style={{ width: "6.5%" }}>{ row.losses }</Column>
                          <Column style={{ width: "6.5%" }}>{ row.scoresFor }</Column>
                          <Column style={{ width: "6.5%" }}>{ row.scoresAgainst }</Column>
                          <Column style={{ width: "9%" }}>{ row.points }</Column>
                      </Row>
                  ))
              }
              </Table>
          ))
        }
        <Spacer />
    </BotolaFixWrapper>
  )
}