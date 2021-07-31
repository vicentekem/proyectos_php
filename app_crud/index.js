let crud_personal = {
    list_personal : [],
    modal_personal : new bootstrap.Modal( document.getElementById('modal_personal') , {}),
    init : ()=>{},
    add : (personal)=>{

        let msg = crud_personal.validate(personal);
        if( msg !== "" ) return alert(msg);

        crud_personal.list_personal.push(personal);
        crud_personal.render();
    },
    update : (personal)=>{

        let msg = crud_personal.validate(personal);
        if( msg !== "" ) return alert(msg);

        let index = crud_personal.list_personal.findIndex( (p)=> p.dni === personal.dni );
        crud_personal.list_personal.splice(index,1,personal);
        crud_personal.render();
        crud_personal.modal_personal.hide();
    },
    delete : (dni)=>{
        let c = confirm("Esta seguro que desea eliminar?");
        if(c){
            let index = crud_personal.list_personal.findIndex( (personal)=> personal.dni === dni );
            crud_personal.list_personal.splice( index, 1 );
            crud_personal.render();
        }
        
    },

    validate : (personal)=>{

        let msg_error = "";
        if(personal.dni === "") msg_error = "Ingrese el campo DNI";
        else if(personal.nombres === "") msg_error = "Ingrese el campo Nombre";
        
        return msg_error;
     },

    showModalEdit : (personal)=>{

        document.getElementById("txt_edit_dni").value = personal.dni;
        document.getElementById("txt_edit_nombres").value = personal.nombres;
        document.getElementById("txt_edit_apellidos").value = personal.apellidos;
        document.getElementById("cbx_edit_cargo").value = personal.cargo;
        document.getElementById("txt_edit_salario").value = personal.salario;

        crud_personal.modal_personal.show();
        //modal_personal.hide();
    },

    render : ()=>{
        table.render( crud_personal.list_personal,[
            {name: 'dni'},
            {
                renderColumn: ( data )=> { return data.nombres + " " + data.apellidos; } 
            },
            {name: 'cargo'},
            {name: 'salario'},
            {
                renderColumn: (data)=> {
                    return `
                        <button class='btn btn-sm btn-danger'  onclick='crud_personal.delete("${data.dni}")' >Eliminar</button>
                        <button class='btn btn-sm btn-warning' onclick='crud_personal.showModalEdit( ${ JSON.stringify(data) })' >Editar</button>
                    `;
                }
            }
        ]);
    }

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
                
                if(columns[i].name !== undefined ){
                    tr += `<td>${element[ columns[i].name ]}</td>`
                }
                else if(columns[i].renderColumn !== undefined && typeof columns[i].renderColumn === "function"){
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
    let btn_edit = document.getElementById("btn_edit");
    
    table.container = tbl_personal;
    //modal_personal.show();

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
        
    });

    btn_edit.addEventListener('click',(  )=>{

        let txt_dni = document.getElementById("txt_edit_dni");
        let txt_nombres = document.getElementById("txt_edit_nombres");
        let txt_apellidos = document.getElementById("txt_edit_apellidos");
        let cbx_cargo = document.getElementById("cbx_edit_cargo");
        let txt_salario = document.getElementById("txt_edit_salario");



        let personal = {
            dni : txt_dni.value,
            nombres : txt_nombres.value,
            apellidos : txt_apellidos.value,
            cargo : cbx_cargo.value,
            salario : parseInt(txt_salario.value),
        }
        
        crud_personal.update(personal);

    });

});




