let v=  parseInt(prompt("inserisci un valore da 0 a 30"))
console.log(v);

if (v<18) {
    console.log("insufficiente");
}else if (v>=18 &&  v<21) {
    console.log("sufficiente");
} else if (v>=21 &&  v<24) {
    console.log("buono");
} else if(v>=24 &&  v<27){
    console.log("distinto");
} else if(v>=27 &&  v<=29){
    console.log("ottimo");
} else {
    console.log("eccellente");
}
