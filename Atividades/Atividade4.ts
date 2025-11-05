import readlinesync = require("readline-sync")

function buscarNumeroNoSet(): void {
    const arrayInicial: number[] = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
    const numberSet: Set<number> = new Set<number>(arrayInicial);

    console.log("\nCollection Set (Valores únicos)");

    console.log("Valores: ")

    numberSet.forEach(valor => {
        console.log(valor)
    });

    const input: string = readlinesync.question("Digite o número que deseja encontrar: ");
    const numeroBusca: number = parseInt(input);

    if(isNaN(numeroBusca) || !Number.isInteger(numeroBusca)){
        console.log(`\n"${input}" não é um número inteiro válido, por favor, reinicilizar`)
        return;
    }

    if(numberSet.has(numeroBusca)){
        console.log(`\nO número ${numeroBusca} foi encontrado!`);
    } else {
        console.log(`\nO número ${numeroBusca} não foi encontrado!`);
    }
}
buscarNumeroNoSet();