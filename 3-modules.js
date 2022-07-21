class Engine {
    constructor(cilindros, bujias, litros){
        this.cilindros = cilindros;
        this.bujias = bujias;
        this.litros = litros;
    }
}

const engine = new Engine(cilindros = 4, bujias = 6, litros = 2.1);

module.exports = Engine;