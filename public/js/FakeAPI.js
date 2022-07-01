let pUrl = "https://my-json-server.typicode.com/AndrewCookie02/Api_Cakes/Ingredientes" ;
fetch(pUrl)
.then(response => response.json())
.then(data => {
    //console.log(data);

    let modal = document.querySelector("#Modal");
    //funcion onclick
    let card = document.querySelectorAll('.cardMenu')
    //let bodyCard = document.querySelectorAll(".card-body");
    console.log(card);
    let texto = "<div class='card-body'>" ; 
    texto = texto + "<p class='card-text texto-txtp2'>Some quick  text to build on the card title and make up the bulk of the card's content.</p> <button type='button' class='btn btn-primary verModal' data-bs-toggle='modal' data-bs-target='#Modal' id='" + data.id + "'" + "onclick = 'VerInfo("+ data.id +")'"> + "M&aacute;s Información </button>"
    texto = texto + "</div>";
    card.innerHTML = texto ;
     console.log(texto);

/*
    let tbody = "<tbody>" ; 
    let lista = data.Ingredientes;
    
    */
})
.catch( error => console.log(error));