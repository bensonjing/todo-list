import "./style.css";
import TodoList from "./modules/TodoList";

const content = document.querySelector("#content");
const mainPage = document.createElement("div");
mainPage.setAttribute("id", "main_page");

const loadHeader = () => {
  const header = document.createElement("div");
  header.setAttribute("id", "header");
  header.textContent = "Todo List";
  content.appendChild(header);
};

const loadSidebar = () => {
  const sidebar = document.createElement("div");
  sidebar.setAttribute("id", "sidebar");

  const inboxBtn = document.createElement("button");
  inboxBtn.textContent = "Inbox";
  inboxBtn.addEventListener("click", () =>
    loadPage(TodoList.getProjectOne("Inbox"))
  );

  const todayBtn = document.createElement("button");
  todayBtn.textContent = "Today";
  todayBtn.addEventListener("click", () =>
    loadPage(TodoList.getProjectOne("Today"))
  );

  const thisWeekBtn = document.createElement("button");
  thisWeekBtn.textContent = "This Week";
  thisWeekBtn.addEventListener("click", () =>
    loadPage(TodoList.getProjectOne("This Week"))
  );

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

  const addProjectInput = document.createElement("div");
  addProjectInput.setAttribute("id", "add_project_input");

  const projectInput = document.createElement("input");
  projectInput.setAttribute("type", "text");

  const addBtn = document.createElement("button");
  addBtn.textContent = "Add";
  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Cancel";

  const buttons = document.createElement("div");
  buttons.appendChild(addBtn);
  buttons.appendChild(cancelBtn);

  addProjectInput.appendChild(projectInput);
  addProjectInput.appendChild(buttons);

  const addProjectButton = document.createElement("button");
  addProjectButton.textContent = "+ Add Project";
  addProjectButton.addEventListener("click", () => {
    addProjectInput.classList.toggle("active");
  });

  sidebar.appendChild(inboxBtn);
  sidebar.appendChild(todayBtn);
  sidebar.appendChild(thisWeekBtn);
  sidebar.appendChild(section);
  sidebar.appendChild(addProjectButton);
  sidebar.appendChild(addProjectInput);

  mainPage.appendChild(sidebar);
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

  const addTaskInput = document.createElement("div");
  addTaskInput.setAttribute("id", "add_task_input");

  const taskInput = document.createElement("input");
  taskInput.setAttribute("type", "text");

  const addBtn = document.createElement("button");
  addBtn.textContent = "Add";
  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Cancel";

  const buttons = document.createElement("div");
  buttons.appendChild(addBtn);
  buttons.appendChild(cancelBtn);

  addTaskInput.appendChild(taskInput);
  addTaskInput.appendChild(buttons);

  const addTaskBtn = document.createElement("button");
  addTaskBtn.textContent = "+ Add Task";
  addTaskBtn.addEventListener("click", () =>
    addTaskInput.classList.toggle("active")
  );

  page.appendChild(addTaskBtn);
  page.appendChild(addTaskInput);

  mainPage.appendChild(page);
};

const loadPage = (project) => {
  content.innerHTML = "";
  mainPage.innerHTML = "";
  loadHeader();
  loadSidebar();
  loadProject(project);
  content.appendChild(mainPage);
};

loadPage(TodoList.getProjectOne("Inbox"));
