import { Image, ScrollView, View } from "react-native";
import styled from "styled-components";
import { COLOR } from "../../../../../../assets/color";
import { MainText } from "../../../../../../assets/text/Text";

export const TeamWrapper = styled(ScrollView)`
  background-color: ${(props) => props.theme.background};
`;

export const Card = styled(View)`
  margin: 10px;
  flex-direction: row;
  padding: 10px;
  width: 95%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.text};
  align-items: center;
  elevation: 5;
`;

export const TournomantLogo = styled(Image)`
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  opacity: 0.4;
`;

export const CardRightSide = styled(View)`
  margin-left: 10px;
`;

export const Heading = styled(MainText)`
  font-size: 14px;
  color: ${(props) => props.theme.textInverted};
`;

export const Avatar = styled(Image)`
  width: 80px;
  height: 80px;
  border-radius: 50px;
`;

export const Title = styled(MainText)`
  text-align: center;
  font-size: 20px;
  margin: 5px 0;
  color: ${(props) => props.theme.main};
`;

export const StaduimImage = styled(Image)`
  width: 150px;
  height: 80px;
  position: absolute;
  right: 10px;
  border-radius: 10px;
`;

export const Spacer = styled(View)`
  height: 75px;
`;
