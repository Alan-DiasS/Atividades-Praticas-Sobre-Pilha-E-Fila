export class ClienteQueue {
    private elementos: string[];

    constructor() {
        this.elementos = [];
    }

    adicionar(nome: string): void {
        this.elementos.push(nome);
    }

    chamar(): string | undefined {
        return this.elementos.shift();
    }

    listar(): string[] {
        return [...this.elementos];
    }

    estaVazia(): boolean {
        return this.elementos.length === 0;
    }
}

