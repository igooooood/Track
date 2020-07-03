import React from "react";

import Field from "../../../Field/Field";

import "./styles.css";

type IPropsTimeBlock = {
  trackTime: number;
  dayleRate: number;
  onChange: Function;
};

export default function TimeBlock(props: IPropsTimeBlock) {
  const { trackTime, dayleRate, onChange } = props;

  return (
    <div className="row time-block">
      <Field
        id="work-time"
        onChange={onChange}
        value={trackTime ? trackTime : ""}
        label="Время"
      />
      <Field id="rate" value={dayleRate} label="Ставка" disabled />
    </div>
  );
}
