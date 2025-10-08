function classificarIMC(imc){
    if (imc < 18.5){
         return ("abaixo do peso")
    }else if(imc < 24.9){
        return ("Peso normal")
    }else if(imc < 29.9){
        return ("Sobrepeso")
    }else if(imc < 34.9){
        return ("Obesidade 1")
    }else if(imc < 39.9){
        return ("Obesidade 2")
    }else{
        return ("Obesidade 3")
    }
    
}

let peso = 70;
let altura = 1.70;
let imc = IMC(peso,altura);
let classificacaoIMC = classificarIMC(imc);

console.log("IMC: " + imc);
console.log("Classificação do meu IMC:", classificacaoIMC);