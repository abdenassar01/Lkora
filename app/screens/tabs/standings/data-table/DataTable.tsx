import React from "react";
import {
	Avatar,
	Column,
	Row,
	SelectionTabsWrapper,
	Table,
} from "../styles/Styles";
import SkeltonStandingRefetchLoader from "../loader/SkeltonStandingRefetchLoader";
import TieBreakingRule from "../tie-breaking-rule/TieBreakingRule";
import { useQuery } from "react-query";
import { StandingType } from "../../../../../types/standing";
import ErrorHandler from "../../../../utils/error/ErrorHandler";
import axios from "axios";

type Props = {
	tournomantId: number;
	seasonId: number;
	setLeague: (value: string) => void;
};

function DataTable({ seasonId, tournomantId, setLeague }: Props) {
	const { data, isLoading, error, isRefetching } = useQuery<StandingType[]>(
		["get tournoment standing", [tournomantId, seasonId]],
		{
			enabled: !!seasonId && !!tournomantId,
			queryFn: async () => {
				const result = await axios.get(
					`https://api.sofascore.com/api/v1/unique-tournament/${tournomantId}/season/${seasonId}/standings/total`
				);
				setLeague(result.data?.standings[0]?.tournament.name);
				return result.data.standings;
			},
		}
	);

	if (isLoading || isRefetching)
		return (
			<SkeltonStandingRefetchLoader />
			// <BotolaFixWrapper>
			//     <SkeltonStandingLoader />
			// </BotolaFixWrapper>
		);

	if (error)
		return (
			<ErrorHandler message="Network Error. Check your network status and try again." />
		);

	return (
		<SelectionTabsWrapper>
			<TieBreakingRule
				rule={(data && data[0]?.tieBreakingRule?.text) || ""}
			/>
			{isRefetching ? (
				<SkeltonStandingRefetchLoader />
			) : (
				data?.map((group) => (
					<Table key={group.name}>
						<Row>
							<Avatar
								source={{
									uri: `https://api.sofascore.app/api/v1/unique-tournament/${tournomantId}/image`,
								}}></Avatar>
							<Column style={{ width: "7%" }}>#</Column>
							<Column style={{ width: "40%", textAlign: "left" }}>
								Team
							</Column>
							<Column style={{ width: "6.5%" }}>P</Column>
							<Column
								style={{
									width: "6.5%",
									color: "white",
									backgroundColor: "#07c05a",
								}}>
								W
							</Column>
							<Column
								style={{
									width: "6.5%",
									color: "white",
									backgroundColor: "#f8b600",
								}}>
								D
							</Column>
							<Column
								style={{
									width: "6.5%",
									color: "white",
									backgroundColor: "#e30044",
								}}>
								L
							</Column>
							<Column style={{ width: "6.5%" }}>+</Column>
							<Column style={{ width: "6.5%" }}>-</Column>
							<Column style={{ width: "9%" }}>Pts</Column>
						</Row>

						{group?.rows.map((row) => (
							<Row key={row.id}>
								<Avatar
									source={{
										uri: `https://api.sofascore.app/api/v1/team/${row.team.id}/image`,
									}}></Avatar>
								<Column style={{ width: "7%" }}>
									{row.position}
								</Column>
								<Column
									style={{ width: "40%", textAlign: "left" }}>
									{row.team.shortName}
								</Column>
								<Column style={{ width: "6.5%" }}>
									{row.matches}
								</Column>
								<Column style={{ width: "6.5%" }}>
									{row.wins}
								</Column>
								<Column style={{ width: "6.5%" }}>
									{row.draws}
								</Column>
								<Column style={{ width: "6.5%" }}>
									{row.losses}
								</Column>
								<Column style={{ width: "6.5%" }}>
									{row.scoresFor}
								</Column>
								<Column style={{ width: "6.5%" }}>
									{row.scoresAgainst}
								</Column>
								<Column style={{ width: "9%" }}>
									{row.points}
								</Column>
							</Row>
						))}
					</Table>
				))
			)}
		</SelectionTabsWrapper>
	);
}

export default DataTable;
