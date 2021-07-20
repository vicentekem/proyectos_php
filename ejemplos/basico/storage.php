<script>

//storage API
/*
sessionStorage
localStorage
*/

/*sessionStorage.setItem('nombre','joel');
console.log( sessionStorage.getItem('nombre') );*/
//localStorage.setItem('username','kempa123');
//console.log( localStorage.getItem('username') );
//localStorage.setItem('username','joel123');
//localStorage.removeItem('username');

let product = {
    id : 1,
    title : 'pes2020'
}

let product2 = {
    id : 2,
    title : 'pes2021'
}

let products = [];

products.push(product);
products.push(product2);

localStorage.setItem('productsSelected' , JSON.stringify(products) );



</script>