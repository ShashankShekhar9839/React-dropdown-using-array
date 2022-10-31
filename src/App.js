
// importing React from react library
import React from "react";

// importing css file 
import "./css_files/app.css";


// creating functional component
function App() {
  // options for dropdown list
  const options = ["JavaScript", "HTML", "CSS", "REACTJS", "NODEJS", "NEXTJS"];

  return (
    <div className="App">
      <div className="container">
        <h3>Select your option</h3>

        <h4>You have selected</h4>

        {/* creating drop down */}

        <select>
          {options.map(function (option) {
            return <option className="option">{option}</option>;
          })}
          ;
        </select>
      </div>
    </div>
  );

}

export default App;
