import React, { useState, useEffect } from "react";

import Picture from'./components/Picture';
import Explanation from './components/Explanation';

import axios from "axios";

import "./App.css";

function App() {

  const [data, setData] = useState([])
  const [dateState, setDateState] = useState([])
  const [explanationState, setExplanationState] = useState([])
  const [titleState, setTitleState] = useState([])
  const [urlState, setUrlState] = useState([])


  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=Z4UaEDXfg4oFzV9ymB3z437byZwHScXFaMeAX1XR')
    .then(response => {
      // Attach the response to each needed state
      setData(response.data)
      setDateState(response.data.date)
      setExplanationState(response.data.explanation)
      setTitleState(response.data.title)
      setUrlState(response.data.url)
    })
    .catch(error => {
      console.log('An unexpected error has occurred. Have you tried unplugging it and plugging it back in again?', error)
    })
  }, []);

  console.log('data: ', data)
  console.log('date:: ', dateState)
  console.log('explanation: ', explanationState)
  console.log('title: ', titleState)
  console.log('url: ', urlState)

  {console.log('Hola from within the app!')}
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Picture urlState={urlState} />
      <Explanation explanationState={explanationState} />
    </div>
  );
}

export default App;
