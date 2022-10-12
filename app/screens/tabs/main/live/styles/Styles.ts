import { Image, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { COLOR } from "../../../../../assets/color";

export const LiveCardWrapperLink = styled(TouchableOpacity)`

`

export const LiveCardWrapper = styled(View)`
    padding: 10px 5px;
    align-items: center;
    width: 300px;
    background-color: ${ COLOR.main };
    border-radius: 20px;
`

export const LeagueTitle = styled(Text)`
    font-weight: bold;   
    color: ${ COLOR.text };
`

export const GameTitle = styled(Text)`
    font-size: 12px;
    color: ${ COLOR.helperText };
`

export const MatchInfo = styled(View)`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
`

export const Team = styled(View)`
    align-items: center;
`

export const Avatar = styled(Image)`
    width: 70px;
    height: 70px;
`

export const Title = styled(Text)`
    font-weight: bold;
    color: black;
    color: ${ COLOR.text };
`

export const HelperText = styled(Text)`
    color: ${ COLOR.helperText };
    font-size: 12px;
`

export const Score = styled(View)`
    align-items: center;
`

export const Time = styled(Text)`
    font-size: 12px;
    color: ${ COLOR.helperText };
`

export const MatchScore = styled(Text)`
    font-size: 25px;
    font-weight: bold;
    color: ${ COLOR.text };
`