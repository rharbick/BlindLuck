import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [roomId, setRoomId] = useState('')
  const navigate = useNavigate()

  const handleJoinRoom = (e) => {
    e.preventDefault()
    if (roomId.trim()) {
      navigate(`/room/${roomId}`)
    }
  }

  const handleCreateRoom = () => {
    const newRoomId = Math.random().toString(36).substring(2, 8)
    navigate(`/room/${newRoomId}`)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8">Blind Drawing Game</h1>
      
      <div className="space-y-4 w-full max-w-md">
        <form onSubmit={handleJoinRoom} className="space-y-2">
          <input
            type="text"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            placeholder="Enter Room Code"
            className="w-full p-2 border rounded"
          />
          <button 
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Join Room
          </button>
        </form>

        <button
          onClick={handleCreateRoom}
          className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Create New Room
        </button>
      </div>
    </div>
  )
}

export default Home 