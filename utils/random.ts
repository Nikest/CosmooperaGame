import * as Gen from 'random-seed';

const galaxySeed = process.env.GALAXY_SEED;
const playerSeed = process.env.PLAYER_SEED;

const rand = new Gen(parseInt(galaxySeed));
const civRand = new Gen(parseInt(playerSeed));

interface IProceduralObject {
  minMax: (min: number, max: number, round: boolean) => number;
  getSeed: () => number,
}

type IProceduralFn = (max: number) => number;


export const randMainSeed = (): IProceduralFn => rand;
export const randMainCivSeed = (): IProceduralFn => civRand;
export const createRandWithSeed = (seed): IProceduralFn => new Gen(seed);

export const randomRangeFromSeed = (seed: number): IProceduralObject => {
  const r = new Gen(seed);

  return {
    minMax: (min, max, round = true) => {
      const rnd = parseFloat(`0.${r(100000000)}`);
      const rn = rnd * (max - min) + min;
      return round ? Math.floor(rn) : rn;
    },
    getSeed: () => seed,
  }
};

export const random = (seed: number): IProceduralFn => {
  if (seed) {
    return new Gen(seed);
  }
  return new Gen();
};
