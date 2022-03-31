let name = prompt ("Qual seu nome ,piloto?")
let velocyte = 0
let newVelocity = prompt ("A que velocidade você gostaria de acelerar?")
let confirmVelocity = confirm ("Estamos acelerando para " + newVelocity + " km/s")
if(confirmVelocity){
    velocyte=newVelocity
}
console.log (velocyte)

if (velocyte<=0) {
    alert ("Nave esta parada. Considere partir e aumentar a velocidade")
}
else if (velocyte<40){
    alert ("Voce esta devagar.  Podemos aumentar mais")
}
else if (velocyte<80){
    alert ("Parece uma boa velocidade para manter")
}
else if (velocyte<100){
    alert ("Velocidade alta. Considere diminuir")
}
else {
    alert ("Velocidade Perigosa. Controle automatico forçado")
}

alert ("Piloto: " + name +"\nVelocidade: " + velocyte + " km/s")