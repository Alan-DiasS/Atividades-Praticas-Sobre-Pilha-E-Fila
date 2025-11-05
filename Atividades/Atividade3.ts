import readlinesync = require("readline-sync")

function collectionSet(): void {
    const numberSet: Set<number> = new Set<number>();

    let contador: number = 0;

    console.log("--- Adicione 10 números inteiros ao Set ---")

    while(contador <= 10){
        const input: string = readlinesync.question(`\nDigite o ${contador + 1}° número: `);
        const numero: number = parseInt(input)

        if(isNaN(numero) || !Number.isInteger(numero)){
            console.log("Entrada inválida, por favor digite um número inteiro");
            continue;
        }
        const tamanhoAntes = numberSet.size;
        numberSet.add(numero);
        const tamanhoDepois = numberSet.size;

        if(tamanhoDepois > tamanhoAntes){
            contador++;
        }else{
            console.log(`O número ${numero} já foi adicionado anteriormente e foi ignorado.`);
        }
        console.log("\n--- Listar dados do Set ---");

        numberSet.forEach(elemento => {
            console.log(elemento)
        })
    }
    console.log(`\nFim do programa, foram adicionado ${numberSet.size} elementos únicos `);
}
collectionSet();