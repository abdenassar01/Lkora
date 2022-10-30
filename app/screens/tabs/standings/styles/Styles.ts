import { Image, Pressable, ScrollView, View } from "react-native";
import styled from "styled-components";
import { COLOR } from "../../../../assets/color";
import { MainText } from "../../../../assets/text/Text";


export const BotolaFixWrapper = styled(ScrollView)`
    background-color: ${ COLOR.background };   
`

export const BigHeading = styled(MainText)`
    font-size: 25px;
    padding: 10px;
    color: ${ COLOR.main };
    text-align: center;
`

export const TournamentsWrapper = styled(ScrollView)`
    padding: 10px;
`

export const TournomantItemPressable = styled(Pressable)`

`

export const TournomantItem = styled(MainText)`
    padding: 5px 10px;
    margin: 0 3px;
    border-radius: 50px;
    color: ${ COLOR.helperText };
    background-color: ${ COLOR.text };
    font-weight: 600;  
    font-size: 16px; 
`

export const TieBreakingRule = styled(View)`
    margin: 10px;
    padding: 10px;
    background-color: ${ COLOR.text }; 
    align-items: center;
    border-radius: 10px;
    elevation: 5;
`

export const TieBreakingRuleHeading = styled(MainText)`
    text-align: center;
    color: ${ COLOR.main };
    border-bottom-style: solid;
    border-bottom-color: ${ COLOR.main };
    border-bottom-width: 2px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    width: 60%;
    font-size: 16px;
    margin-bottom: 10px;
`

export const TieBreakingRuleText = styled(MainText)`
    text-align: center;
`

export const Table = styled(View)`
    margin: 10px;
    padding: 10px;
    background-color: ${ COLOR.text }; 
    border-radius: 10px;
    elevation: 5;
`

export const Row = styled(View)`
    flex-direction: row;
    align-items: center;
    padding-top: 5px;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-bottom-color: ${ COLOR.background };
`

export const Column = styled(MainText)`
    padding:  2px;
    height: 30px; 
    text-align: center;
    align-items: center;
`

export const Spacer = styled(View)`
    height: 60px;
`

export const Avatar = styled(Image)`
    width: 20px;
    height: 20px;
    top: -3px;
`