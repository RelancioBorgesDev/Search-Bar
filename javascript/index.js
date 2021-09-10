import { palavras } from "./data/words.js";

const input = document.querySelector('.search');
const listaa = document.querySelector('.list');
const item = document.querySelector('.item');
let digitado;

input.addEventListener('keyup', (e)=>{
    e.preventDefault();
     digitado = e.target.value;
    let lista = [];
    if(digitado){
        lista = palavras.filter((data) =>{
            return data.toLocaleLowerCase().startsWith(digitado.toLocaleLowerCase());

        })

        lista = lista.map((data) =>{
            return data = `<li class="item"> ${data} <li>`;
        })

    }
    if(!digitado){
        item.style.display = 'none';
    }

    exibirResultados(lista)
})

function exibirResultados(lista){
    let listaResultados;
    if(!lista.length){
        digitado = input.value
        listaResultados = `<li class="item"> ${digitado} <li>`
    }else{
        listaResultados = lista.join('')
    }
    
    listaa.innerHTML = listaResultados;
}
