import { View } from "react-native";
import styled from "styled-components";
import { MainText } from "../../../../../../../assets/text/Text";

export const LiveCartWrapper = styled(View)`
  padding: 10px;
  width: 80%;
  margin: 0 10%;
  height: 100px;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.text};
  elevation: 5;
`;

export const LiveText = styled(MainText)`
  text-align: center;
  font-size: 16px;
  color: ${(props) => props.theme.textInverted};
`;
