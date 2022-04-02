import { parentPort, workerData } from 'worker_threads';

import { ISystem, IStar } from '../../../types';
import { systemCreator, starCreator } from '../entities';
import { randomRangeFromSeed } from '../../../utils';

interface IProps {
  x: number;
  y: number;
  z: number;
}

interface ISystemCollection {
  star: IStar;
  system: ISystem;
}

export interface IMessage {
  action: string;
  props: any;
}

export type IAnswer = Array<ISystemCollection>;

parentPort?.on('message', ({ action, props }: IMessage) => {
  actions[action](props);
});

const actions = {
  getSystemsInCoords: ({ fieldSize }) => {
    let countX = 0;
    let countY = 0;
    let systemAsyncArr: Promise<ISystemCollection>[] = [];

    while (countX <= fieldSize) {
      countY = 0;
      while (countY <= fieldSize) {
        systemAsyncArr.push(createSystemInCoords({ x: countX, y: countY, z: 0 }));
        countY += 5;
      }
      countX += 5;
    }

    Promise.all(systemAsyncArr).then((data) => {
      parentPort?.postMessage(data);
    });
  }
};

async function createSystemInCoords({ x, y, z }: IProps) {
  const system = systemCreator({
    specialType: 'general',
    position: { x, y, z },
  });

  const star = starCreator({
    specialType: 'general',
    seed: randomRangeFromSeed(system.randSeed).minMaxRound(0, 100000000),
  });

  system.starId = star.id;
  system.name = `${star.name} ${star.type}`;
  star.systemId = system.id;

  return { star, system };
}

console.log('*** System worker established ***');
