import { Image, Pressable, ScrollView, View } from "react-native";
import styled from "styled-components";
import { MainText } from "../../../../assets/text/Text";


export const BotolaFixWrapper = styled(ScrollView)`
    background-color: ${ props => props.theme.background };   
`

export const BigHeading = styled(MainText)`
    font-size: 25px;
    padding: 10px;
    color: ${ props => props.theme.main };
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
    color: ${ props => props.theme.helperText };
    background-color: ${ props => props.theme.text };
    font-weight: 600;  
    font-size: 14px; 
`

export const TieBreakingRule = styled(View)`
    margin: 10px;
    padding: 10px;
    background-color: ${ props => props.theme.text }; 
    align-items: center;
    border-radius: 10px;
    elevation: 5;
`

export const TieBreakingRuleHeading = styled(MainText)`
    text-align: center;
    color: ${ props => props.theme.main };
    border-bottom-style: solid;
    border-bottom-color: ${ props => props.theme.main };
    border-bottom-width: 2px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    width: 60%;
    font-size: 16px;
    margin-bottom: 10px;
`

export const TieBreakingRuleText = styled(MainText)`
    text-align: center;
    color: ${ props => props.theme.textInverted };
`

export const Table = styled(View)`
    margin: 10px;
    padding: 10px;
    background-color: ${ props => props.theme.text }; 
    border-radius: 10px;
    elevation: 5;
`

export const Row = styled(View)`
    flex-direction: row;
    align-items: center;
    padding-top: 5px;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-bottom-color: ${ props => props.theme.background };
`

export const Column = styled(MainText)`
    padding:  2px;
    height: 30px; 
    text-align: center;
    align-items: center;
    color: ${ props => props.theme.textInverted };
`

export const Spacer = styled(View)`
    height: 60px;
`

export const Avatar = styled(Image)`
    width: 20px;
    height: 20px;
    top: -3px;
`

export const SpacerHorisontal = styled(View)`
    width: 20px;
`