let list = [
    'God of war',
    'Crash Bandicoot',
    'Pes2021',
    'Resident Evil 3',
    'Pes2022',
];

let cant_rows_x_page = 2;
let page = 1;

function renderList(list,container){
    container.innerHTML = "";
    list.forEach( element => container.innerHTML += `<li>${element}</li>` );
}

function renderTablePersonal(table,value){
    
    fetch("personal.json")
    .then( (result) => result.json() )
    .then( json_personal => {

        let json_filtered = json_personal.filter( (personal)=>
            personal.nombres.toLocaleUpperCase().includes(value.toLocaleUpperCase()) ||
            personal.apellido_paterno.toLocaleUpperCase().includes(value.toLocaleUpperCase()) ||
            personal.apellido_materno.toLocaleUpperCase().includes(value.toLocaleUpperCase()) ||
            personal.cargo.toLocaleUpperCase().includes(value.toLocaleUpperCase())            
        );
        /*
            Math.ceil(2.5) = 3;
            Math.floor(2.5) = 2;
            Math.round(2.5) = 3;
        */
        let cant_pages = Math.ceil(json_filtered.length/cant_rows_x_page);
        let container_paginate_personal = document.getElementById("paginate_personal");
        container_paginate_personal.innerHTML = "";

        for(let i=1;i<=cant_pages;i++){
            container_paginate_personal.innerHTML += `<a href="#" >${i}</a> `;
        }
        /*
            (1 - 1) * 3 = 0
            (2 - 1) * 3 = 3
            (3 - 1) * 3 = 6
        */
        let init = (page-1)*cant_rows_x_page;
        let end  = init + cant_rows_x_page;

        let json_for_paginate = json_filtered.slice(init,end);      
        table.innerHTML = "";

        json_for_paginate.forEach( personal => {
            table.innerHTML += `
                <tr>
                    <td>${personal.id}</td>
                    <td>${personal.nombres}</td>
                    <td>${personal.apellido_paterno} ${personal.apellido_materno}</td>
                    <td>${personal.cargo}</td>
                    <td>${personal.salario}</td>                    
                </tr>
            `;
        });

    });

}


document.addEventListener('DOMContentLoaded',()=>{

    let txt_search = document.getElementById('txt_search');
    let container_list = document.getElementById('container_list');

    let txt_search_personal = document.getElementById('txt_search_personal');
    let tbl_personal = document.getElementById('tbl_personal');

    let container_paginate_personal = document.getElementById('paginate_personal');

    renderList(list,container_list);    
    renderTablePersonal( tbl_personal,"");

    txt_search.addEventListener('search',()=>{
        let value = txt_search.value.trim();
        let list_filter = list.filter( element => element.toLocaleUpperCase().includes(value.toLocaleUpperCase()) );        
        renderList( list_filter , container_list );
    });

    txt_search_personal.addEventListener('search',()=>{
        let value = txt_search_personal.value.trim();
        renderTablePersonal(tbl_personal,value);
    });

    container_paginate_personal.addEventListener('click',(event)=>{
        event.preventDefault();
        let element = event.target;        
        if(element.localName == "a"){
            page = parseInt(element.innerText);
            renderTablePersonal(tbl_personal, txt_search_personal.value.trim());
        }
    });
    
});


