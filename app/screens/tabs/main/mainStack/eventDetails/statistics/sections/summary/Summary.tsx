import axios from 'axios'
import { useQuery } from 'react-query'
import { Away, Heading, Home, ItemWrapper, Jursey, Label, Manager, ManagerImage, ManagerName, SummaryWrapper } from './styles/Styles'

type Props = {
  id: number
}

export default function Summary({ id }: Props) {

  const { data, isFetching, error } = useQuery("match stats", async () => {
    const response = await axios.get(`https://api.sofascore.com/api/v1/event/${ id }/managers`)
    const data = response.data
    return data
  })

  if(isFetching) return <Label>loading...</Label>
  if(error) return <Label>error</Label>

  return (
    <SummaryWrapper contentContainerStyle={{ alignItems: 'center' }}>
      <Heading>Jursey</Heading>
      <ItemWrapper>
        <Home>
          <Jursey source={{ uri: `https://api.sofascore.app/api/v1/event/${ id }/jersey/home/goalkeeper` }} accessibilityLabel="goalkeeper jursey"></Jursey>
        </Home>
        <Label>Goalkeeper</Label>
        <Away>
          <Jursey source={{ uri: `https://api.sofascore.app/api/v1/event/${ id }/jersey/away/goalkeeper` }} accessibilityLabel="goalkeeper jursey"></Jursey>
        </Away>
      </ItemWrapper>
      <ItemWrapper>
        <Home>
          <Jursey source={{ uri: `https://api.sofascore.app/api/v1/event/${ id }/jersey/home/player` }} accessibilityLabel="goalkeeper jursey"></Jursey>
        </Home>
        <Label>Players</Label>
        <Away>
          <Jursey source={{ uri: `https://api.sofascore.app/api/v1/event/${ id }/jersey/away/player` }} accessibilityLabel="goalkeeper jursey"></Jursey>
        </Away>
      </ItemWrapper>
      <Heading>Managers</Heading>
      <ItemWrapper>
        <Manager>
          <ManagerImage source={{ uri: `https://api.sofascore.app/api/v1/manager/${ data?.homeManager?.id }/image` }} accessibilityLabel="home team manager"></ManagerImage>
          <ManagerName>{ data?.homeManager?.name }</ManagerName>
        </Manager>
        <Label>Managers</Label>
        <Manager>
          <ManagerImage source={{ uri: `https://api.sofascore.app/api/v1/manager/${ data?.awayManager?.id }/image` }} accessibilityLabel="home team manager"></ManagerImage>
          <ManagerName>{ data?.awayManager?.name }</ManagerName>
        </Manager>
      </ItemWrapper>  
    </SummaryWrapper>
  )
}