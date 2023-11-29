
const sumDividers = num => {
    let soma = 0;

    if (num < 3) return 0;
    if (num === 3) return 3;

    for (let i = 3; i < num; i++) {
        const isDividibleFor5 = i % 5 === 0;
        const isDividibleFor3 = i % 3 === 0;
        if (isDividibleFor3 || isDividibleFor5) soma += i;
    }
    return soma;
}

console.log(sumDividers(3));
console.log(sumDividers(10));
console.log(sumDividers(11));