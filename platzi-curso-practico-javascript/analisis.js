//Helpes

function esPar(numero){
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;

}
//Calculadora de medianas
function medianaSalariosCol(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1 , personaMitad2]);
        return mediana;

    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}
//Mediana General
const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosColoSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA[1] - salaryB[1];
    }
);

const medianaGeneralCol = medianaSalariosCol(salariosColoSorted);

//Media Top 10 %
const spliceStart = ((salariosColoSorted.length * 90) / 100);
const spliceCount = salariosColoSorted.length - spliceStart;

const salariosTop10 = salariosColoSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalariosCol(salariosTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});