import { useEffect, useState } from 'react'
import { COLOR } from '../../../../../../assets/color';
import LineUps from './sections/lineups/LineUps';
import Stats from './sections/stats/Stats';
import Summary from './sections/summary/Summary';
import { ButtonLabel, Container, NavBar, NavItem, Spacer } from './styles/Styles'

export default function Statistics() {

  const [ section, setSection ] = useState<string>("stats");

  useEffect(() => {
    console.log(section)
  },[ section ])

  return (
    <>
    
      <Container style={{ elevation: 3 }}>
        <NavBar>
          <NavItem onPress={ () => setSection("stats") } 
            style={{ 
              backgroundColor: section === "stats" ? COLOR.main : COLOR.background,
            }}
          >
            <ButtonLabel style={{ color: section === "stats" ? COLOR.text : COLOR.helperText }}>Stats</ButtonLabel>
          </NavItem>
          <NavItem onPress={ () => setSection("lineups") } 
            style={{ 
              backgroundColor: section === "lineups" ? COLOR.main : COLOR.background,
            }}
          >
            <ButtonLabel style={{ color: section === "lineups" ? COLOR.text : COLOR.helperText }}>Line-up</ButtonLabel>
          </NavItem>
          <NavItem onPress={ () => setSection("summary") } 
            style={{ 
              backgroundColor: section === "summary" ? COLOR.main : COLOR.background,
            }}
          >
            <ButtonLabel style={{ color: section === "summary" ? COLOR.text : COLOR.helperText }}>Summary</ButtonLabel>
          </NavItem>
        </NavBar>
        {
          section === "stats" ?  <Stats /> : section === "lineups" ? <LineUps /> : <Summary />
        }
      </Container>
      <Spacer />
    </>
    
  )
}