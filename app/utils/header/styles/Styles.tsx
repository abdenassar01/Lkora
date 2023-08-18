import { Image, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { MainText } from "../../../assets/text/Text";

export const HeaderBackground = styled(View)`
	background-color: ${(props) => props.theme.background};
`;

export const HeaderWrapper = styled(View)`
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	padding: 5px;
	background-color: ${(props) => props.theme.text};
	margin: 10px;
	border-radius: 5px;
	elevation: 5;
	position: relative;
	height: 45px;
`;

export const Logo = styled(Image)`
	width: 200px;
	height: 40px;
`;

export const GoBack = styled(TouchableOpacity)`
	position: absolute;
	left: 10px;
`;

export const TournamentTitle = styled(MainText)`
	font-size: 22px;
	font-weight: 600;
	color: ${(props) => props.theme.main};
	position: absolute;
	right: 10px;
`;

export const Heading = styled(MainText)`
	font-size: 22px;
	font-weight: 600;
	color: ${(props) => props.theme.main};
	padding-left: 10px;
`;

export const ThemeToggle = styled(TouchableOpacity)`
	flex-direction: row;
	align-items: center;
`;

export const ThemeLabel = styled(MainText)`
	margin-right: 5px;
	color: ${(props) => props.theme.main};
`;

export const DateElementButton = styled(TouchableOpacity)``;

export const DateElement = styled(MainText)`
	padding: 20px;
	padding-top: 3px;
	padding-bottom: 3px;
	background-color: ${(props) => props.theme.main};
	color: ${(props) => props.theme.text};
	border-radius: 50px;
`;
