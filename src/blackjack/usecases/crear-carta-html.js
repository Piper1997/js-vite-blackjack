/**
 * 
 * @param {String} carta 
 * @returns {HTMLEImagelement}
 */

export const crearCartaHML = (carta) => {
    if (!carta) throw Error ('La carat es un argumento necesario');


    // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `dist/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        
     return imgCarta;

}