
import axios from 'axios';
import { useQuery } from 'react-query';
import { Event } from '../../../../../../types/events';
import Card from '../../../../../utils/card/Card';
import BotolaInfo from './botolainfo/BotolaInfo';
import { BotolaFixWrapper, Heading, HeroTitle, Logo, Spacer, StyledText } from './styles/Styles';

export default function Fixtures() {

  const { data, isLoading, error } = useQuery("fetch botola fixtures", async () => {
    const result = await axios.get(`https://api.sofascore.com/api/v1/unique-tournament/937/season/45552/events/next/0`);
    return result?.data;
  })

  if(isLoading) return <StyledText>loading...</StyledText>

  return (
    <BotolaFixWrapper contentContainerStyle={{ alignItems: 'center' }}>
      <HeroTitle>Moroccain Botola</HeroTitle>
      <Logo source={{ uri: "https://api.sofascore.app/api/v1/unique-tournament/937/image" }}></Logo>
      <Heading>Fixtures</Heading>
      {
        (error) ? <StyledText>error occured. Check your network</StyledText> : 
        data?.events.map((event: Event) => <Card event={ event } key={ event.id } />)
      }
      <Heading>Summary</Heading>
      <BotolaInfo />
      <Spacer />
    </BotolaFixWrapper>
  );
}
