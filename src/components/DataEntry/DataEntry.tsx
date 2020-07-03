import React from "react";

import cn from "classnames";

import "./styles.css";

import Field from "../Field/Field";

export type TData = {
  normOfHours: number;
  hoursWorked: number;
  dayleRate: number;
};

type IPropsDataEntry = {
  handleChange: Function;
  timeData: TData;
  className?: string;
};

export default function DataEntry(props: IPropsDataEntry) {
  const { timeData, handleChange, className } = props;
  const { hoursWorked, normOfHours, dayleRate } = timeData;

  const handleChangeField = (value: string, name: string) => {
    console.log("value", value);
    console.log("name", name);
    const newData = { ...timeData, [name]: Number(value) };
    handleChange(newData);
    console.log(newData);
  };

  return (
    <section className={cn("data-entry card darken-4", className)}>
      <div
        className="row tooltipped"
        data-position="right"
        data-tooltip="Месячная норма часов"
      >
        <Field
          id="norm-hours"
          value={normOfHours}
          label="Норма часов"
          type="number"
          onChange={(value: any) => handleChangeField(value, "normOfHours")}
        />
      </div>
      <div
        className="row tooltipped"
        data-position="right"
        data-tooltip="Введите отработанные часы на данный момент. Если данная форма заполняется в первый рабочий день, то это 0. Если это крайний рабочий день и до этого все дни были отработаны, то это 152 (при условии что месячная норма 160 и дневная ставка 8)"
      >
        <Field
          id="hours-worked"
          value={hoursWorked}
          label="Отработанные часы"
          type="number"
          onChange={(value: any) => handleChangeField(value, "hoursWorked")}
        />
      </div>
      <div
        className="row tooltipped"
        data-position="right"
        data-tooltip="Значение которое отвечает за то, сколько часов в день отрабатывает пользователь"
      >
        <Field
          id="dayle-rate"
          value={dayleRate}
          label="Дневная ставка"
          type="number"
          onChange={(value: any) => handleChangeField(value, "dayleRate")}
        />
      </div>
    </section>
  );
}
