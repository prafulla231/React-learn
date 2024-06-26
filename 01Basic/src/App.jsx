import { useState } from "react"

function App() {
  
  let [score,setScore] = useState(15);
  // let score =25
    function increaseScore(){
      if(score > 19){
        alert(`oops,we cant increase it further...current score is ${score}` )
        setScore(score)
      }
      else{
        setScore(score +1);
      console.log(score);
      }  
      
    } 
    function decreaseScore(){
      if(score < 1){
        alert(`oops,we cant decrease it further...current score is ${score} ` )
        setScore(score)
      }
      else{
        setScore(score -1);
        console.log(score);
      }  
      
    }

  return (
    <>
      <div  >
        
      <h1 >Hello Bhai</h1>
      <h2>lets play counter counter</h2>
      <h3 className="">score value is {score}</h3>
      <button className="bg-green-400 text-black p-2 rounded-xl" onClick={increaseScore}>Increase the score</button> <span />
      <button className="bg-green-400 text-black p-2 rounded-xl" onClick={decreaseScore}>decrease the score</button>
      </div>

      
    </>
  )
} 

export default App
