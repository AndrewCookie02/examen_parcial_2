let pUrl = "https://my-json-server.typicode.com/AndrewCookie02/Api_Cakes/Ingredientes" ;
fetch(pUrl)
.then(response => response.json())
.then(data => {
    console.log(data);
    let card = document.querySelectorAll('.cardMenu');
  
    
    data.forEach((element, index) => {
        //let posc = index + 1; //1 posicion (0) se le suma 1
        let boton = document.createElement ('button');
       // console.log(card[index]);
        
        boton.setAttribute("type","button"); //nombre del atributo y su valor.
        boton.setAttribute("class" ,"btn btn-primary verModal");
        boton.setAttribute("data-bs-target", "#Modal");
        boton.setAttribute("data-bs-toggle", "modal");
        boton.innerHTML = "M&aacute;s Información";


        //funcion onlick
        boton.onclick = () =>{
            let fila = 
            "<tr> <td>sugar </td>" +  
            "<th>" + element.Sugar + "</th> </tr>" +

            "<tr> <td> Eggs </td>" + 
            "<th>" + element.Eggs + "</th> </tr>" +

            "<tr> <td> Baking Powder </td>" +  
            "<th>" + element.BakingPowder + "</th> </tr>" +

            "<tr> <td> Margarine or softened butter </td>" +  
            "<th>" + element.Margarineorsoftenedbutter + "</th> </tr>" +

            "<tr> <td> Flour </td>" +  
            "<th>" + element.Flour + "</th> </tr>" +

            "<tr> <td> Vanilla extract </td>" +  
            "<th>" + element.Vanillaextract + "</th> </tr>" +

            "<tr> <td> Salt </td>" +  
            "<th>" + element.Salt + "</th> </tr>" +
            
            "<tr> <td> CakeMix </td>" +  
            "<th>" + element.Mix + "</th> </tr>" +

            "<tr> <td> Fruits </td>" +  
            "<th>" + element.Fruits + "</th> </tr>" ;
            
            document.querySelector(".tableMenu tbody").innerHTML = fila;
        }

        card[index].appendChild(boton); //los enlazo
        
    });
   
   
/*
    let tbody = "<tbody>" ; 
    let lista = data.Ingredients;
    
    */
})
.catch( error => console.log(error));