import { IStar } from '../../../types';
import { idGen, randomRangeFromSeed } from '../../../utils';
import { nameGeneratorFromSeed } from '../../../NameGenerator';
import {
  starTypeProperties,
  getStarType,
  getHabitableStarType,
} from '../helpers/physicalTypes';
import { propsCalculate } from '../helpers/utils';

const starTemplate: IStar = {
  id: '',
  name: '',
  randSeed: 0,
  class: 'star',

  systemId: '',
  type: '',
  radius: 0,
  mass: 0,
  luminosity: 0,
  effTemperature: 0,
  color: {
    R: 0,
    G: 0,
    B: 0,
  },
  habitableZone: [],
  planetsIds: [],
  planetsArray: [],
};

interface IStarProps {
  specialType: 'general' | 'habitable' | 'superHabitable';
  seed: number;
  name?: string;
}

export function starCreator({ specialType, seed, name }: IStarProps): IStar {
  const rand = randomRangeFromSeed(seed);

  const mainSequenceRange = rand.minMaxRound(0, 100);
  const yerkesType = rand.minMaxRound(0, 100);

  let mainSequenceType;

  switch (specialType) {
    case 'general':
      mainSequenceType = getStarType(mainSequenceRange);
      break;
    case 'habitable':
      mainSequenceType = getHabitableStarType(mainSequenceRange);
      break;
    case 'superHabitable':
      mainSequenceType = 'K';
      break;
  }

  const starProps = starTypeProperties.find((t) => t.type === mainSequenceType);

  if (!starProps) throw new Error('Star type not found');

  const newStar = {...starTemplate};
  newStar.id = idGen();
  newStar.name = name ? name : nameGeneratorFromSeed(seed).generateGeneralName();
  newStar.randSeed = rand.minMaxRound(1,100000000);
  newStar.type = `${starProps.type}${(yerkesType / 10).toFixed(0)}V`;
  newStar.mass = propsCalculate(starProps.mass[0], starProps.mass[1], yerkesType);
  newStar.radius = propsCalculate(starProps.radius[0], starProps.radius[1], yerkesType);
  newStar.luminosity = propsCalculate(starProps.luminosity[0], starProps.luminosity[1], yerkesType);
  newStar.effTemperature = propsCalculate(starProps.effTemperature[0], starProps.effTemperature[1], yerkesType);
  newStar.color = {
    R: propsCalculate(starProps.color.R[0], starProps.color.R[1], yerkesType),
    G: propsCalculate(starProps.color.G[0], starProps.color.G[1], yerkesType),
    B: propsCalculate(starProps.color.B[0], starProps.color.B[1], yerkesType),
  };

  return newStar;
}
