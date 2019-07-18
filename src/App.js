import React, { useState, useEffect } from "react";

import Picture from'./components/Picture';
import Explanation from './components/Explanation';
import Header from './components/Header';

import axios from "axios";

import "./App.scss";

function App() {
  // Created a state for each piece of data being passed around
  const [dateState, setDateState] = useState([])
  const [explanationState, setExplanationState] = useState([])
  const [titleState, setTitleState] = useState([])
  const [urlState, setUrlState] = useState([])


  useEffect(() => {
    // Created my axios request within useEffect
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=Z4UaEDXfg4oFzV9ymB3z437byZwHScXFaMeAX1XR')
    .then(response => {
      // Attach the response to each needed state
      setDateState(response.data.date)
      setExplanationState(response.data.explanation)
      setTitleState(response.data.title)
      setUrlState(response.data.url)
      console.log(response.data.url)
    })
    .catch(error => {
      console.log('An unexpected error has occurred. Have you tried unplugging it and plugging it back in again?', error)
    })
  }, []);

  return (
    <div className="App">
      <section className='upper-image'>
        <img src="https://ih0.redbubble.net/image.562683752.7556/pp,550x550.u6.jpg" style={{height: '150px', width: '150px'}}/>
      </section>

      <section className='color-bg'>
        <Header titleState={titleState} dateState={dateState} />
        <Picture urlState={urlState} />
        <Explanation explanationState={explanationState} />
      </section>
    </div>
  );
}

export default App;
