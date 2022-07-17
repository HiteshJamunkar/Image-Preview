import { useRef } from "react";
import "./index.css";

import React, { useState } from "react";

function App() {
  const [file, setFile] = useState();

  const ref = useRef();
  function handleChange(e) {
    setFile(URL.createObjectURL(ref.current.files[0]));
  }

  return (
    <div className="App">
      <h2>Add Image:</h2>
      <input type="file" onChange={handleChange} ref={ref} />
      <br />
      <br />
      <br />
      <img width="400" src={file} alt="" />
    </div>
  );
}

export default App;
