import './assets/css/style.css';
import './assets/css/resposive.css';
import GeratorCpf from './components/generatorCpf';

(function(){
    const gerar = new GeratorCpf();
    const result = document.querySelector('.result');

    document.addEventListener('click', (el)=>{
        let elements = el.target;

        if(elements.classList.contains('btn')){
            result.innerHTML = gerar.genereitorCpf();
        };

        if(elements.classList.contains('clear')){
            result.innerText = 'Seu CPF';
        }
    })
})();

