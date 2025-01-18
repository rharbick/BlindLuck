import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Canvas from '../components/Game/Canvas/Canvas'
import ChatBox from '../components/Game/ChatBox/ChatBox'
import PlayerList from '../components/Game/PlayerList/PlayerList'

function GameRoom() {
  const { roomId } = useParams()

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Room: {roomId}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <Canvas />
        </div>
        <div className="space-y-4">
          <PlayerList />
          <ChatBox />
        </div>
      </div>
    </div>
  )
}

export default GameRoom 