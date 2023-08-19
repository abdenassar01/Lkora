type Tournament = {
  name: string;
  id: number;
  priority: number;
  uniqueTournament: {
    id: number;
  };
};

type Status = {
  description: string;
};

type TeamColor = {
  primary: string;
  seconadry?: string;
};

type Round = {
  round: number;
};

type Team = {
  name: string;
  id: number;
  shortName?: string;
  teamColors: TeamColor;
};

type Score = {
  current: number;
};

type StatusTime = {
  timestamp: number;
};

export type Event = {
  id: number;
  tournament: Tournament;
  roundInfo: Round;
  status: Status;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: Score;
  awayScore: Score;
  statusTime: StatusTime;
  startTimestamp: number;
};
