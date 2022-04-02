import { ISystem } from '../../../types';
import { idGen, randGalaxyNumber, randomRangeFromSeed } from '../../../utils';

const systemTemplate: ISystem = {
  id: '',
  name: '',
  randSeed: 0,
  class: 'system',

  starId: '',
  planetsIds: [],
  moonsIds: [],
  numberOfPerspectiveWorld: 0,
  colonized: false,
  civilizationId: '',
  orbitalStationsIds: [],
  habitatsIds: [],
  galaxyPosition: {
    x: 0,
    y: 0,
    z: 0,
  },
};

interface ISystemProps {
  specialType: 'general' | 'habitable' | 'superHabitable';
  position: {
    x: number;
    y: number;
    z: number;
  };
}

export function systemCreator({ specialType, position }: ISystemProps): ISystem {
  const newSystem = {...systemTemplate};
  const systemSeed = randGalaxyNumber()(100000000);

  const rand = randomRangeFromSeed(systemSeed);

  newSystem.id = idGen();
  newSystem.randSeed = systemSeed;
  newSystem.galaxyPosition.x = rand.minMax(2, 4) + position.x;
  newSystem.galaxyPosition.y = rand.minMax(2, 4) + position.y;
  newSystem.galaxyPosition.z = rand.minMax(2, 4) + position.z;


  return newSystem;
}
