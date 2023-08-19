type TitleHolder = {
	name: string;
	nameCode: string;
	id: string;
};

type Category = {
	name: string;
	id: number;
};

type MostTitlesTeam = {
	name: string;
	nameCode: string;
	id: string;
};

export type UniqueTournomant = {
	id: number;
	name: string;
	primaryColorHex: string;
	secondaryColorHex: string;
	mostTitles: number;
	titleHolder: TitleHolder;
	mostTitlesTeams: MostTitlesTeam[];
	category: Category;
};

export type SimpleUniqueTournomant = {
	name: string;
	id: number;
};
