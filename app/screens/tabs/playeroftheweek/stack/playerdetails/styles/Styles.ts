import { Image, ScrollView, View, Pressable } from "react-native";
import styled from "styled-components";
import { COLOR } from "../../../../../../assets/color";
import { MainText } from "../../../../../../assets/text/Text";

export const PlayerDetailsWrapper = styled(ScrollView)`
    background-color: ${ COLOR.background };
`

export const Header = styled(View)`
    flex-direction: row;
    padding: 5px 10px;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    border-radius: 10px;
    background-color: ${ COLOR.text };
    elevation: 10;
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
    top: 80px;
    left: 80px;
    width: 30px;
    height: 30px;
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

export const Stats = styled(View)`
    align-items: center;
    margin: 5px;
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
    border-radius: 5px;
    background-color: ${ COLOR.text };
`

export const Value = styled(MainText)`

`

export const Spacer = styled(View)`
    height: 60px;
`