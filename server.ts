import 'dotenv/config';
import { createServer } from 'http';
import * as SocketIo from 'socket.io';

import { ExpressApp, normalizePort, onError, onListening } from './Server/';
import { socketClientEventsListener } from './Server/sockets';
import { databaseConnect } from './Database';

import { SpaceModuleInit } from './GameModules/Space';

Init();

async function Init() {
  const app = new ExpressApp();
  const port = normalizePort(process.env.PORT || '3007');

  app.set('port', port);
  const server = createServer(app.express);

// @ts-ignore
  const io = SocketIo(server, {
    cors: {
      origin: '*',
    },
  });
  io.on('connection', socketClientEventsListener);

  server.listen(port);
  server.on('error', onError(port));
  server.on('listening', onListening(server));
  console.log('*** server started ***');

  const dbConnect = await databaseConnect();
  console.log(dbConnect);

  SpaceModuleInit();
}
