export default class ValidationCpf{
    constructor(cpfEnviar){
        Object.defineProperty(this, 'cpfClear', {
            enumerable:true,
            get: function (){
                return cpfEnviar.replace(/\D+/g, '');
            }
        })
    };

    validar(){
        if(!this.cpfClear) return false;
        if(typeof this.cpfClear !== 'string') return false;
        if(this.cpfClear.length !== 11) return false;
        if(this.isRepeat()) return false;

        const parcial = this.cpfClear.slice(0, -2);
        const digiteOne = ValidationCpf.createDigite(parcial);
        const digitetwo = ValidationCpf.createDigite(parcial + digiteOne);

        const completeCpf = parcial + digiteOne + digitetwo;

        return completeCpf === this.cpfClear;
    };

    isRepeat(){
        return this.cpfClear[0].repeat(11) === this.cpfClear
    };

    static createDigite(parcial){
        let total = 0;
        let reverso = parcial.length + 1;

        for(let stringNumber of parcial){
            total += reverso * Number(stringNumber);
            reverso--;
        }

        const typeTo = 11 - (total % 11);
        return typeTo <= 9 ? String(typeTo) : '0';
    }
}