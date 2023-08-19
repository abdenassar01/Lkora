import { useState } from "react";
import { BigHeading, BotolaFixWrapper, Spacer } from "./styles/Styles";
import TournementsTabSelector from "./tournements-tab-selector/TournementsTabSelector";
import { SimpleUniqueTournomant } from "../../../../types/uniqueTournomant";
import DataTable from "./data-table/DataTable";

function Standing() {
	const [tournomantId, setTournomantId] = useState<number>(17);
	const [seasonId, setSeasonId] = useState<number>(52186);
	const [league, setLeague] = useState<string>("");

	const onTournomantChange = (
		tournomant?: SimpleUniqueTournomant,
		seasonId?: number
	) => {
		setSeasonId(seasonId || 0);
		setTournomantId(tournomant?.id || tournomantId);
	};

	return (
		<BotolaFixWrapper contentContainerStyle={{ justifyContent: "center" }}>
			<BigHeading>{league}</BigHeading>
			<TournementsTabSelector
				onTournomantChange={onTournomantChange}
				tournomantId={tournomantId}
				seasonId={seasonId}
			/>

			<DataTable
				seasonId={seasonId}
				tournomantId={tournomantId}
				setLeague={setLeague}
			/>
			<Spacer />
		</BotolaFixWrapper>
	);
}

export default Standing;
