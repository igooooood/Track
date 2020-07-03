import React from "react";

import Select from "../../../Select/Select";

import "./styles.css";

type IPropsOvertime = {
  overtime: number;
  removeOvertime: Function;
  handleChangeReasonOvertime: Function;
  handleChangeWhatDoOvertime: Function;
  showDeleteButton: boolean;
};

export default function OvertimeBlock(props: IPropsOvertime) {
  const {
    overtime,
    removeOvertime,
    showDeleteButton,
    handleChangeReasonOvertime,
    handleChangeWhatDoOvertime
  } = props;

  const handleDeleteButton = () => {
    removeOvertime();
  };

  return (
    <section>
      <div className="overtime">
        <h1 className="overtime__title">Переработка:</h1>
        <span className="overtime__value">{overtime}</span>
        {showDeleteButton && (
          <button
            onClick={handleDeleteButton}
            className="overtime__btn btn-small waves-effect waves-light pink darken-2"
          >
            <i className="material-icons">delete</i>
          </button>
        )}
      </div>
      <div>
        <Select
          handleChange={handleChangeReasonOvertime}
          className="overtime__select"
          label="Кокова причина переработок?"
          options={["По просьбе PM", "В счет будущих переработок"]}
        />
        <Select
          handleChange={handleChangeWhatDoOvertime}
          className="overtime__select"
          label="Что делать с часами?"
          options={["В накопление", "В оплату"]}
        />
      </div>
    </section>
  );
}
