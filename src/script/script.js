// 705.484.450-52 070.987.720-03

/*
11- (237 % 11) = 5 (Primeiro digito)
Se o número digito for maior de 9, consideramos 0.

7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0 40 28 48 20 16 15 0 === 237;

11- (284 % 11) = 2 (Primeiro digito)
7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9 8 7 6 5 4 3 2
77 0 45 32 56 24 20 20 0 10 === 284

705.484.450-52 === 705.484.450-52; -> aceito
705.484.450-52 === 070.987.720-03; -> não aceito
*/

function createValidationCpf(){

function Validacpf(cpfEnviar){
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable:true,
        get: function (){
            return cpfEnviar.replace(/\D+/g, '');
        }
    });
}

Validacpf.prototype.validar = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;


    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const toType = this.createDigite(cpfParcial)
    const toType2 = this.createDigite(cpfParcial + toType)

    const cpfComplete = cpfParcial + toType + toType2;

    return cpfComplete === this.cpfLimpo;
}

Validacpf.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

Validacpf.prototype.createDigite = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial)
    let regressivo = cpfArray.length + 1;
    const toType = cpfArray.reduce((acul, ele)=>{
        acul += (regressivo * Number(ele));
        regressivo--;
        return acul;
    },0);

    const typeTo = 11 - (toType % 11)
    return typeTo > 9 ? '0' : String(typeTo);
}

const cpf = new Validacpf('705.484.450-52');

    if(cpf.validar()){
        console.log('CPF Valido');
    }else{
        console.log('CPF Invalido');
    }

}

createValidationCpf()