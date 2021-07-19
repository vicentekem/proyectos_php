<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">    
    <title>Tienda Online</title>
    <link rel="stylesheet" href="public/bootstrap/css/bootstrap.min.css">
    <style>
        .card__img{
            /*object-fit: contain*/
            height:10rem;
        }
    </style>
</head>
<body>
    <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#">OFA Games</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Juegos PS4</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">Juegos PS3</a>
                </li>
                
            </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
    </header>

    <div class="container px-0">
        <div id="container_card" class="row">
        </div>
    </div>


<script id="template" type="x-tmpl-mustache">
{{#data}}
    <div class="card m-1 col-md-2 px-0" style="width: calc(16.6% - 0.50rem);">
        <img class="card-img-top card__img" src="{{image}}" alt="Card image cap" title="{{title}}">
        <div class="card-body">
            <!--<h5 class="card-title">{{title}}</h5>-->
            <p class="card-text">{{price}}</p>
            <a href="#" id="btn_add_{{id}}" data-id="{{id}}" class="card__btn btn btn-primary">Añadir</a>
        </div>
    </div>
{{/data}}
</script>

<script src="public/bootstrap/css/bootstrap.min.js"></script>
<script src="public/plugins/mustache/mustache.min.js"></script>
<script>

let productsStorage = [];
let productsData = [];

function loadDataToTemplate(id_template,id_container,dataJson){
    let template = document.getElementById(id_template).innerHTML;
    let rendered = Mustache.render(template, { data: dataJson });
    document.getElementById(id_container).innerHTML = rendered;
}

function addProductToCard(id_product){
    let productSelected = productsData.find( el => el.id == id_product );
}

document.addEventListener('DOMContentLoaded', () => {
    
    let container_cards = document.getElementById("container_card");
    container_cards.addEventListener('click',(ev)=>{
        ev.preventDefault();
        let element = ev.target;
        if(element.classList.contains('card__btn')){
            let id_product = element.dataset.id;
            addProductToCard(id_product);
        }        
    });

    fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then( json => {    
        productsData = json;   
        loadDataToTemplate('template','container_card',json);        
    });

});


</script>
</body>
</html>





