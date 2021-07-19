<?php

$input = "price";

$products = [
    [ 
        "id" => "2",
        "name" => "PES2021",
        "price" => 120
    ],
    [ 
        "id" => "5",
        "name" => "PES2020",
        "price" => 80
    ]
];

//echo $product[$input];
echo json_encode($products);







