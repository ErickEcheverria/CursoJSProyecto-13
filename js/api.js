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
     while(resultado.firstChild){
         resultado.removeChild(resultado.firstChild);
     }
 
     const spinner = document.createElement('div');
     spinner.classList.add('spinner');
 
     spinner.innerHTML = `
     <div class="sk-cube sk-cube1"></div>
     <div class="sk-cube sk-cube2"></div>
     <div class="sk-cube sk-cube3"></div>
     <div class="sk-cube sk-cube4"></div>
     <div class="sk-cube sk-cube5"></div>
     <div class="sk-cube sk-cube6"></div>
     <div class="sk-cube sk-cube7"></div>
     <div class="sk-cube sk-cube8"></div>
     <div class="sk-cube sk-cube9"></div>
     `;
 
     resultado.appendChild(spinner);
 }

export default API;