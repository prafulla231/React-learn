import { useState } from 'react'
import './App.css'


function App() {
  const [color,setColor] = useState('gray')
  return (
    <div className="min-h-screen flex flex-col justify-between items-center " style={{backgroundColor:color}}>
      <h1 className='bg-purple-600 p-4 rounded-2xl text-center text-2xl font-bold w-full'>
        Background changer small project
      </h1>
      
      <div className='bg-black text-white m-4 rounded-full flex justify-center'>
        <button onClick={()=>setColor("White")} className='m-4 p-2 border-4 border-sky-700 rounded-3xl text-black' style={{backgroundColor : 'white'}}>White</button>
        <button onClick={()=>setColor("Gray")} className='m-4 p-2 border-4 border-sky-700 rounded-3xl text-black'style={{backgroundColor : 'Gray'}}>Gray</button>
        <button onClick={()=>setColor("Yellow")} className='m-4 p-2 border-4 border-sky-700 rounded-3xl text-black'style={{backgroundColor : 'Yellow'}}>Yellow</button>
        <button onClick={()=>setColor("Green")} className='m-4 p-2 border-4 border-sky-700 rounded-3xl text-black'style={{backgroundColor : 'Green'}}>Green</button>
        <button onClick={()=>setColor("Black")} className='m-4 p-2 border-4 border-sky-700 rounded-3xl ' style={{backgroundColor : 'black'}}>Black</button>
        <button onClick={()=>setColor("Blue")} className='m-4 p-2 border-4 border-sky-700 rounded-3xl'style={{backgroundColor : 'Blue'}}>Blue</button>
        <button onClick={()=>setColor("Red")} className='m-4 p-2 border-4 border-sky-700 rounded-3xl'style={{backgroundColor : 'Red'}}>Red</button>
        <button onClick={()=>setColor("Indigo")} className='m-4 p-2 border-4 border-sky-700 rounded-3xl'style={{backgroundColor : 'Indigo'}}>Indigo</button>
        <button onClick={()=>setColor("Pink")} className='m-4 p-2 border-4 border-sky-700 rounded-3xl text-black'style={{backgroundColor : 'Pink'}}>Pink</button>
        <button onClick={() => setColor("Orange")} className='m-4 p-2 border-4 border-sky-700 rounded-3xl text-black' style={{ backgroundColor: 'orange' }}>Orange</button>
        <button onClick={() => setColor("Cyan")} className='m-4 p-2 border-4 border-sky-700 rounded-3xl text-black' style={{ backgroundColor: 'cyan' }}>Cyan</button>
        <button onClick={() => setColor("Purple")} className='m-4 p-2 border-4 border-sky-700 rounded-3xl text-black' style={{ backgroundColor: 'purple' }}>Purple</button>
        <button onClick={() => setColor("Teal")} className='m-4 p-2 border-4 border-sky-700 rounded-3xl text-black' style={{ backgroundColor: 'teal' }}>Teal</button>
        <button onClick={() => setColor("Lime")} className='m-4 p-2 border-4 border-sky-700 rounded-3xl text-black' style={{ backgroundColor: 'lime' }}>Lime</button>
        
      </div>
    </div>
  )
}

export default App
