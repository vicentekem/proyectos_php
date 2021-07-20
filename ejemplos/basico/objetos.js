//objetos:

/*let Joel = {
    amor_por_ella : false,

    comprarleRopa : function(){
        //.....
    },
    ayudarlaConMate: ()=>{

    }
};*/


let product = {
    id : '1',
    title: 'God of war 4',
    price : 120,    
    description : '',
    types: ['Accion'],
    category : 'PS4',
    subCategory : ''
}

//JSON -- JS object notation
//
//console.log(product);
let productString = JSON.stringify( product );

//console.log( JSON.stringify( product ) );
//console.log( JSON.parse( productString ) );

/*fetch("products.php")
.then(result => result.text())
.then( text => {
    console.log(text);
});*/

let products = [
    {
        id : '1',
        title: 'God of war 4',
        price : 120
    },
    {
        id:'3',
        name : 'Blur',
        price : 100
    },
    {
        id:'4',
        name : 'Crash Bandicof',
        price : 90
    }
];

//Agregar Elementos a un arreglo
//products.push( product );
//Eliminar Elementos de un arreglo
//products.splice(0,1);
let id = '4';
//let indexes = [0,1];
//let index = products.findIndex( ( elemento ) => { return elemento.id == id} );
//let p = products.find( ( elemento ) => { return elemento.id == id} );

products.forEach( (elemento,i) =>{
   if(elemento.price >= 95){
    products.splice(i,1);
   }
});

console.log( products );

//console.log( p );
//console.log( products.indexOf(p) );

//products.splice( index , 1 );


//console.log( products );

//console.log( products.find( ( elemento ) => { return elemento.id == id} ) );
//console.log( products );
//console.log( JSON.stringify(products) );


