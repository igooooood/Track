import React, { useState } from "react";
import Form from "./components/Form/Form";
import DataEntry from "./components/DataEntry/DataEntry";
import "./styles.css";

import { TData } from "./components/DataEntry/DataEntry";

export default function App() {
  const [timeData, setTimeData] = useState({
    normOfHours: 160,
    hoursWorked: 156,
    dayleRate: 8
  });

  const changeTimeData = (obj: TData) => {
    setTimeData(obj);
  };

  return (
    <div className="App">
      <Form
        normOfHours={timeData.normOfHours}
        hoursWorked={timeData.hoursWorked}
        dayleRate={timeData.dayleRate}
      />
      <DataEntry
        className="App__entry-data"
        handleChange={changeTimeData}
        timeData={timeData}
      />
    </div>
  );
}
