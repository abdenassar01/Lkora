type StatsItem = {
  name: string;
  home: string;
  away: string;
};

type Group = {
  groupName: string;
  statisticsItems: StatsItem[];
};

export type StatsType = {
  period: "All" | "1ST" | "2ND";
  groups: Group[];
};
