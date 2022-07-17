import Project from "./Project";

export default (function TodoList() {
  let projects = [
    Project("Inbox", []),
    Project("Today", []),
    Project("This Week", []),
  ];

  const getProjects = () => {
    return projects;
  };

  const getProjectOne = (name) => {
    return projects.find((project) => project.getName() == name);
  };

  return { getProjects, getProjectOne };
})();
