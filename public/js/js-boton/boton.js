
var menuVisible = -1;//0= posicion del menu que se visualiza primero. -1 significa ninguna carta visible.

var botonVer = document.querySelectorAll('.BtnVer'); // Inicializando una variable 
//console.log(botonVer.length);


var listacartas = document.querySelectorAll('.listCards');

let seccCarts = document.getElementsByClassName('card');

/*console.log ('listacartas' + listacartas.length);

console.log ('card' + seccCarts.length); */


//oculta todas
listacartas.forEach(function(element) {
    element.classList.add('novisible');
  });



//index = posicion
botonVer.forEach(function(element,index)
{

    //console.log('posicionlistabotones' + index);

        element.onclick = function () {
            
            if (menuVisible >= 0){
                //diferente !=
                if (menuVisible != index){
                    listacartas[menuVisible].classList.remove('visible');
                    listacartas[menuVisible].classList.add('novisible');
                } else{
                    return false; //salir de la funcion 
                }
            }
            

            if(listacartas[index].classList.contains('novisible')){
                //quitar el visible, y añadir el ocultar
                listacartas[index].classList.remove('novisible');
                listacartas[index].classList.add('visible');
                menuVisible = index;
            }
        }
}
);


