import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click Me
</button>
<div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
  <img className="w-full" src="https://via.placeholder.com/150" alt="Sample" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Tailwind Card</div>
    
  </div>
</div>
<div className="grid grid-cols-2 gap-4">
  <div className="bg-red-200 p-4 text-center">1</div>
  <div className="bg-green-200 p-4 text-center">2</div>
  <div className="bg-blue-200 p-4 text-center">3</div>
  <div className="bg-yellow-200 p-4 text-center">4</div>
</div>
<div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
  <p className="font-bold">Warning</p>
  <p>Something might go wrong.</p>
</div>


    </>
  )
}

export default App
