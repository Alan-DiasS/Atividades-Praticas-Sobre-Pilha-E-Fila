import readlinesync = require("readline-sync")
import {ClienteQueue} from "./ClienteQueue";

function main(){
    // CORREÇÃO 2: Variável da Fila deve ser 'filaCliente' ou alteramos todas as referências.
    // Vamos usar 'filaCliente' para sermos consistentes com a declaração original.
    const filaCliente = new ClienteQueue();
    let opcao: number = -1;

    console.log("--Sistemas de Atendimento Bancário --");
    while(opcao !== 0){
        console.log("\n-------------------------------------------");
        console.log("1: Adicionar Cliente na Fila");
        console.log("2: Listar Clientes na Fila");
        console.log("3: Chamar (Retirar) Cliente da Fila");
        console.log("0: Sair");
        console.log("-------------------------------------------");

        // CORREÇÃO 3: Usar 'readlinesync' para a função question
        const input = readlinesync.question("Digite uma opção: ");
        opcao = parseInt(input)

        if(isNaN(opcao)){
            console.log("\nOpção inválida, digite um número de 0 a 3");
            continue;
        }
        
        // CORREÇÃO 1: 'switch' com letra minúscula
        switch(opcao){
            case 1: 
                // CORREÇÃO 3: Usar 'readlinesync'
                const nomeCliente = readlinesync.question("Digite o nome do Cliente: ");
                // CORREÇÃO 2: Usar 'filaCliente'
                filaCliente.adicionar(nomeCliente);

                console.log("\nFila: ");
                // CORREÇÃO 2: Usar 'filaCliente'
                filaCliente.listar().forEach(nome => console.log(nome));
                console.log("\nCliente Adicionado!");
                break;
            
            case 2: 
                // CORREÇÃO 2: Usar 'filaCliente'
                if (filaCliente.estaVazia()) {
                    console.log("\nA Fila está vazia!");
                } else {
                    console.log("\nLista de Clientes na Fila:");
                    // CORREÇÃO 2: Usar 'filaCliente'
                    filaCliente.listar().forEach(nome => console.log(nome));
                }
                break;
            
            case 3: 
                // CORREÇÃO 2: Usar 'filaCliente'
                if (filaCliente.estaVazia()) {
                    console.log("\nA Fila está vazia!");
                } else {
                    // CORREÇÃO 2: Usar 'filaCliente'
                    const clienteChamado = filaCliente.chamar();
                    
                    console.log("\nFila: ");
                    // CORREÇÃO 2: Usar 'filaCliente'
                    filaCliente.listar().forEach(nome => console.log(nome));
                    
                    console.log(`\nO Cliente ${clienteChamado} foi Chamado!`);
                }
                break;
            case 0:
                console.log("\nPrograma Finalizado!");
                break;

            default:
                console.log("\nOpção inválida. Digite um número de 0 a 3.");
                break;
        }
    }
}
main();