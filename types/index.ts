export interface IMain {
  id: string;
  name: string;
  randSeed: number;
  class: string;
}

export interface ISystem extends IMain {
  star:  string;
  planets: number;
  moons: number;
  colonized: boolean;
  orbitalStations: string[];
  civilization: string;
  habitats: string[];
  countOfPerspectiveWorld: number;
  position: {
    x: number;
    y: number;
    z: number;
  };
}

export interface IStar extends IMain {
  system: string;
  type: string;
  radius: number;
  mass: number;
  luminosity: number;
  effTemperature: number;
  color: {
    R: number;
    G: number;
    B: number;
  };
  habitableZone: number[];
  planets: string[];
}

export  interface IPlanet extends IMain {
  parentBody: string;
  system: string;
  type: string;
  mass: number;
  radius: number;
  moons: string[];
  surfaceGravitation: number;
  gravityAcceleration: number;
  orbit: number;
  spaceZone: string;
  subType: string;
  colonized: boolean;
  orbitProps: IOrbitProps;
  orbitalStations: string[];
  civilization: string;
  habitats: string[];
  atmosphere: {
    pressure: number;
  };
}

export interface IOrbitProps {
  orbitLengthM: number;
  orbitVelocityMS: number;
  orbitalRadius: number;
  periodS: number;
  periodED: number;
  periodSelfD: number;
  selfRotation: number;
  height: number;
}

export interface ICivilization extends IMain {
  time: number;
  systems: string[];
  planets: string[];
  orbitalStations: string[],
  habitats: string[];
  peopleCount: number;
  fertility: number;
  techLevel: string;
  ideology: {
    governmentsType: string;
  };
}

export interface IHabitat extends IMain {
  system: string;
  planet: string;
  type: string;
  role: string;
  peopleCount: number;
  civilization: string;
  science: number;
  scienceBuildings: string[];
  mining: number;
  miningBuildings: string[];
  food: number;
  foodBuildings: string[];
  production: number;
  factories: string[];
  economy: number;
  economyCompanies: string[];
  health: number;
  healthBuildings: string[];
  seed: number;
}

export interface IOrbitalStation extends IMain {
  system: string;
  parenBody: string;
  orbitProps: IOrbitProps;
  type: string;
  peopleCount: number;
  description: string;
  civilization: string;
}
