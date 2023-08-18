type PlayerStats = {
  rating: number;
};

type PlayerInfo = {
  name: string;
  id: number;
};

export type Player = {
  position: string;
  substitute: boolean;
  jurseyNumber: string;
  shirtNumber?: number;
  player: PlayerInfo;
  statistics: PlayerStats;
};

type TeamLineUp = {
  formation: string;
  players: Player[];
};

export type LineUp = {
  confirmed?: boolean;
  home: TeamLineUp;
  away: TeamLineUp;
};
