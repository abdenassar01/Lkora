import { Image, Pressable, ScrollView, View } from "react-native";
import styled from "styled-components";
import { MainText } from "../../../../../../assets/text/Text";

export const PlayerListWrapper = styled(ScrollView)`
  background-color: ${(props) => props.theme.background};
`;

export const Heading = styled(MainText)`
  margin: 10px;
  text-align: center;
  color: ${(props) => props.theme.main};
  font-size: 20px;
  font-weight: 600;
  border-bottom-color: purple;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.text};
  padding: 10px;
  border-radius: 5px;
  elevation: 5;
`;

export const PressablePlayer = styled(Pressable)``;

export const Player = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin: 0 10px;
  background-color: ${(props) => props.theme.text};
  border-radius: 50px;
  margin-bottom: 10px;
`;

export const Left = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const PlayerAvatar = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 50px;
`;

export const PlayerName = styled(MainText)`
  font-size: 16px;
  margin-left: 10px;
  color: ${(props) => props.theme.textInverted};
`;

export const TeamName = styled(MainText)`
  font-size: 16px;
  margin-right: 5px;
  color: ${(props) => props.theme.textInverted};
`;

export const RatingWrapper = styled(View)`
  background-color: ${(props) => props.theme.main};
  width: 40px;
  height: 40px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

export const Rating = styled(MainText)`
  font-size: 18px;
  color: ${(props) => props.theme.text};
`;

export const TmpText = styled(MainText)`
  font-size: 18px;
  color: ${(props) => props.theme.main};
`;

export const Spacer = styled(View)`
  height: 55px;
`;
