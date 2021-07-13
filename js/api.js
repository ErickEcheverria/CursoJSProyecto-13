import * as UI from './interfaz.js';

class API {
     constructor(artista, cancion) {
          this.artista = artista;
          this.cancion = cancion;
     }

     consultarAPI() {
          
          const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

          // Spinner
          mostrarSpinner();

          setTimeout(() => {
               fetch(url)
               .then( respuesta => respuesta.json())
               .then (resultado => {

                    if(resultado.lyrics){
                         const { lyrics } = resultado;

                         UI.divResultado.textContent = lyrics;
                         UI.headingResultado.textContent = `Letra de la cancion: ${this.cancion} de ${this.artista}`;
                    }else{
                         UI.divMensajes.textContent = `La canción ${this.cancion} de ${this.artista} no fue encontrada, intentalo nuevamente`;
                         UI.divMensajes.classList.add('error');

                         setTimeout(() => {
                              UI.divMensajes.textContent = '';
                              UI.divMensajes.classList.remove('error');
                         }, 3000);
                    }
                    
               })
          }, 5000);

          

     }
}

function mostrarSpinner(){
     while(UI.divResultado.firstChild){
          UI.divResultado.removeChild(UI.divResultado.firstChild);
     }
 
     const spinner = document.createElement('div');
     spinner.classList.add('spinner');
 
     spinner.innerHTML = `
         <div class="dot1"></div>
         <div class="dot2"></div>
     `;
 
     UI.divResultado.appendChild(spinner);

     setTimeout(() => {
          UI.divResultado.removeChild(UI.divResultado.firstChild);
     }, 3000);
 }

export default API;