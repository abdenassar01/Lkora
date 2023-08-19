import React from "react";
import {
	SpacerHorisontal,
	TournamentsWrapper,
	TournomantItem,
	TournomantItemPressable,
} from "../styles/Styles";
import { Tournomant } from "../../../../assets/tournomants";
import { withTheme } from "styled-components";

type Props = {
	onTournomantChange: (tournomant: Tournomant) => void;
	tournomantId: number;
	TOURNOMANTS: Tournomant[];
	theme: any;
};

function TournementsTabSelector({
	TOURNOMANTS,
	onTournomantChange,
	tournomantId,
	theme,
}: Props) {
	return (
		<TournamentsWrapper horizontal>
			{TOURNOMANTS.map((tournomant) => (
				<TournomantItemPressable
					key={tournomant.id}
					onPress={() => onTournomantChange(tournomant)}>
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
						{tournomant.label}
					</TournomantItem>
				</TournomantItemPressable>
			))}
			<SpacerHorisontal />
		</TournamentsWrapper>
	);
}

export default withTheme(TournementsTabSelector);
