import React from "react";
import Form from "./components/Form/Form";
import "./styles.css";

const NORM_OF_HOURS = 160;
const AMOUNT_HOURSE = 156;
const DAILY_RATE = 8;

export default function App() {
  return (
    <div className="App">
      <Form
        hoursWorked={AMOUNT_HOURSE}
        dayleRate={DAILY_RATE}
        normOfHours={NORM_OF_HOURS}
      />
    </div>
  );
}
