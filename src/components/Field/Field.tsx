import React from "react";
import "./styles.css";

type IPropsField = {
  id: string;
  label: string;
  value: string | number;
  onChange?: Function;
  placeholder?: string;
  disabled?: boolean;
  isHalf?: boolean;
  type?: "text" | "number";
};

export default function Field(props: IPropsField) {
  const {
    id,
    label,
    value,
    placeholder,
    disabled,
    onChange,
    isHalf = false,
    type = "number"
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value);
  };

  return (
    <div className={`input-field col ${isHalf ? "s6" : "s12"}`}>
      <input
        placeholder={placeholder}
        id={id}
        type={type}
        value={value}
        onChange={onChange && handleChange}
        disabled={disabled}
      />
      <label htmlFor={`${id} input`}>{label}</label>
    </div>
  );
}
