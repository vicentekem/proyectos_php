let taskList = {    
    tasks : [],
    id_task : 1,
    container : null,
    initTasks : ()=>{
        taskList.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        taskList.renderTasks(taskList.container);
    },

    updateLocalStorageTasks : () =>{
        localStorage.setItem('tasks', JSON.stringify(taskList.tasks) );        
    },

    addTask : (task)=> {
        taskList.tasks.push(task);
        taskList.updateLocalStorageTasks();
        taskList.renderTasks(taskList.container);
    },

    renderTasks : (container)=>{
        let taskHTML = "";
        taskList.tasks.forEach(task => {
            taskHTML += `
                <li class="task-list__item"> ${task.title}
                    <a href="#" data-id="${task.id}" class="task-list__delete" title="eliminar">x</a>
                </li>
            `;
        });
        container.innerHTML = taskHTML;
    },

    deleteTask : (id_task)=>{
        let index = taskList.tasks.findIndex( (task)=> task.id == id_task );
        taskList.tasks.splice( index , 1 );
        taskList.updateLocalStorageTasks();
        taskList.renderTasks(taskList.container);
    }
};

document.addEventListener('DOMContentLoaded',()=>{
    
    let txt_addtask = document.getElementById("txt_addtask");
    let btn_addtask = document.getElementById("btn_addtask");
    let task_list_container = document.getElementById("taskList");

    taskList.container = task_list_container;
    taskList.initTasks();
    
    btn_addtask.addEventListener('click', ()=> addAndRenderTask(txt_addtask,task_list_container) );
    txt_addtask.addEventListener('keyup', (event)=> event.key === 'Enter' ? addAndRenderTask(txt_addtask,task_list_container): null);

    task_list_container.addEventListener('click',(event)=>{
        let element = event.target;        
        if(element.classList.contains('task-list__delete')){
            let id_task = element.dataset.id;
            taskList.deleteTask(id_task);
            
        }
    });
    
});

function addAndRenderTask( txt_addtask,task_list_container ){
    let task = {}
    task.id = taskList.id_task++;
    task.title = txt_addtask.value.trim();
    if(task.title === "") return alert("Ingrese una tarea");
    txt_addtask.value = "";  
    taskList.addTask(task);    
}






