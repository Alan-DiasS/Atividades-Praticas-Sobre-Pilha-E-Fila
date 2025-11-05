import readlinesync = require("readline-sync")

function buscarNumeroNoArray() : void {
    const arrayNumeros: number [] = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

    let posicaoEncontrada: number = -1;

    console.log("\n--- Collection Array ---");
    console.log("Índice | Valor");
    console.log("------------------");

    for(let i: number = 0; i < arrayNumeros.length; i++){
        console.log(`${i} | ${arrayNumeros[i]}`)
    }

    const input : string = readlinesync.question("Digite o número que deseja encontrar: ")
    const numeroBusca: number = parseInt(input);

    for(let i: number = 0; 1 < arrayNumeros.length; i++){
        if(arrayNumeros[i] === numeroBusca){
            posicaoEncontrada = i;
            break
        }
    }
    if(posicaoEncontrada !== -1){
        console.log(`\nO número ${numeroBusca} esta localizado na posição ${posicaoEncontrada}`)
    } else {
        console.log(`\nO número ${numeroBusca} não foi encontrado!`)
    }
}
buscarNumeroNoArray()