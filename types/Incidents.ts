type Player = {
  name: string;
  shortName: string;
  id: number;
  position: string;
};

export type Incident = {
  id: number;
  time: number;
  incidentType: string;
  isHome?: boolean;
  text?: string;
  playerIn?: Player;
  playerOut?: Player;
  addedTime?: number;
  homeScore?: number;
  awayScore?: number;
  isLive?: boolean;
  incidentClass?: string;
  rescinded?: boolean;
  reason?: string;
  playerName?: string;
  assist1?: Player;
  player?: Player;
  length: number;
};
