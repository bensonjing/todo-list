// @param: tasks {array}: array of tasks belong to this project
export default function Project(name) {
  let tasks = [];

  const getName = () => {
    return name;
  };

  const getTasks = () => {
    return tasks;
  };

  const addTask = (task) => {
    tasks.push(task);
  };

  const removeTask = (task) => {
    tasks = tasks.filter((taskItem) => taskItem !== task);
  };

  return { getName, getTasks, addTask, removeTask };
}
