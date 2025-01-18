import { useRef, useEffect } from 'react'

function Canvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    
    // Set canvas size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-[500px] border-2 border-gray-300 rounded-lg"
    />
  )
}

export default Canvas