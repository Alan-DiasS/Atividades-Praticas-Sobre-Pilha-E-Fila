import readlinesync = require("readline-sync")
import {ClienteQueue} from "./ClienteQueue";

function main(){
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

        
        const input = readlinesync.question("Digite uma opção: ");
        opcao = parseInt(input)

        if(isNaN(opcao)){
            console.log("\nOpção inválida, digite um número de 0 a 3");
            continue;
        }
        
        
        switch(opcao){
            case 1: 
                
                const nomeCliente = readlinesync.question("Digite o nome do Cliente: ");
             
                filaCliente.adicionar(nomeCliente);

                console.log("\nFila: ");
                
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
                
                if (filaCliente.estaVazia()) {
                    console.log("\nA Fila está vazia!");
                } else {
                    
                    const clienteChamado = filaCliente.chamar();
                    
                    console.log("\nFila: ");
                    
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
