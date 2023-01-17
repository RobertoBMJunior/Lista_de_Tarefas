//função de remover tarefa
function removeTask(task) {
    task.parentNode.remove(true)
}

//função de completar a tarefa
function completeTask (task) {
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("done");
}


//Função q adiciona tarefa
function addTask() {
    const taskTitle = document.querySelector("#task-title").value //Valor do input
    if(taskTitle) {
        //clona tamplate
        const tamplate = document.querySelector(".tamplate")
        const newTask = tamplate.cloneNode(true);
        //Adiciona titulo
        newTask.querySelector(".task-title").textContent = taskTitle;
        //Remover as classes
        newTask.classList.remove("tamplate")
        newTask.classList.remove("hide")
        //Adicionando tarefa na lista
        const list = document.querySelector('#task-list')
        list.appendChild(newTask);
        //Adicionando o evento de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function() {
            removeTask(this)
        })
        //Adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function() {
            completeTask(this)
        })
        //Limpar o input
        document.querySelector("#task-title").value = ""

    }
    
}






//Acionar botão
const addbtn = document.querySelector("#add-btn")

addbtn.addEventListener("click", function(e) {
    e.preventDefault()
    addTask()
})