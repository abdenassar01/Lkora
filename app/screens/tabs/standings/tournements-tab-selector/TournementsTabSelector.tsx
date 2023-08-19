import React, { useState } from "react";
import {
	SelectionTabsWrapper,
	SpacerHorisontal,
	TournamentsWrapper,
	TournomantItem,
	TournomantItemPressable,
} from "../styles/Styles";
import { withTheme } from "styled-components";
import { useQuery } from "react-query";
import axios from "axios";
import ErrorHandler from "../../../../utils/error/ErrorHandler";
import { SimpleUniqueTournomant } from "../../../../../types/uniqueTournomant";
import { Text } from "react-native";
import { Season } from "../../../../../types/season";

type Props = {
	onTournomantChange: (
		tournomant?: SimpleUniqueTournomant,
		seasonId?: number
	) => void;
	tournomantId?: number;
	seasonId?: number;
	theme: any;
};

function TournementsTabSelector({
	onTournomantChange,
	tournomantId,
	seasonId,
	theme,
}: Props) {
	const [currentTournoment, setCurrentTournoment] = useState<
		SimpleUniqueTournomant | undefined
	>(undefined);

	const {
		data: tournements,
		error,
		isLoading,
	} = useQuery<SimpleUniqueTournomant[]>("getting tournements", async () => {
		const result = await axios.get(
			"https://api.sofascore.com/api/v1/config/top-unique-tournaments/MA/football"
		);
		setCurrentTournoment(result.data.uniqueTournaments[2]);
		return result.data.uniqueTournaments;
	});

	const {
		data: seasons,
		error: seasonsError,
		isLoading: seasonsLoading,
	} = useQuery<Season[]>(
		["getting seasons of tournoment", currentTournoment],
		{
			enabled: !!currentTournoment,
			queryFn: async () => {
				const result = await axios.get(
					`https://api.sofascore.com/api/v1/unique-tournament/${currentTournoment?.id}/seasons`
				);
				onTournomantChange(
					currentTournoment,
					result.data.seasons[0].id
				);
				return result.data.seasons;
			},
		}
	);

	if (isLoading || seasonsLoading) return <Text>loading...</Text>;
	if (error || seasonsError)
		return (
			<ErrorHandler message="Network Error. Check your network status and try again." />
		);

	return (
		<SelectionTabsWrapper>
			<TournamentsWrapper horizontal>
				{tournements &&
					tournements.map((tournomant) => (
						<TournomantItemPressable
							key={tournomant.id}
							onPress={() => {
								setCurrentTournoment(tournomant);
							}}>
							<TournomantItem
								style={{
									backgroundColor:
										tournomantId === tournomant.id
											? theme.main
											: theme.text,
									color:
										tournomantId === tournomant.id
											? theme.text
											: theme.helperText,
								}}>
								{tournomant.name}
							</TournomantItem>
						</TournomantItemPressable>
					))}
				<SpacerHorisontal />
			</TournamentsWrapper>
			<TournamentsWrapper horizontal>
				{seasons?.map((season) => (
					<TournomantItemPressable
						key={season.id}
						onPress={() =>
							onTournomantChange(currentTournoment, season.id)
						}>
						<TournomantItem
							style={{
								backgroundColor:
									seasonId === season.id
										? theme.main
										: theme.text,
								color:
									seasonId === season.id
										? theme.text
										: theme.helperText,
							}}>
							{season.year}
						</TournomantItem>
					</TournomantItemPressable>
				))}
				<SpacerHorisontal />
			</TournamentsWrapper>
		</SelectionTabsWrapper>
	);
}

export default withTheme(TournementsTabSelector);
