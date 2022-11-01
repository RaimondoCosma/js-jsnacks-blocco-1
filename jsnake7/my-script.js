function isEven(number) {
    if(number % 2 === 0){
        return true;
    }
    return false;
}
console.log('Passo 2 mi aspetto true', isEven(2));
console.log('Passo 2 mi aspetto false', isEven(3));