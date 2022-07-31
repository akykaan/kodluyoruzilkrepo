const pi=3.14;

calculate=(r)=>{
    
    return pi*(r*r);
}

console.log
("Yarıçapı olan dairenin alanı:",calculate(process.argv.slice(2)*1));