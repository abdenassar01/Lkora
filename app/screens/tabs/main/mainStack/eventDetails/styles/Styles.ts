import { ScrollView } from "react-native";
import styled from "styled-components";

export const EventDetailsWrappe = styled(ScrollView)`
  background-color: ${(props) => props.theme.background};
  padding: 5px;
`;
