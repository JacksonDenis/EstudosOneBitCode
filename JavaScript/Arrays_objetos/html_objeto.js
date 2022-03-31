let spaceship = {
    velocity: 0 ,
    speedUp: function(accelaration) {
        this.velocity += accelaration
    }
}

function registerSpaceship() {
    spaceship.name = prompt ("Informe o nome da nave")
    spaceship.type = prompt ("informe o tipo de nave")
    spaceship.maxVelocity = Number(prompt("Informe a velocidade maxima da nave (km/s"))
}

function acelerate() {
    let accelaration = Number(prompt("Quanto você quer acelerar? (km/s"))
    spaceship.speedUp(accelaration)
    if (spaceship.velocity > spaceship.maxVelocity) {
        alert ("VELOCIDADE MAXIMA ULTRAPASSADA" +
               "\nVelocidade da Nave: " + spaceship.velocity + "km/s" +
               "\nVelocidade maxima da nave: " + spaceship.maxVelocity + "km/s")        
    }
}

function stop() {
    alert ( "Nome: " + spaceship.name + "\nTipo: " + spaceship.type + "\nVelocidade da nave: "
            +spaceship.velocity + "\nVelocidade Maxima da Nave: " + spaceship.maxVelocity)
            spaceship.velocity = 0    
}

function shoeMenu() {
    let chosenOption
    do {
        chosenOption = prompt ("Você deseja:\n1- Acelerar\n2- parar")
        switch (chosenOption) {
            case "1":
                acelerate()                
                break;
        case "2":
                stop()                
                break;
            default:
                alert ("Operalçao Invalida")
                break;
        }
    } while (chosenOption != "2")
}

registerSpaceship()
shoeMenu()