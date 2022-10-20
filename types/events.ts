type Tournament =  {
    name: string,
    id: number
}

type Status = {
    description: string
}

type TeamColor = {
    primary: string,
    seconadry?: string 
}  

type Team = {
    name: string,
    id: number,
    shortName?: string
    teamColors: TeamColor
}

type Score = {
    current: number
}

export type Event = {
    uniqueTournament: Tournament,
    status: Status,
    homeTeam: Team,
    awayTeam: Team,
    homeScore: Score,
    awayScore: Score,
    startTimestamp: number;
}