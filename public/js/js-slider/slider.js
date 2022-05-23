//cargamos en una variable los elementos que se visualizan en cierto tiempo
let listaDiv = document.querySelectorAll('.imgslider > div');
let posVisible = 0;

console.log (listaDiv.length); // Cuantos elementos tiene la lista

//la funcion foreach recorre c/u de los elemntos de la lista
listaDiv.forEach ((item) => {
    item.classList.add('oculta');
} );

    //visualiza el 1 objeto de la lista
    listaDiv[posVisible].classList.remove('oculta');
    listaDiv[posVisible].classList.add('visible');

//ejecuta tal funcion despues de tantos milisegundos, pero solo se ejecuta una vez

//cada cierto cierto la sigue ejecutando
setInterval(() => {    
    listaDiv.forEach ((item) => {
        item.classList.add('oculta');
    } );

    console.log ('elemento visible  ' + posVisible);

     //si el ultimo visible es igual al ultimo elemento, voy a reiniciar el contador 
     if(posVisible == (listaDiv.length - 1)) {
        posVisible = 0 //inicia con 0
    }else {//si en cambio
        posVisible++;
        //visualiza la primera, incremento para que en el sig ciclo, se visualice el sig elemento
    }

    //visualiza el 1 objeto de la lista
    listaDiv[posVisible].classList.remove('oculta');
    listaDiv[posVisible].classList.add('visible');

    console.log ('Siguiente a ver' + posVisible)


}, 4000);


let listacontrols = document.querySelectorAll ('.controls i');

listacontrols.forEach ((item, pos) => {
    item.onclick = () => {

        posVisible = pos;

        //La funcion forEach recorre cada uno de los elementos de la lista
        listaDiv.forEach ((item) => {
            item.classList.add('oculta');
        } );

        //visualiza el 1 objeto de la lista
        listaDiv[posVisible].classList.remove('oculta');
        listaDiv[posVisible].classList.add('visible');

    }
});

//funcionalidad del boton hacia atras (izq)
let btnLeft = document.querySelector('.leftright i:nth-child(1)');

btnLeft.onclick = () =>{
    console.log(this);
    if (posVisible == 0) {
        posVisible = listaDiv.length -1;
    }else{
        posVisible--;
    }

    //La funcion forEach recorre cada uno de los elementos de la lista
    listaDiv.forEach ((item) => {
        item.classList.add('oculta');
    } );

    //visualiza el 1 objeto de la lista
    listaDiv[posVisible].classList.remove('oculta');
    listaDiv[posVisible].classList.add('visible');  

    console.log ('Left ' + posVisible);
}


//funcionalidad del boton hacia adelante (derecho)
let btnRight = document.querySelector('.leftright i:nth-child(2)');

btnRight.onclick = () => {

    //La funcion forEach recorre cada uno de los elementos de la lista
    listaDiv.forEach ((item) => {
        item.classList.add('oculta');
    } );
    
    if (posVisible == (listaDiv.length - 1)) {
        posVisible = 0;
    }else {
        posVisible++; //Incremento para que en el siguiente ciclo, se visualice el sigueinte elemento
    }

    //visualiza el 1 objeto de la lista
    listaDiv[posVisible].classList.remove('oculta');
    listaDiv[posVisible].classList.add('visible');

}