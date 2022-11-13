import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { UniqueTournomant } from '../../../../../../../types/uniqueTournomant'
import { BotolaColorsLine, BotolaInfoWrapper, Card, HelperText, Label, LeftLine, Team, TeamLogo, TeamName } from './styles/Styles'

export default function BotolaInfo() {

    const { data, isLoading, error } = useQuery<UniqueTournomant>("get Botola Infos", async () => {
        const result = await axios.get(`https://api.sofascore.com/api/v1/unique-tournament/937`)
        return result.data.uniqueTournament;
    })

    if(isLoading) return <Label>loading...</Label>
    if(error) return <Label>error</Label>

  return (
    <>
        <BotolaInfoWrapper>
            <Card>
                <Team>
                    <TeamLogo source={{ uri: `https://api.sofascore.app/api/v1/team/${ data?.titleHolder.id }/image` }}></TeamLogo>
                    <TeamName>{ data?.titleHolder?.name }</TeamName>
                </Team>
                <Label>Title Holder</Label>
                <HelperText>last season</HelperText>
            </Card>
            <Card>
                <Team>
                    <TeamLogo source={{ uri: `https://api.sofascore.app/api/v1/team/${ data?.mostTitlesTeams[0].id }/image` }}></TeamLogo>
                    <TeamName>{ data?.titleHolder?.name }</TeamName>
                </Team>
                <Label>Most Titled</Label>
                <HelperText>{ data?.mostTitles + " Times" }</HelperText>
            </Card>
        </BotolaInfoWrapper>
        <BotolaColorsLine style={{ backgroundColor: data?.secondaryColorHex }}>
            <LeftLine  style={{ backgroundColor: data?.primaryColorHex }}></LeftLine>
        </BotolaColorsLine>
    </>
  )
}