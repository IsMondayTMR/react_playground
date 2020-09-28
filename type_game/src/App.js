import React, {useState}from 'react';
/**
 * Challenge: Using hooks, track the state of the text in the textarea on every keystroke
 * To verify it's working, you could just console.log the state on every change
 */
function App() {
  const [text, setText] = useState({words : ""})
  function handle_change(event){
    const [name,value] = event.target
    setText(prevText=>({...prevText,[name]:value}))
  }
  console.log(text)
  return (
    <div className="App">
        <h1>How fast do you type?</h1>
        <textarea placeholder = "lets start your speed test!" name="words" value ={text.words} onChange = {handle_change}/>
        <h4>Remaining time</h4>
        <button> Start </button>
        <h1>Count： </h1>
    </div>
  );
}

export default App;
