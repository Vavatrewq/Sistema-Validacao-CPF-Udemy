import './assets/css/style.css';
import './assets/css/resposive.css';
import GeratorCpf from './components/generatorCpf';
import ValidationCpf from './components/validationCpf';

function executeInfo(){
    const gerar = new GeratorCpf();
    const result = document.querySelector('.result-gera');
    const inputValid = document.querySelector('.valid');
    const resultValid = document.querySelector('.result-valid');
    
    document.addEventListener('click', (el)=>{
        let elements = el.target;
        
        if(elements.classList.contains('btn-gera')){
            result.innerHTML = gerar.genereitorCpf();
        };
        
        if(elements.classList.contains('clear-gera')){
            result.innerText = 'Seu CPF';
        }
        
        if(elements.classList.contains('btn-valid')){
            const valid = new ValidationCpf(inputValid.value);

            if(valid.validar()){
                resultValid.innerText = 'CPF Valido';
            }else{
                resultValid.innerText = 'CPF Invalido';
            }
        };

        if(elements.classList.contains('clear-valid')){
            inputValid.value = '';
            resultValid.innerText = '';
        }
    })
}

executeInfo()

