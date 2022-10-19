import { Image, ScrollView, View, ViewBase } from 'react-native';
import styled from "styled-components";
import { COLOR } from '../../../../../../../../../assets/color';
import { MainText } from '../../../../../../../../../assets/text/Text';

export const LineUpWrapper = styled(ScrollView)`
    padding: 5px;
`

export const Heading = styled(MainText)`
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

export const PlayerWrapper = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: ${ COLOR.background };
    margin-bottom: 5px;
    border-radius: 50px;
`

export const Position = styled(MainText)`
    font-weight: 600;
    text-align: center;
    height: 25px;
    width: 25px;
    background-color: ${ COLOR.main };
    color: white;
    border-radius: 50px;
`

export const ShirtNumber = styled(MainText)`
    height: 25px;
    width: 25px;
    text-align: center;
`

export const Name = styled(MainText)`

`

export const Rating = styled(MainText)`
    height: 25px;
    width: 25px;
    text-align: center;
`

export const Avatar = styled(Image)`
    width: 25px;
    height: 25px;
    border-radius: 50px;
`