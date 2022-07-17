export default function Task(name, dueDate) {
  const getName = () => {
    return name;
  };

  const getDueDate = () => {
    return dueDate;
  };

  return { getName, getDueDate };
}
