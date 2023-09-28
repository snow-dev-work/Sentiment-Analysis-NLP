import { useState } from 'react';

import Positive from './component/Positive';
import Negative from './component/Negative';
import Neutral from './component/Neutral';
import axios from 'axios';
import './App.css';

function App() {

  const [text, setText] = useState('');
  const [context, setContext] = useState([]);
  const submit = () => {
    var formdata = new FormData();
    formdata.append("text", text);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:5000", requestOptions)
      .then(response => response.json())
      .then(data => {
        setContext([data, ...context])
        setText('')
      })
      .catch(error => console.log('error', error));
  }

  return (
    <div className="App">
      <h1>Sentiment Analysis System Testing for AI project ----- MPC-Logan</h1>
      <div className='input'>
        <textarea type="text" name="text" id='text' value={text} onChange={(e) => { setText(e.target.value) }} />
      </div>
      <button onClick={submit}>Analysis</button>
      <div className='analysis'>       
          {context.map((text, id) =>{if(text.label === "negative") return <Negative key={id} text={text} />
          else if(text.label === "positive") return <Positive key={id} text={text} />
          else if(text.label === "neutral") return <Neutral key={id} text={text} />})}
      </div>
    </div>
  );
}

export default App;
