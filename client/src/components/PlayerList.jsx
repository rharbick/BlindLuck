function PlayerList() {
    const players = [
      { id: 1, name: 'Player 1', score: 0, isDrawing: true },
      { id: 2, name: 'Player 2', score: 0, isDrawing: false },
    ]
  
    return (
      <div className="border rounded-lg p-4">
        <h3 className="text-xl font-bold mb-4">Players</h3>
        <div className="space-y-2">
          {players.map(player => (
            <div 
              key={player.id}
              className="flex justify-between items-center p-2 bg-gray-50 rounded"
            >
              <span>{player.name} {player.isDrawing && '✏️'}</span>
              <span>{player.score} pts</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default PlayerList