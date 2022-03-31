let distanceInly = prompt ("Digite a distancia a em anos Luz")
let chosenOption = prompt ("Para qual a unidade deseja converter?\n1. Parce(pc)\n2. Unidade Astronomica (AU)\n3.Quilomentros (km) \n\n(Digite o numero da opcao desejada")

let chosenUnity
let convertedDistance

switch (chosenOption) {
    case "1":
        chosenUnity = "Parsec"
        convertedDistance = distanceInly*0.306601
        break;
    case "2":
        chosenUnity = "Unidade Astronomica"
        convertedDistance = distanceInly*63241.1
        break;
    case "3":
        chosenUnity = "Quilometros"
        convertedDistance = distanceInly*9.5* Math.pow(10,12)
        break;
    default:
        chosenUnity = "QUnidade nao identificada"
        convertedDistance = "Conversão fora do escopo"
        break;
}

alert("Distancia em anos-luz: " + distanceInly + "\n" + chosenUnity + ": " + convertedDistance)