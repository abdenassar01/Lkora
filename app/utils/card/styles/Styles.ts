import { Image, Pressable, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { MainText } from "../../../assets/text/Text";

export const CardWrapperLink = styled(TouchableOpacity)``;

export const CardWrapper = styled(View)`
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 5px 5px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.text};
`;

export const Team = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const Name = styled(MainText)`
  padding: 0 10px;
  font-weight: 500;
  font-size: 16px;
  width: 120px;
  text-align: right;
  color: ${(props) => props.theme.textInverted};
`;

export const NameFlipped = styled(Name)`
  text-align: left;
`;

export const Avatar = styled(Image)`
  width: 35px;
  height: 35px;
`;

export const FixtureTime = styled(View)`
  width: 20%;
  align-items: center;
`;

export const FinishedMatchStatus = styled(View)`
  width: 20%;
`;

export const Score = styled(MainText)`
  text-align: center;
  color: ${(props) => props.theme.main};
`;

export const Time = styled(MainText)`
  font-size: 16px;
  color: orange;
`;

export const DateCmp = styled(MainText)`
  font-size: 12px;
  color: ${(props) => props.theme.helperText};
`;

export const Status = styled(MainText)`
  font-size: 8px;
  color: ${(props) => props.theme.text};
  padding: 2px 10px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.main};
  text-align: center;
  margin: 0 5px;
`;
