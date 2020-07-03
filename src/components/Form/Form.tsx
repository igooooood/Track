import React, { useState, useEffect } from "react";

import M from "materialize-css";

import SelectProjectBlock from "./components/SelectProjectBlock/SelectProjectBlock";
import TimeBlock from "./components/TimeBlock/TimeBlock";
import OvertimeBlock from "./components/OvertimeBlock/OvertimeBlock";

import "./styles.css";

type TpropsForm = {
  hoursWorked: number;
  normOfHours: number;
  dayleRate: number;
};

export default function Form(props: TpropsForm) {
  const [currentProject, setCurrentProject] = useState("");
  const [isSelectedTask, setIsSelectedTask] = useState(false);
  const [reasonOvertime, setReasonOvertime] = useState("");
  const [whatDoOvertime, setWhatDoOvertime] = useState("");
  const [trackTime, setTrackTime] = useState(0);
  const [overtime, setOvertime] = useState(0);

  const { normOfHours, hoursWorked, dayleRate } = props;

  useEffect(() => {
    M.updateTextFields();
  }, [isSelectedTask]);

  useEffect(() => {
    M.AutoInit();
  }, [currentProject, overtime]);

  useEffect(() => {
    if (overtime === 0) {
      setReasonOvertime("");
      setWhatDoOvertime("");
    }
  }, [overtime]);

  const handleSelectProject = (value: string) => {
    setCurrentProject(value);
  };

  const handleSelectTask = () => {
    setIsSelectedTask(true);
  };

  const handleSelectReasonOvertime = (value: string) => {
    setReasonOvertime(value);
  };

  const handleSelectWhatDoOvertime = (value: string) => {
    setWhatDoOvertime(value);
  };

  const getTotalHours = (hours: number) => {
    return hoursWorked + hours;
  };

  const handleChangeTrackTime = (value: number) => {
    if (typeof Number(value) === "number" && value >= 0) {
      setTrackTime(Number(value));
      calculateOvertime(Number(value));
    }
  };

  const calculateOvertime = (value: number) => {
    const totalHours = getTotalHours(value);
    if (totalHours > normOfHours) {
      setOvertime(totalHours - normOfHours);
    } else {
      setOvertime(0);
    }
  };

  const removeOvertime = () => {
    setTrackTime(trackTime - overtime);
    setOvertime(0);
  };

  const checkActivity = () => {
    const isFieldsFilled = isSelectedTask && trackTime > 0;
    if (overtime > 0) {
      return isFieldsFilled && reasonOvertime && whatDoOvertime;
    } else {
      return isFieldsFilled;
    }
  };

  const checkDisplayDeleteButton = () => {
    return trackTime < dayleRate && overtime > 0;
  };

  return (
    <div className="form card darken-4">
      <h1 className="form__title">My activity</h1>
      <SelectProjectBlock
        currentProject={currentProject}
        handleChangeProject={handleSelectProject}
        handleChangeTask={handleSelectTask}
      />
      {isSelectedTask && (
        <>
          <TimeBlock
            trackTime={trackTime}
            dayleRate={dayleRate}
            onChange={handleChangeTrackTime}
          />
          <div className="row form__textarea">
            <div className="input-field col s12">
              <textarea
                placeholder="Опишите выполненную работу"
                className="materialize-textarea"
              />
            </div>
          </div>
        </>
      )}
      {overtime > 0 && (
        <OvertimeBlock
          handleChangeReasonOvertime={handleSelectReasonOvertime}
          handleChangeWhatDoOvertime={handleSelectWhatDoOvertime}
          showDeleteButton={checkDisplayDeleteButton()}
          removeOvertime={removeOvertime}
          overtime={overtime}
        />
      )}
      <button
        className={`form__btn waves-effect waves-light btn-small ${!checkActivity() &&
          "disabled"}`}
      >
        Готово
      </button>
    </div>
  );
}
