import { Image, View } from "react-native";
import styled from "styled-components";
import { COLOR } from "../../../../../../../assets/color";
import { MainText } from "../../../../../../../assets/text/Text";

export const CardWrapper = styled(View)`
    background-color: #ffffff;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    align-items: center;
`

export const StaduimTitle = styled(MainText)`
    font-size: 20px;
    font-weight: 600;
    padding-bottom: 5px;
`

export const Line = styled(View)`
    width: 30%;
    height: 2px;
    background-color:  ${ COLOR.main };
    margin-bottom: 10px;
    border-radius: 50px;
`

export const ScoreWrapper = styled(View)`
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    padding-bottom: 10px;
`

export const Home = styled(View)`

`

export const Team = styled(View)`
    align-items: center;
    padding-bottom: 5px;
`

export const TeamTitle = styled(MainText)`
    font-size: 14px;
    width: 100px;
    text-align: center;
`

export const TeamLogo = styled(Image)`
    width: 50px;
    height: 50px;
`

export const Away = styled(View)`

`

export const MatchStatusWrapper = styled(View)`
    justify-items: center;
    align-items: center;
`

export const Score = styled(MainText)`
    font-size: 25px;
`

export const Time = styled(MainText)`
    font-size: 20px;
    color: ${ COLOR.main };
`

export const DatePlaceHolder = styled(MainText)`
   
`

export const TimeWrapper = styled(View)`
    align-items: center;
`

export const Status = styled(MainText)`
    padding: 5px 10px;
    color: white;
    border-radius: 5px;
    margin-top: 10px;
    background-color: ${ COLOR.main };
`

export const HelperText = styled(MainText)`
    font-size: 12px;
    color: ${ COLOR.helperText };
`