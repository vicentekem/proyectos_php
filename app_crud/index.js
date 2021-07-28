let crud_personal = {
    list_personal : [],
    init : ()=>{},
    add : (personal)=>{
        crud_personal.list_personal.push(personal);
    },
    update : ()=>{

    },
    delete : ()=>{},
}

let table = {
    page : 1,
    cnt_rows : 10,
    container : null,
    init : ()=>{},
    render : (data,columns)=>{
        table.container.innerHTML = "";
        data.forEach(element => {
            let tr = "<tr>"

            for(let i=0;i<columns.length;i++){                
                
                if(columns[i].name != undefined ){
                    tr += `<td>${element[ columns[i].name ]}</td>`
                }
                else if(columns[i].renderColumn != undefined){                     
                    tr += `<td>${ columns[i].renderColumn( element ) }</td>`
                }
            }

            tr += "</tr>";            
            table.container.innerHTML+= tr;
        });
    }
}

document.addEventListener("DOMContentLoaded",()=>{

    let tbl_personal = document.getElementById("tbl_crud");
    let btn_add = document.getElementById("btn_add");

    table.container = tbl_personal;    

    btn_add.addEventListener('click',()=>{

        let txt_dni = document.getElementById("txt_dni");
        let txt_nombres = document.getElementById("txt_nombres");
        let txt_apellidos = document.getElementById("txt_apellidos");
        let cbx_cargo = document.getElementById("cbx_cargo");
        let txt_salario = document.getElementById("txt_salario");

        let personal = {
            dni : txt_dni.value,
            nombres : txt_nombres.value,
            apellidos : txt_apellidos.value,
            cargo : cbx_cargo.value,
            salario : parseInt(txt_salario.value),
        }
        
        crud_personal.add(personal);

        table.render( crud_personal.list_personal,[
            {name: 'dni'},
            {
                renderColumn: ( data )=> { return data.nombres + " " + data.apellidos; } 
            },
            {name: 'cargo'},
            {name: 'salario'}
        ]);
        
    });

});




