let products = [
    {
        id : '1',
        title: 'God of war 4',
        price : 110
    },    
    {
        id:'3',
        name : 'Blur',
        price : 100
    },
    {
        id:'4',
        name : 'Crash Bandicof',
        price : 75
    },
    { 
        id : "5",
        name : "PES2020",
        price : 85
    },
    {
        id : "2",
        name : "PES2021",
        price : 123
    }
];

let elements = products.filter( (el) => el.price > 100 );

//console.log(elements);

elements.forEach( ( product )=>{

    //console.log( product );
    let index = products.findIndex( (el) => el.id == product.id );
    products.splice( index , 1 );

} );

let products_copy = products.slice(0,products.length);

products_copy.splice( 0 , 1 );

console.log( products_copy );
console.log( "************************" );
console.log( products);

