let dateEntry = prompt ("Digite a data de partida (formata DD/MM/YYYY")
let departureDate = moment(departureDateEntry, "DD/MM/YYYY")
let today = moment ()
let dateDiff = today - departureDate
let chosenOptinn = prompt ("escolha como Gostaria de  exibir o tempo de partida\n1 - segundos\n2- minutos\n3- horas\n4- Dias")

if (chosenOptinn == "1"){
    let secondsOfDeparture = Math.round(dateDiff / 1000)
    alert ("Tempo de voo: " + secondsOfDeparture + " segundos")
} else if (chosenOptinn == "2") {
    let minutesOfDeperture = Math.round(dateDiff / 1000 / 60)
    alert ("Tempo de voo: " + minutesOfDeperture + " minutos")
}else if (chosenOptinn == "3") {
    let hoursOfDeperture = Math.round(dateDiff / 1000 / 3600)
    alert ("Tempo de voo: " + hoursOfDeperture + " Horas")
}else if (chosenOptinn == "4") {
    let daysOfDeperture = Math.round(dateDiff / 1000 / 3600 / 24)
    alert ("Tempo de voo: " + daysOfDeperture + " Dias")
}else {
    alert ("Opcão Invalida")
}