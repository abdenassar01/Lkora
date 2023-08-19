type Tournament = {
  name: string;
  id: number;
};

type Round = {
  round: number;
};

type Status = {
  description: string;
  type?: string;
};

type City = {
  name: string;
};

type Staduim = {
  name: string;
};

type Venue = {
  city?: City;
  stadium: Staduim;
};

type Refree = {
  name: string;
};

type Team = {
  name: string;
  shortName?: string;
  nameCode?: string;
  id: number;
};

type Score = {
  current: number;
};

type Time = {
  currentPeriodStartTimestamp: number;
};

export type EventDetails = {
  tournament: Tournament;
  roundInfo: Round;
  status: Status;
  venue: Venue;
  refree?: Refree;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: Score;
  awayScore: Score;
  time?: Time;
  startTimestamp: number;
};
