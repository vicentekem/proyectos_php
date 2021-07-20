<script>

    /*let products = localStorage.getItem('productsSelected');
    if( products != null ){
        products = JSON.parse( products );
        console.log( products );
    }*/

    /*let products = localStorage.getItem('productsSelected') != null ? 
        JSON.parse( localStorage.getItem('productsSelected') ) : [] ;*/
    let products = localStorage.getItem('productsSelected') || [] ;
    
    products = JSON.parse( products );
    console.log( products );


</script>


