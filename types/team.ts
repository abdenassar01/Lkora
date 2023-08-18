type Category = {
  name: string;
  id: string;
};

type UniqueTournomant = {
  name: string;
  id: string;
};

type Tournomant = {
  name: string;
  uniqueTournament: UniqueTournomant;
};

type Country = {
  name: string;
};

type Manager = {
  name: string;
  id: number;
  shortName: string;
  country: Country;
};

type City = {
  name: string;
};

type Staduim = {
  name: string;
  capacity: number;
};

type Venue = {
  city: City;
  stadium: Staduim;
};

type Team = {
  name: string;
  id: number;
  shortName: string;
  foundationDateTimestamp: number;
  category: Category;
  tournament: Tournomant;
  manager: Manager;
  venue: Venue;
};

export default Team;
