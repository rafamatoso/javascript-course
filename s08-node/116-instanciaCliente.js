const contadorA = require('./114-instanciaUnica');
const contadorB = require('./114-instanciaUnica');

const contadorC = require('./115-instanciaNova')();
const contadorD = require('./115-instanciaNova')();

contadorA.inc();
contadorA.inc();
console.log(contadorA.valor, contadorB.valor);

contadorC.inc();
contadorC.inc();
console.log(contadorC.valor, contadorD.valor);
