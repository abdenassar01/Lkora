import { Away, Heading, Home, ItemWrapper, Jursey, Label, Manager, ManagerImage, ManagerName, SummaryWrapper } from './styles/Styles'

export default function Summary() {
  return (
    <SummaryWrapper contentContainerStyle={{ alignItems: 'center' }}>
      <Heading>Jursey</Heading>
      <ItemWrapper>
        <Home>
          <Jursey source={{ uri: "https://api.sofascore.app/api/v1/event/10385704/jersey/home/goalkeeper" }} accessibilityLabel="goalkeeper jursey"></Jursey>
        </Home>
        <Label>Goalkeeper</Label>
        <Away>
          <Jursey source={{ uri: "https://api.sofascore.app/api/v1/event/10385704/jersey/home/goalkeeper" }} accessibilityLabel="goalkeeper jursey"></Jursey>
        </Away>
      </ItemWrapper>
      <ItemWrapper>
        <Home>
          <Jursey source={{ uri: "https://api.sofascore.app/api/v1/event/10385704/jersey/home/goalkeeper" }} accessibilityLabel="goalkeeper jursey"></Jursey>
        </Home>
        <Label>Players</Label>
        <Away>
          <Jursey source={{ uri: "https://api.sofascore.app/api/v1/event/10385704/jersey/home/goalkeeper" }} accessibilityLabel="goalkeeper jursey"></Jursey>
        </Away>
      </ItemWrapper>
      <Heading>Jursey</Heading>
      <ItemWrapper>
        <Manager>
          <ManagerImage source={{ uri: "https://api.sofascore.app/api/v1/manager/53418/image" }} accessibilityLabel="home team manager"></ManagerImage>
          <ManagerName>Jose Morinho</ManagerName>
        </Manager>
        <Label>Managers</Label>
        <Manager>
          <ManagerImage source={{ uri: "https://api.sofascore.app/api/v1/manager/52829/image" }} accessibilityLabel="home team manager"></ManagerImage>
          <ManagerName>Jose Morino</ManagerName>
        </Manager>
      </ItemWrapper>  
    </SummaryWrapper>
  )
}