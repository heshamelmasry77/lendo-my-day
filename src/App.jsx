import { useState } from 'react'
function App() {
  const [test, setTest] = useState(0)

  return (
    <>
      <div>
          {test}
      </div>
    </>
  )
}

export default App
