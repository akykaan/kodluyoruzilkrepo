function showPrimeNumbers(lowNumber,highNumber) {

    for (let i = lowNumber; i <= highNumber; i++) {
        let isPrime=true;
        for (let j = 2; j <=i; j++){
            if (i%j==0 && j!=i) {
                isPrime=false
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }

}

console.log(process.argv[1]);
showPrimeNumbers(7,22);