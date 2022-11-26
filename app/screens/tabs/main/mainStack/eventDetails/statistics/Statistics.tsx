import { useEffect, useState } from 'react'
import { withTheme } from 'styled-components';
import LineUps from './sections/lineups/LineUps';
import Stats from './sections/stats/Stats';
import Summary from './sections/summary/Summary';
import { ButtonLabel, Container, NavBar, NavItem, Spacer } from './styles/Styles'

type Props = {
  id: number,
  theme: any
}

function Statistics({ id, theme }: Props) {

  const [section, setSection] = useState<string>("stats");

  return (
    <>
      <Container style={{ elevation: 3 }}>
        <NavBar>
          <NavItem onPress={() => setSection("stats")}
            style={{
              backgroundColor: section === "stats" ? theme.main : theme.background,
            }}
          >
            <ButtonLabel style={{ color: section === "stats" ? theme.text : theme.helperText }}>Stats</ButtonLabel>
          </NavItem>
          <NavItem onPress={() => setSection("lineups")}
            style={{
              backgroundColor: section === "lineups" ? theme.main : theme.background,
            }}
          >
            <ButtonLabel style={{ color: section === "lineups" ? theme.text : theme.helperText }}>Line-up</ButtonLabel>
          </NavItem>
          <NavItem onPress={() => setSection("summary")}
            style={{
              backgroundColor: section === "summary" ? theme.main : theme.background,
            }}
          >
            <ButtonLabel style={{ color: section === "summary" ? theme.text : theme.helperText }}>Summary</ButtonLabel>
          </NavItem>
        </NavBar>
        {
          section === "stats" ? <Stats id={id} /> : section === "lineups" ? <LineUps id={id} /> : <Summary id={id} />
        }
      </Container>
      <Spacer />
    </>
  )
}

export default withTheme(Statistics);