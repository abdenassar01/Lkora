type Player = {
    name: string,
    id: number
}

type Team = {
    name: string,
    id: number
}

export type PlayerType = {
    rating: number,
    player: Player,
    team: Team
}