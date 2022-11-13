type TitleHolder = {
    name: string,
    nameCode: string,
    id: string
}

type MostTitlesTeam = {
    name: string,
    nameCode: string,
    id: string
}

export type UniqueTournomant = {
    id: number,
    name: string,
    primaryColorHex: string,
    secondaryColorHex: string,
    mostTitles: string,
    titleHolder: TitleHolder,
    mostTitlesTeams: MostTitlesTeam[],
}