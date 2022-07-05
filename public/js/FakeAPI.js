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
        
        boton.setAttribute("type","button"); //noimbre del atributo y su valor.
        boton.setAttribute("class" ,"btn btn-primary verModal");
        boton.setAttribute("data-bs-target", "#Modal");
        boton.setAttribute("data-bs-toggle", "modal");
        boton.innerHTML = "M&aacute;s Información";


        //funcion onlick
        boton.onclick = () =>{
            let fila = "<tr> <td> Sugar </th> <th>"+ element.Sugar + "</td>  </tr>" +
            "<tr> <td> Sugar </th> <th>"+ element.Eggs + "</td>  </tr>";

            document.querySelector(".tableMenu tbody").innerHTML = fila;
        }

        card[index].appendChild(boton); //los enlazo
        
    });
   
   
/*
    let tbody = "<tbody>" ; 
    let lista = data.Ingredientes;
    
    */
})
.catch( error => console.log(error));