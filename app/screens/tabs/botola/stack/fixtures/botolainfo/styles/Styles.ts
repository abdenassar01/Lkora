import { Image, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { MainText } from "../../../../../../../assets/text/Text";

export const BotolaInfoWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 10px 40px;
`;

export const Card = styled(View)`
  padding: 20px 30px;
  align-items: center;
  background-color: ${(props) => props.theme.text};
  border-radius: 10px;
  elevation: 5;
`;

export const Team = styled(View)`
  align-items: center;
`;

export const TeamPressable = styled(TouchableOpacity)``;

export const TeamName = styled(MainText)`
  font-size: 12px;
  color: ${(props) => props.theme.textInverted};
`;

export const TeamLogo = styled(Image)`
  width: 70px;
  height: 70px;
`;

export const Label = styled(MainText)`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.main};
`;

export const HelperText = styled(MainText)`
  font-size: 10px;
  color: ${(props) => props.theme.helperText};
`;

export const BotolaColorsLine = styled(View)`
  height: 20px;
  width: 70%;
  margin: 10px;
  border-radius: 50px;
  flex-direction: row;
`;

export const LeftLine = styled(View)`
  width: 60%;
  border-radius: 50px;
`;
