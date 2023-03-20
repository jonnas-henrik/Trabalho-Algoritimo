/*02 busca binaria (O(logn))*/
console.time(buscaBinaria)

const umVetor = [
    2,
    4,
    10,
    9,
    1,
    5,
    3,
    8,
    7,
    6

]

function buscaBinaria(umVetor, item) {
    let prim = 0;
    let ult = umVetor.length - 1;
    let achou = false;

    while (prim <= ult && !achou) {
        meioLista = Math.ceil((prim + ult) / 2);
        if (umVetor[meioLista] == item) {
            achou = true;
        }
        else {
            if (item < umVetor[meioLista]) {
                ult = meioLista - 1;
            }
            else {
                prim = meioLista + 1;
            }
        }
    }
    return achou;
}
console.timeEnd(buscaBinaria)