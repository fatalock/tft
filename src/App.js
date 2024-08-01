import React, { useState, useCallback } from "react";
import "./App.css";
import SourceAll from "./components/sourceAll";
import TargetAll from "./components/targetAll";

function App() {
  const [data, setData] = useState([null, null, null, null, null, null, null, null]);
  console.log("app rerendered");

  const HandleClickXd = useCallback((e) => {
    console.log(e);
    console.log(data);
    setData((prevData) => {
      const i = prevData.findIndex(item => item === null);
      if (i !== -1) {
        const newData = [...prevData];
        newData[i] = e;
        return newData;
      }
      return prevData;
    });
  }, []);
  const handleClickRm = useCallback((item) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData[item[1]] = null; // Set the specific index to null
      return newData;
    });
  }, []);

  return (
    <div className="App">
      <TargetAll data={data} HandleClick2={handleClickRm}/>
      <SourceAll HandleClick2={HandleClickXd} />
    </div>
  );
}

export default App;
