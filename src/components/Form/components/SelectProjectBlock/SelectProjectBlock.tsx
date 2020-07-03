import React from "react";

import projects from "../../../../mocks/projects";
import Select from "../../../Select/Select";

import "./styles.css";

type projects = {
  name: string;
  tasks: string[];
};

type IPropsSelectProjectBlock = {
  currentProject: string;
  handleChangeProject: Function;
  handleChangeTask: Function;
};

export default function SelectProjectBlock(props: IPropsSelectProjectBlock) {
  const { handleChangeProject, handleChangeTask, currentProject } = props;

  const getTasksSelectedProject = (projects: projects[]) => {
    if (currentProject) {
      const selectedProject = projects.find(
        item => item.name === currentProject
      );
      return selectedProject!.tasks;
    } else {
      return [];
    }
  };

  return (
    <div>
      <Select
        className="task-select"
        label="Проект"
        handleChange={handleChangeProject}
        options={projects.map(item => item.name)}
        disabledSelect="Выберите проект"
      />
      {currentProject && (
        <Select
          className="task-select"
          label="Задача"
          handleChange={handleChangeTask}
          options={getTasksSelectedProject(projects)}
          disabledSelect="Выберите задачу"
        />
      )}
    </div>
  );
}
