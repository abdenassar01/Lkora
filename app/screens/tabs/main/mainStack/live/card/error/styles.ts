import { View } from 'react-native';
import styled from 'styled-components';
import { MainText } from '../../../../../../../assets/text/Text';

export const LiveCartWrapper = styled(View)`
    padding: 10px;
    width: 300px;
    height: 100px;
    justify-content: center;
    align-items: center;
    margin: 5px;
    margin-left: 30px;
    border-radius: 10px;
    background-color: white;
    elevation: 5;
`

export const LiveText = styled(MainText)`
    text-align: center; 
    font-size: 16px;
`