// @param: tasks {array}: array of tasks belong to this project
export default function Project(name, tasks) {
  const getName = () => {
    return name;
  };

  const getTasks = () => {
    return tasks;
  };

  const addTask = (task) => {
    tasks.push(task);
  };

  return { getName, getTasks, addTask };
}
