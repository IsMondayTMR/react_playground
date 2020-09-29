import React, {useState,useEffect, useRef}from 'react';
/**
 * Challenge: Using hooks, track the state of the text in the textarea on every keystroke
 * To verify it's working, you could just console.log the state on every change
 */
function App() {
 const [text,setText] = useState("")
 const [wordCount, setWordCount] = useState(0)
 const [timeRemaining, setTimeRemaining] = useState(10)
 const [isRunning, setRunning] = useState(false)
 const inputText = useRef(null)
  function onChange_handler(e){
    const {value} = e.target
    setText(value)
  }
  function calculate_length(text){
    const text_arry = text.trim().split(" ")
    const length = text_arry.filter(word => word !== "").length
    return length
  }
  
  function start_game(){
    setText("")
    setTimeRemaining(10)
    setWordCount(0)
    setRunning(true)
    inputText.current.disabled =false 
    inputText.current.focus()
  }

  function end_game(){
    setRunning(false)
    setWordCount(calculate_length(text))
  }

  useEffect(()=>{
    if(timeRemaining>0 && isRunning === true){
        setTimeout(() => {
          setTimeRemaining(timeRemaining-1)
        }, 1000);
      }
      else if(timeRemaining === 0){
        end_game()
        
      }
  },[timeRemaining,isRunning])
  return (
    <div className="App">
        <h1>How fast do you type?</h1>
        <textarea 
          ref = {inputText}
          placeholder = "lets start your speed test!" 
          value={text}
          disabled = {!isRunning} 
          onChange = {onChange_handler} />
        <h4>Remaining time : {timeRemaining}</h4>
        <button
          disabled = {isRunning} 
          onClick ={start_game} > Start </button>
        <h1>Count：{wordCount} </h1>
    </div>
  );
}

export default App;
