let taskList = {

    tasks_arr : [],
    next_id_task : 1,
    container : null,

    initTasks : ()=>{
        taskList.tasks_arr = JSON.parse(localStorage.getItem('tasklist')) || [];
        if( taskList.tasks_arr.length > 0 ){
            taskList.renderTasks();
        } 
    },

    addTask : (task) =>{        
        taskList.tasks_arr.push(task);
        localStorage.setItem('tasklist',JSON.stringify(taskList.tasks_arr));
    },

    renderTasks : ()=>{
        let taskHTML = "";
        taskList.tasks_arr.forEach( ( t )=>{
            taskHTML += `
                <li class="task-list__item"> ${t.title}
                    <a href="#" data-idtask="${t.id}" class="task-list__delete" title="eliminar">x</a>
                </li>
            `;
        });
        taskList.container.innerHTML = taskHTML;        
    },

    deleteTask : (id_task)=>{
        let index_task = taskList.tasks_arr.findIndex( (t) => t.id == id_task );
        taskList.tasks_arr.splice( index_task, 1);
        localStorage.setItem('tasklist',JSON.stringify(taskList.tasks_arr));
    }
}



document.addEventListener('DOMContentLoaded',()=>{

    let txt_addtask = document.getElementById("txt_addtask");
    let btn_addtask = document.getElementById("btn_addtask");
    let tasklist_container = document.getElementById("taskList");
    
    taskList.container = tasklist_container;
    taskList.initTasks();    

    btn_addtask.addEventListener('click', ()=>{

        let task = { id : taskList.next_id_task++, title : txt_addtask.value.trim() };

        taskList.addTask(task);
        taskList.renderTasks();
        txt_addtask.value = "";
    });

    tasklist_container.addEventListener('click',( event )=>{

        let element = event.target;
        if(element.localName == 'a' ){
            let id_task = element.dataset.idtask;
            taskList.deleteTask(id_task);
            taskList.renderTasks();
        }

    });

});




