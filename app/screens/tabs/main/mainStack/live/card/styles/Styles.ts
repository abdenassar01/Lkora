import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { COLOR } from "../../../../../../../assets/color";
import { HeadingText, MainText } from "../../../../../../../assets/text/Text";

export const LiveCardWrapperLink = styled(TouchableOpacity)`

`

export const LiveCardWrapperView = styled(View)`
    padding: 20px 10px;
    align-items: center;
    width: 300px;
    margin-right: 10px;
    background-color: ${ COLOR.helperText };
    border-radius: 20px;
` 

export const LiveCardWrapper = styled(ImageBackground)`
    padding: 20px 10px;
    align-items: center;
    width: 300px;
    margin-right: 10px;
`

export const LeagueTitle = styled(HeadingText)`
    font-weight: bold;   
    text-align: center;
    color: ${ COLOR.text };
`

export const GameTitle = styled(Text)`
    font-size: 12px;
    color: ${ COLOR.text };
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
    width: 100px;
`

export const Avatar = styled(Image)`
    width: 60px;
    height: 60px;
`

export const Title = styled(MainText)`
    font-weight: bold;
    color: black;
    color: ${ COLOR.text };
`

export const HelperText = styled(MainText)`
    color: ${ COLOR.helperText };
    font-size: 12px;
`

export const Score = styled(View)`
    align-items: center;
`

export const Time = styled(MainText)`
    font-size: 12px;
    color: ${ COLOR.text };
    padding: 2px 10px;
    border-radius: 3px;
    background-color: #FF2782;
    margin-top: 20px;
`

export const MatchScore = styled(MainText)`
    font-size: 25px;
    font-weight: bold;
    color: ${ COLOR.text };
`