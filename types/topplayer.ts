type Player = {
  name: string;
  id: number;
  shortName: string;
};

type Team = {
  name: string;
  id: number;
  shortName: string;
};

type Event = {
  id: number;
};

export type PlayerType = {
  rating: number;
  player: Player;
  team: Team;
  event: Event;
};
