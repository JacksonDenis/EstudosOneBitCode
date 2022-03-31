let spaceship = prompt ("Qual é o nome da nave?")
let invertedName = ""

for (let i = spaceship.length - 1; i >= 0; i--){
    if (spaceship[i]=="e") {
        break
    }
    invertedName += spaceship[i]
}

alert ("O novo nome é: " + invertedName)