import { ScrollView, TouchableOpacity, View } from 'react-native';
import styled from "styled-components";
import { MainText } from '../../../../../../../assets/text/Text';

export const Container = styled(View)`
    margin: 10px;
    padding: 5px;
    background-color: white;
    border-radius: 10px;
`

export const StatisticsWrapper = styled(ScrollView)`

`

export const StatisticsItem = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0;
    padding: 0 10px;
`

export const Value = styled(MainText)`
    font-size: 18px;
`  

export const Label = styled(MainText)`
    font-size: 20px;
`

export const NavBar = styled(View)`
    flex-direction: row;
    justify-content: space-around;
    padding: 3px 0;
`

export const NavItem = styled(TouchableOpacity)`
    padding: 3px 15px;
    border-radius: 10px;
`

export const ButtonLabel = styled(MainText)`
    font-size: 15px;
    font-weight: 600;
`