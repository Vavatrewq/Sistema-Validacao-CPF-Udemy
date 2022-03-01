import ValidationCpf  from './validationCpf';

export default class GeratorCpf{
    rand(min = 100000000, max = 999999999){
        return String(Math.floor( Math.random() * (max - min) + min));
    }

    formate(cpf){
        return (
            cpf.slice(0,3) + '.' +
            cpf.slice(3,6) + '.' +
            cpf.slice(6,9) + '-' +
            cpf.slice(9,11)
        )
    }

    genereitorCpf(){
        const cpfDigite = this.rand();
        const digiteOne = ValidationCpf.createDigite(cpfDigite)
        const digiteTwo = ValidationCpf.createDigite(cpfDigite + digiteOne)
        
        const complete = cpfDigite + digiteOne + digiteTwo;
        return this.formate(complete)
    }
}