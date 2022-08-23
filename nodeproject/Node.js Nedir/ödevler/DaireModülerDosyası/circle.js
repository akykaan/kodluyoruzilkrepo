function circleArea(r){
    let area= Math.PI*Math.pow(r,2);
    console.log("Dairenin çevresi: ",area);
}
function circleCircumference(r){
    let circumFerence = 2 * Math.PI * r;
    console.log("Dairenin çevresi: ",circumFerence);
}


export { circleArea, circleCircumference };