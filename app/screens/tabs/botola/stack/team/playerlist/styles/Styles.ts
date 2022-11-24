import { Image, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { COLOR } from "../../../../../../../assets/color";
import { MainText } from "../../../../../../../assets/text/Text";

export const PlayersWrapper = styled(View)`
    align-items: center;
`

export const Player = styled(TouchableOpacity)`
    background-color: white;
    width: 95%;
    padding: 10px;
    margin: 5px;
    flex-direction: row;
    border-radius: 10px;
    justify-content: space-between;
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

`

export const RightSection = styled(View)`

`

export const ShirtNumber = styled(MainText)`
    font-size: 40px;
    color: ${ COLOR.main };
`

export const PlayerName = styled(MainText)`
    font-size: 20px;
    color: ${ COLOR.textInverted };
`

export const TeamName = styled(MainText)`
    font-size: 13px;
    color: ${ COLOR.textInverted };
`