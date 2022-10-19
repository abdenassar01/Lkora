import { Image, ScrollView, View } from 'react-native';
import styled from "styled-components";
import { COLOR } from '../../../../../../../../../assets/color';
import { MainText } from '../../../../../../../../../assets/text/Text';

export const SummaryWrapper = styled(ScrollView)`
    padding: 5px;
`

export const ItemWrapper = styled(View)`
    width: 100%;
    flex-direction: row;  
    justify-content: space-between; 
    align-items: center;
    background-color: ${ COLOR.background };
    margin-bottom: 5px;
    padding: 10px;
    border-radius: 10px;
`

export const Heading = styled(MainText)`
    margin: 10px 0;
    text-align: center;
    color: ${ COLOR.main };
    font-size: 16px;
    font-weight: 600;
    border-bottom-color: purple;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    margin-bottom: 10px;
    width: 50%;
` 

export const Label = styled(MainText)`
    font-size: 16px;
    font-weight: 600;
    color: ${ COLOR.main };
`

export const Home = styled(View)`
    align-items: center;
`

export const Away = styled(View)`
    align-items: center;
`

export const Jursey = styled(Image)`
    width: 50px;
    height: 50px;
`

export const Manager = styled(View)`

`

export const ManagerImage = styled(Image)`
    width: 70px;
    height: 70px;
    border-radius: 50px;
`

export const ManagerName = styled(MainText)`
    color: #000;
`