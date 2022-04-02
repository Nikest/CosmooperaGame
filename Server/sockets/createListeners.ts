import { Socket } from 'socket.io';

export function socketClientEventsListener(socket: Socket) {
  console.log('A user connected', socket);

}
