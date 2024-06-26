import { useState,useCallback } from 'react'
import './App.css'

function App() {
  // useCallback is a React Hook that lets you cache a function definition between re-renders.
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumbersAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [Password,setPassword] = useState("")


  const passwordGenerator = useCallback(() => {
    let pass =""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed){
      string+= "0123456789";
    }
    if(charAllowed){
      string+="!@#$%^&*()_-+={[}]|\:;/"
    }

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length +1)
      pass = string.charAt(char);
      
    }
    setPassword(pass);
    

  },[length,setNumbersAllowed,setCharAllowed,setPassword])  //depedencies ke change hote hi function run hoga

  return (
    // <div className='bg-slate-900 min-h-screen flex  justify-center'>
    //   <div className='text-white text-4xl font-bold p-4'>
    //     Password Generator
    //   </div>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-blue bg-gray-800  '> 
      <h1 className='text-white text center'>Password Generator</h1>
        <div className='flex shadow-md rounded-lg overflow-hidden mb-4 border-white'>
            <input 
              type="text"
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='Password'
              readOnly
             />
        </div>
      </div>
    // </div>
  )
}

export default App
