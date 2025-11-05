import readlinesync = require("readline-sync")

function manipularCoresz() : void {
    const coresArray: string [] = [];
    const NUM_CORES: number = 5;

    console.log("-- Coleta de Cores --");

    for(let i: number = 0; i < NUM_CORES; i++){
        const cor : string = readlinesync.question(`Digite a ${i + 1}° cor: `);

        coresArray.push(cor);
    }

    console.log("Listar todas as cores:");
    coresArray.forEach((cor: string) => {
        console.log(cor);
    });

    const coresOrdenadas: string[] = [...coresArray].sort(); 

    console.log("\nOrdenar as cores:");
    coresOrdenadas.forEach((cor: string) => {
        console.log(cor);
    });
}
manipularCoresz()
