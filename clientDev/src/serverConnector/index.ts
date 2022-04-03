import { io } from "socket.io-client";

const socket = io('ws://localhost:3007');

socket.on('connect', () => {
  console.log('Server socket connected!');
});
