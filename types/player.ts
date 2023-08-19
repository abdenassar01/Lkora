type Team = {
  name: string;
  id: number;
};

type Player = {
  id: number;
  name: string;
  position: string;
  height: number;
  jerseyNumber: string;
  team: Team;
};

export type PlayerType = {
  player: Player;
};
