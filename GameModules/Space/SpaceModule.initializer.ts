import { Worker } from 'worker_threads';
import * as path from 'path';
import { SystemModel, StarModel } from '../../Database';

import { IMessage, IAnswer } from './processor/Space.worker';

export function SpaceModuleInit() {
  const message: IMessage = {
    action: 'getSystemsInCoords',
    props: {
      fieldSize: 50,
    },
  };
  const worker = new Worker(path.join(__dirname, './processor/Space.worker.js'));

  worker.postMessage(message);

  worker.on('message', (data: IAnswer) => {
    const arr: Promise<boolean>[] = [];

    data.forEach(({system, star}) => {
      arr.push(new Promise<boolean>(async (res) => {
        const systemDb = new SystemModel(system);
        await systemDb.save();

        const starDb = new StarModel(star);
        await starDb.save();

        res(true);
      }));
    });

    Promise.all(arr).then(console.log);
  });
}
