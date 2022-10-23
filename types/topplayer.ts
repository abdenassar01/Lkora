type Player = {
    name: string,
    id: number,
    shortName: string
}

type Team = {
    name: string,
    id: number,
    shortName: string
}

export type PlayerType = {
    rating: number,
    player: Player,
    team: Team
}