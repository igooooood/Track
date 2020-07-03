import React from "react";

import cn from "classnames";

import "./styles.css";

type IPropsSelect = {
  label: string;
  options: string[];
  handleChange?: Function;
  className?: string;
  disabledSelect?: string;
};

export default function Select(props: IPropsSelect) {
  const { options, label, handleChange, className, disabledSelect } = props;

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleChange && handleChange(event.target.value);
  };

  return (
    <div className={cn("input-field", className)}>
      <select onChange={onChange}>
        <option disabled selected>
          {disabledSelect}
        </option>
        {options.map(elem => (
          <option defaultValue={elem} key={elem}>
            {elem}
          </option>
        ))}
      </select>
      <label>{label}</label>
    </div>
  );
}
