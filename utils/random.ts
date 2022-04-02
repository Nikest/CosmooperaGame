import * as Gen from 'random-seed';

const galaxySeed = process.env.GALAXY_SEED;
const playerSeed = process.env.PLAYER_SEED;

interface IProceduralObject {
  minMax: (min: number, max: number) => number;
  minMaxRound: (min: number, max: number) => number;
  getSeed: () => number,
}

type IProceduralFn = (max: number) => number;

const galaxyRand: IProceduralFn = new Gen(parseInt(galaxySeed));
const playerRand: IProceduralFn = new Gen(parseInt(playerSeed));

export const randGalaxyNumber = (): IProceduralFn => galaxyRand;
export const randPlayerNumber = (): IProceduralFn => playerRand;
export const createRandWithSeed = (seed): IProceduralFn => new Gen(seed);

export const randomRangeFromSeed = (seed: number): IProceduralObject => {
  const r = new Gen(seed);

  const minMax = (min: number, max: number): number => {
    const rnd = parseFloat(`0.${r(100000000)}`);
    return rnd * (max - min) + min;
  }

  return {
    minMax: (min, max) => {
      return minMax(min, max);
    },
    minMaxRound: (min, max) => {
      return Math.floor(minMax(min, max));
    },
    getSeed: (): number => seed,
  }
};

export const random = (seed: number): IProceduralFn => {
  return seed ? new Gen(seed) : new Gen();
};
