import { io } from 'socket.io-client'

const SOCKET_URL = 'http://localhost:3000'

export const socket = io(SOCKET_URL, {
  autoConnect: false
})

// Add socket event listeners
socket.on('connect', () => {
  console.log('Connected to server')
})

socket.on('disconnect', () => {
  console.log('Disconnected from server')
})