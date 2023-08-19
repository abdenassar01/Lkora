import { useState } from "react";
import { BigHeading, BotolaFixWrapper, Spacer } from "./styles/Styles";
import TournementsTabSelector from "./tournements-tab-selector/TournementsTabSelector";
import { SimpleUniqueTournomant } from "../../../../types/uniqueTournomant";
import DataTable from "./data-table/DataTable";

function Standing() {
	const [tournomantId, setTournomantId] = useState<number>(17);
	const [seasonId, setSeasonId] = useState<number>(52186);

	const onTournomantChange = (
		tournomant?: SimpleUniqueTournomant,
		seasonId?: number
	) => {
		setSeasonId(seasonId || 0);
		setTournomantId(tournomant?.id || tournomantId);
	};

	return (
		<BotolaFixWrapper contentContainerStyle={{ justifyContent: "center" }}>
			<BigHeading>
				text
				{/* {data && data[0]?.tournament.uniqueTournament.name} */}
			</BigHeading>
			<TournementsTabSelector
				onTournomantChange={onTournomantChange}
				tournomantId={tournomantId}
				seasonId={seasonId}
			/>

			<DataTable
				seasonId={seasonId}
				tournomantId={tournomantId}
			/>
			<Spacer />
		</BotolaFixWrapper>
	);
}

export default Standing;
