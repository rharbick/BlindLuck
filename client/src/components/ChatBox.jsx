import { useState } from 'react'

function ChatBox() {
  const [guess, setGuess] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (guess.trim()) {
      console.log('Submitted guess:', guess)
      setGuess('')
    }
  }

  return (
    <div className="border rounded-lg p-4">
      <div className="h-[200px] overflow-y-auto mb-4 bg-gray-50 rounded p-2">
        {/* Guesses will appear here */}
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter your guess..."
          className="flex-1 p-2 border rounded"
        />
        <button 
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Guess
        </button>
      </form>
    </div>
  )
}

export default ChatBox