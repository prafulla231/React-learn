import { useState, useCallback, useEffect, useRef } from 'react';
import 'tailwindcss/tailwind.css'; // Make sure you have Tailwind CSS installed and configured

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      string += "0123456789";
    }
    if (charAllowed) {
      string += "!@#$%^&*()_-+={[}]|\\:;/";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length);
      pass += string.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  return (
    <div className='bg-gradient-to-r from-blue-600 via-violet-400 to-red-600 min-h-screen flex justify-center items-center'>
      <div className='w-full max-w-md mx-auto shadow-lg rounded-lg p-6 bg-slate-300'>
        <h1 className='text-center text-2xl font-bold mb-6 text-gray-800'>Password Generator</h1>
        <div className='flex items-center mb-4'>
          <input 
            type="text"
            value={Password}
            className='flex-1 py-2 px-3 border border-gray-300 rounded-l-md text-gray-800 focus:outline-none'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button 
            onClick={copyPassword} 
            className='bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-200'
          >
            Copy
          </button>
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 font-semibold mb-2'>Length: {length}</label>
          <input 
            type="range"
            min={8}
            max={40}
            value={length}
            className='w-full cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <input 
              type="checkbox" 
              id="numberInput" 
              defaultChecked={numberAllowed}
              onChange={() => { setNumbersAllowed((prev) => !prev); }}
              className='mr-2'
            />
            <label className='text-gray-700 font-medium' htmlFor="numberInput">Include Numbers</label>
          </div>
          <div className='flex items-center'>
            <input 
              type="checkbox" 
              id="charInput" 
              defaultChecked={charAllowed}
              onChange={() => { setCharAllowed((prev) => !prev); }}
              className='mr-2'
            />
            <label className='text-gray-700 font-medium' htmlFor="charInput">Include Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
