function Carro(velocidadeMaxima = 200, delta = 5) {
  // atributo privado
  let velocidadeAtual = 0;

  // método público
  this.acelerar = function () {
    if (velocidadeAtual += delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    }else {
      velocidadeAtual = velocidadeMaxima;
    };
  };
  
  // método público
  this.getVelocidadeAtual = function () {
    return velocidadeAtual
  }
};

const uno = new Carro
uno.acelerar()
console.log('Velocidade do uno agora é :', uno.getVelocidadeAtual())
uno.acelerar()
console.log('Velocidade do uno agora é :', uno.getVelocidadeAtual())
uno.acelerar()
console.log('Velocidade do uno agora é :', uno.getVelocidadeAtual())
uno.acelerar()
console.log('Velocidade do uno agora é :', uno.getVelocidadeAtual())
uno.acelerar()
console.log('Velocidade do uno agora é :', uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log('Velocidade da ferrari agora é :', ferrari.getVelocidadeAtual())
ferrari.acelerar()
console.log('Velocidade da ferrari agora é :', ferrari.getVelocidadeAtual())
ferrari.acelerar()
console.log('Velocidade da ferrari agora é :', ferrari.getVelocidadeAtual())
ferrari.acelerar()
console.log('Velocidade da ferrari agora é :', ferrari.getVelocidadeAtual())
ferrari.acelerar()
console.log('Velocidade da ferrari agora é :', ferrari.getVelocidadeAtual())