import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { UniqueTournomant } from '../../../../../../../types/uniqueTournomant'
import { Logo } from '../styles/Styles'
import { BotolaInfoWrapper, Card, Label, TeamName } from './styles/Styles'

export default function BotolaInfo() {

    const { data, isLoading, error } = useQuery<UniqueTournomant>("get Botola Infos", async () => {
        const result = await axios.get(`https://api.sofascore.com/api/v1/unique-tournament/937`)
        return result.data;
    })

    if(isLoading) return <Label>loading...</Label>
    if(error) return <Label>error</Label>

  return (
    <BotolaInfoWrapper>
        <Card>
            <Logo source={{ uri: `https://api.sofascore.app/api/v1/team/41757/image` }}></Logo>
            <TeamName>{ data?.titleHolder?.name }</TeamName>
            <Label>Title Holder</Label>
        </Card>
      <Label>BotolaInfo</Label>
    </BotolaInfoWrapper>
  )
}