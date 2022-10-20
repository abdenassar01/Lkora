type StatsItem = {
    name: string,
    home: string,
    away: string
}

type Group = {
    groupName: string,
    statisticsItems: StatsItem[]
}

export type Stats = {
    period: "All" | "1ST" | "2ND",
    groups: Group[] 
}