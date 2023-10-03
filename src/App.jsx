import { useState } from 'react'
function App() {
  const [text, setText] = useState('Hello World!')

  return (
    <>
      <div>
          <h1 className="text-3xl font-bold underline bg-amber-300">
              {text}
          </h1>
      </div>
    </>
  )
}

export default App
