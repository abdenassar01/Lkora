import { Image, ScrollView, View, Pressable } from "react-native";
import styled from "styled-components";
import { COLOR } from "../../../../../../assets/color";
import { MainText } from "../../../../../../assets/text/Text";

export const PlayerDetailsWrapper = styled(View)`
    background-color: ${ COLOR.background };
`

export const Header = styled(View)`
    flex-direction: row;
    padding: 5px 10px;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
`

export const BackIcon = styled(Pressable)`

`

export const HeaderTitle = styled(MainText)`
    font-size: 20px;
    color: ${ COLOR.main };
`

export const HeroSection = styled(View)`
    flex-direction: row;
    padding: 10px;
    align-items: center;
    background-color: white;
    margin: 10px;
    border-radius: 10px;
`

export const Avatar = styled(Image)`
    width: 100px;
    height: 100px;
    border-radius: 50px;
`

export const Rating = styled(View)`
    position: absolute;
    top: 85px;
    left: 85px;
    width: 25px;
    height: 25px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    background-color: ${ COLOR.main };
`

export const RatingText = styled(MainText)`
    color: ${ COLOR.text };
    font-size: 16px;
`

export const PlayerInfo = styled(View)`
    margin-left: 20px;
`

export const Paragraph = styled(MainText)`
    font-size: 16px;
    font-weight: 600;
`

export const Stats = styled(ScrollView)`
    background-color: ${ COLOR.text };
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
`

export const Heading = styled(MainText)`
    border-bottom-style: solid;
    border-bottom-color: purple;
    border-bottom-width: 2px; 
    font-size: 23px;
    padding: 0 20px;
    color: ${ COLOR.main };
    margin-bottom: 20px;
`

export const StatsItem = styled(View)`
    flex-direction: row;
    padding: 5px 10px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
    border-radius: 10px;
    background-color: ${ COLOR.background };
`

export const Value = styled(MainText)`

`