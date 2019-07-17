import React from "react";
import Picture from'./components/Picture';
import "./App.css";

function App() {
  {console.log('Hola from within the app!')}
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Picture />
    </div>
  );
}

export default App;
