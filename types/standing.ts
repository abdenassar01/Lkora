type TieBreakingRule = {
  text: string;
};

type Team = {
  name: string;
  shortName: string;
  id: number;
};

type Row = {
  team: Team;
  position: number;
  matches: number;
  wins: number;
  losses: number;
  draws: number;
  scoresFor: number;
  scoresAgainst: number;
  points: number;
  id: number;
};

type UniqueTournament = {
  name: string;
  id: string;
};

type Tournemant = {
  uniqueTournament: UniqueTournament;
  id: number;
};

export type StandingType = {
  tournament: Tournemant;
  name: string;
  tieBreakingRule: TieBreakingRule;
  rows: Row[];
};
