type Player = {
  name: string;
  id: number;
  shortName: string;
  dateOfBirthTimestamp: number;
  position: string;
};

type Team = {
  name: string;
  nameCode: string;
  id: number;
};

type Statistics = {
  totalPass: number;
  accuratePass: number;
  totalLongBalls: number;
  accurateLongBalls: number;
  totalClearance: number;
  savedShotsFromInsideTheBox: number;
  saves: number;
  punches: number;
  minutesPlayed: number;
  touches: number;
  rating: number;
  possessionLostCtrl: number;
};

export type PlayerPerformance = {
  statistics: Statistics;
  team: Team;
  player: Player;
};
