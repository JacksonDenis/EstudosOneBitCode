const hitchedSpaceships = [
    ["fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let crewGreaterThan9 = hitchedSpaceships.filter(spaceship => {
    return spaceship[1] > 9
}).map(spaceship => {
    return spaceship[0]
})

let ongoinHitchPlatgorm = hitchedSpaceships.findIndex (spaceship => {
    return spaceship[2] == false
})

let highlightSpaceships = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})

let message = "Espaçonaves com mais de 9 tipulantes: " + crewGreaterThan9.join(", ")
message += "\nPlatarom com processo de engate: "+ (ongoinHitchPlatgorm + 1)
message += "\nEspaçonaves destacadas: " + highlightSpaceships.join(",\n")

alert (message)
