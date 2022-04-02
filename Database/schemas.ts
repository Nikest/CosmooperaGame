import { Schema, model } from 'mongoose';

import {
  ISystem,
  IStar,
  IPlanet,
  IOrbitProps,
  ICivilization,
  IHabitat,
  IOrbitalStation,
} from '../types/';

const orbitProps: IOrbitProps = {
  // @ts-ignore
  orbitLengthM: Number,
  // @ts-ignore
  orbitVelocityMS: Number,
  // @ts-ignore
  orbitalRadius: Number,
  // @ts-ignore
  periodS: Number,
  // @ts-ignore
  periodED: Number,
  // @ts-ignore
  periodSelfD: Number,
  // @ts-ignore
  selfRotation: Number,
  // @ts-ignore
  height: Number,
};

const systemSchema = new Schema<ISystem>({
  id: String,
  name: String,
  randSeed: Number,
  class: String,

  star: String,
  planets: Number,
  moons: Number,
  countOfPerspectiveWorld: Number,
  colonized: Boolean,
  civilization: String,
  orbitalStations: [String],
  habitats: [String],
  position: {
    x: Number,
    y: Number,
    z: Number,
  },
});

const starSchema = new Schema<IStar>({
  id: String,
  name: String,
  randSeed: Number,
  class: String,

  type: String,
  system: String,
  radius: Number,
  mass: Number,
  luminosity: Number,
  effTemperature: Number,
  habitableZone: [Number],
  planets: [String],
  color: {
    R: Number,
    G: Number,
    B: Number,
  },
});

const planetsSchema = new Schema<IPlanet>({
  id: String,
  name: String,
  randSeed: Number,
  class: String,

  type: String,
  subType: String,
  mass: Number,
  radius: Number,
  moons: [String],
  surfaceGravitation: Number,
  gravityAcceleration: Number,

  parentBody: String,
  system: String,

  orbit: Number,
  spaceZone: String,
  orbitProps: orbitProps,
  colonized: Boolean,
  orbitalStations: [String],
  civilization: String,
  habitats: [String],
  atmosphere: {
    pressure: Number,
  },
});

const civilizationSchema = new Schema<ICivilization>({
  id: String,
  name: String,
  randSeed: Number,
  class: String,

  time: Number,
  systems: [String],
  planets: [String],
  orbitalStations: [String],
  habitats: [String],
  peopleCount: Number,
  fertility: Number,
  techLevel: String,
  ideology: {
    governmentsType: String,
  },
});

const habitatSchema = new Schema<IHabitat>({
  id: String,
  name: String,
  randSeed: Number,
  class: String,

  system: String,
  planet: String,
  type: String,
  role: String,
  peopleCount: Number,
  civilization: String,
  science: Number,
  scienceBuildings: [String],
  mining: Number,
  miningBuildings: [String],
  food: Number,
  foodBuildings: [String],
  production: Number,
  factories: [String],
  economy: Number,
  economyCompanies: [String],
  health: Number,
  healthBuildings: [String],
  seed: Number,
});

const orbitalStationSchema = new Schema<IOrbitalStation>({
  id: String,
  name: String,
  randSeed: Number,
  class: String,

  system: String,
  parenBody: String,
  orbitProps: orbitProps,
  type: String,
  peopleCount: Number,
  description: String,
  civilization: String,
});

export const SystemModel = model<ISystem>('system', systemSchema);
export const StarModel = model<IStar>('star', starSchema);
export const PlanetModel = model<IPlanet>('planet', planetsSchema);
export const CivilizationModel = model<ICivilization>('civilization', civilizationSchema);
export const HabitatModel = model<IHabitat>('habitat', habitatSchema);
export const OrbitalStationModel = model<IOrbitalStation>('orbitalstation', orbitalStationSchema);
