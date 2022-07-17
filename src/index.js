import TodoList from "./modules/TodoList";

const content = document.querySelector("#content");

const loadHeader = () => {
  const header = document.createElement("div");
  header.textContent = "Todo List";
  content.appendChild(header);
};

const loadSidebar = () => {
  const sidebar = document.createElement("div");

  const inboxBtn = document.createElement("button");
  inboxBtn.textContent = "Inbox";
  const todayBtn = document.createElement("button");
  todayBtn.textContent = "Today";
  const thisWeekBtn = document.createElement("button");
  thisWeekBtn.textContent = "This Week";

  const section = document.createElement("div");
  const title = document.createElement("div");
  title.textContent = "Projects";
  section.appendChild(title);

  TodoList.getProjects()
    .filter(
      (project) =>
        project.getName() != "Inbox" &&
        project.getName() != "Today" &&
        project.getName() != "This Week"
    )
    .forEach((project) => {
      const projectBtn = document.createElement("button");
      projectBtn.textContent = project.getName();
      section.appendChild(projectBtn);
    });

  sidebar.appendChild(inboxBtn);
  sidebar.appendChild(todayBtn);
  sidebar.appendChild(thisWeekBtn);
  sidebar.appendChild(section);

  content.appendChild(sidebar);
};

const loadProject = (project) => {
  const page = document.createElement("div");

  const title = document.createElement("div");
  title.textContent = project.getName();
  page.appendChild(title);

  project.getTasks().forEach((task) => {
    const taskItem = document.createElement("div");

    const taskTitle = document.createElement("div");
    taskTitle.textContent = task.getName();
    taskItem.appendChild(taskTitle);

    const taskDueDate = document.createElement("div");
    taskDueDate.textContent = task.getDueDate();
    taskItem.appendChild(taskDueDate);

    page.appendChild(taskItem);
  });

  const addTaskBtn = document.createElement("button");
  addTaskBtn.textContent = "+ Add Task";
  page.appendChild(addTaskBtn);

  content.appendChild(page);
};

const initPage = () => {
  loadHeader();
  loadSidebar();
  loadProject(TodoList.getProjectOne("Inbox"));
};

initPage();
