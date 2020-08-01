console.log("Constructor Functions");

function Carro(modelo, portas, placa, motor) {
    this.modelo = modelo,
    this.portas = portas,
    this.placa = placa,
    this.motor = motor,

    ligar = function() {
        console.log("Carro ligado...");
    }

}

const carro = new Carro('Celta', 4, '48A75-231', 'V8');
console.log(carro);