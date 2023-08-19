import { Image, View } from "react-native";
import styled from "styled-components";
import { MainText } from "../../../../../../../../../assets/text/Text";

export const IncidentWrapper = styled(View)`
  margin-top: 20px;
`;

export const IncidentItemWrapper = styled(View)`
  width: 100%;
`;

export const IncidentPeriod = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  margin: 3px 0;
  background-color: ${(props) => props.theme.background};
`;

export const IncidentItem = styled(View)`
  width: 60%;
  flex-direction: row;
  padding: 10px;
  border-radius: 10px;
  margin: 3px 0;
  background-color: ${(props) => props.theme.background};
  align-items: center;
`;

export const TextWrapper = styled(View)``;

export const IncidentParentElement = styled(View)`
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

export const HeadingText = styled(MainText)`
  color: ${(props) => props.theme.textInverted};
`;

export const TimeText = styled(MainText)`
  color: ${(props) => props.theme.textInverted};
`;

export const HelperText = styled(MainText)`
  color: ${(props) => props.theme.helperText};
  font-size: 10px;
`;

export const IncidentLogo = styled(Image)`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const PeroidText = styled(MainText)`
  color: ${(props) => props.theme.textInverted};
  font-size: 22px;
  margin: 0 30px;
`;

export const ScoreText = styled(MainText)`
  color: ${(props) => props.theme.textInverted};
  font-size: 16px;
`;

export const Time = styled(View)`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.main};
  position: absolute;
  right: 5px;
`;
