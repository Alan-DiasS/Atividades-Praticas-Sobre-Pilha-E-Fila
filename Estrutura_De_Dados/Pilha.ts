import readlinesync = require("readline-sync")
import { Readline } from "readline/promises";

class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    list(): T[] {
        return[...this.items];
    }

    isEmpty(): boolean{
        return this.items.length === 0;
    }
}
    function main(): void {
        
        const pilha = new Stack<string>();
        let opcao: number;

        console.log("-- Sistema De Pilha De Livros --");

    do{
        console.log("menu")
        console.log('1 - Adicionar um novo livro');
        console.log('2 - Listar todos os livros');
        console.log('3 - Retirar um livro da pilha');
        console.log('0 - Finalizar programa\n');

    opcao = Number(readlinesync.question('Digite uma opção: '));
    console.log();

     switch (opcao) {
        case 1:
            const livro = readlinesync.question("Digite um livro: ");
            pilha.push(livro)
            console.log('\nPilha:\n');
            pilha.list().forEach(l => console.log(l));
            console.log('\nLivro adicionado!\n');
            break

        case 2: 
          if(pilha.isEmpty()){
            console.log("\nA pilha está vázia")
          }else{
            console.log('Lista de Livros na Pilha:\n');
          pilha.list().forEach(l => console.log(l));
          console.log();
          }
          break;

        case 3: 
          if(pilha.isEmpty()){
            console.log("A pilha está vazia. \n")
          }else{
            pilha.pop();
            console.log("\nPilha:\n")
            pilha.list().forEach(l => console.log(l));
            console.log('\nUm Livro foi retirado da pilha!\n');
          }
          break;

        case 0:
            console.log("\nPrograma Finalizado")
            break;
        
        default:
            console.log("\nSaída inválida.")
           break;
     } 
      } while (opcao!== 0); {
    }
}
main();