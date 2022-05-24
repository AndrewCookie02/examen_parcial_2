window.addEventListener('resize', () => {
    let anchoWin = window.innerWidth; //me da ancho de la ventana
    let altoWin = window.innerHeight; //me da alto de la ventana

    //referencia al objeto html Aside
    let WindAside = document.getElementsByClassName('aside');

    if (anchoWin <= 660){
        
        for (j=0; j<WindAside.length; j++){
            WindAside[j].style.display = 'none';
        }

    }else{
        //recorrer elementos de un listado
        /*objDspCorta.forEach(element => {
            element.style.display = 'none';
        }
        ); */
        
        for (j=0; j<WindAside.length; j++){
            WindAside[j].style.display = 'inline-block';
        }
        
        
    }
}
);