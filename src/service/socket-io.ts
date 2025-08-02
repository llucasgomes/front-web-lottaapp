import { io, Socket } from 'socket.io-client'

let socket: Socket | null = null

export function getSocket(): Socket {
  if (!socket) {
    socket = io('http://192.168.1.16:3005', {
      transports: ['websocket'],
    })
  }
  return socket
}
