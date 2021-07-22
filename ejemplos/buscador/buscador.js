let list = [
    'God of war',
    'Crash Bandicoot',
    'Pes2021',
    'Resident Evil 3',
    'Pes2022',
];
// render
function renderList(list,container){
    container.innerHTML = "";
    list.forEach( element => {
        container.innerHTML += `<li>${element}</li>`;
    });
}

function renderTablePersonal(table,value){
    
    fetch("personal.json")
    .then( (result) => result.json() )
    .then( (json_personal) => {

        let json_filtered = json_personal.filter( (personal)=> 
            personal.nombres.toLocaleUpperCase().includes(value.toLocaleUpperCase()) ||
            personal.apellido_paterno.toLocaleUpperCase().includes(value.toLocaleUpperCase()) ||
            personal.apellido_materno.toLocaleUpperCase().includes(value.toLocaleUpperCase()) ||
            personal.cargo.toLocaleUpperCase().includes(value.toLocaleUpperCase()) ||
            personal.salario.toLocaleUpperCase().includes(value.toLocaleUpperCase())
        );

        table.innerHTML = "";

        json_filtered.forEach( personal => {
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

    renderList(list,container_list);
    renderTablePersonal( tbl_personal,"");

    txt_search.addEventListener('search',()=>{
        let value = txt_search.value.trim();
        let list_filter = list.filter( (element)=> element.toUpperCase().includes(value.toLocaleUpperCase()) );
        renderList( list_filter , container_list );
    });

    txt_search_personal.addEventListener('search',()=>{
        let value = txt_search_personal.value.trim();
        renderTablePersonal(tbl_personal,value);
    });
    
});


