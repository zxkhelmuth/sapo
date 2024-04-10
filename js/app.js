/* Como manipular los elementos del DOM */
const dateNumber = document.getElementById("dateNumber");
const dateText = document.getElementById("dateText");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");
const tasksContainer = document.getElementById("tasksContainer");
/* Funcion para establecer la fecha actual*/
const setDate = () => { /*Esta es una funcion flecha donde podemos almacenar*/
    const date = new Date();
    dateNumber.textContent = date.toLocaleDateString("es", { day: "numeric" });
    dateText.textContent = date.toLocaleDateString("es", { weekday: "long" });
    dateMonth.textContent = date.toLocaleDateString("es", { month: "short" });
    dateYear.textContent = date.toLocaleDateString("es", { year: "numeric" });
};

const addNewTask = (event) => {
    event.preventDefault();
    /*  */
    const { value } = event.target.taskText;
    if (!value) return;
    const task = document.createElement("div");
    task.addEventListener("click", changeTaskState);
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
};

setDate();
