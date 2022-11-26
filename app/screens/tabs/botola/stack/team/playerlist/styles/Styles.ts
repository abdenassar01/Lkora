import { Image, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { MainText } from "../../../../../../../assets/text/Text";

export const PlayersWrapper = styled(View)`
    align-items: center;
`

export const Player = styled(TouchableOpacity)`
    background-color: ${ props => props.theme.text };
    width: 95%;
    padding: 10px;
    margin: 5px;
    flex-direction: row;
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;
`

export const Avatar = styled(Image)`
    width: 60px;
    height: 60px;
    border-radius: 50px;
`

export const LeftSection = styled(View)`
    flex-direction: row;
`

export const CentreSection = styled(View)`
    margin-left: 10px;
`

export const RightSection = styled(View)`
    align-items: center;
    justify-content: center;
    border: 2px solid ${ props => props.theme.main };
    width: 50px;
    height: 50px;
    border-radius: 50px;
`

export const ShirtNumber = styled(MainText)`
    font-size: 25px;
    color: ${ props => props.theme.main };
`

export const PlayerName = styled(MainText)`
    font-size: 20px;
    color: ${ props => props.theme.textInverted };
`

export const TeamName = styled(MainText)`
    font-size: 13px;
    color: ${ props => props.theme.textInverted };
`

export const Spacer = styled(View)`
    height: 60px;
`