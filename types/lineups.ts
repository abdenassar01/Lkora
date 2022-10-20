type PlayerStats = {
    rating: number
}

type PlayerInfo = {
    name: string,
    id: number
}

type Player = {
    position: string,
    substitude: boolean,
    jurseyNumber: string,
    shirtNumber?: number,
    player: PlayerInfo,
    statistics: PlayerStats
}

type TeamLineUp = {
    formation: string,
    players: Player[]
}

export type LineUp = {
    confirmed?: boolean,
    home: TeamLineUp,
    away: TeamLineUp
}