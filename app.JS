// Constantes //
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

// Datos del equipo //
var myTeam = [
    {
        name: "Hugo",
        availability: new Array(8).fill(true)
    },
    {
        name: "Adriana",
        availability: new Array(8).fill(true)
    },
    {
        name: "Héctor",
        availability: new Array(8).fill(true)
    },
    {
        name: "Alejandra",
        availability: new Array(8).fill(true)
    },
];

// Generación aleatoria de la disponibilidad de los trabajadores//

var getRandom = () => Math.random() < 0.5;

for (worker of myTeam) {
    console.log("📅 Agenda de", worker.name, "📅");

    for (let i = 0; i < worker.availability.length; i++) {
        worker.availability[i] = getRandom();

        if (worker.availability[i] === true) {
            console.log(WORK_HOURS[i], "\\Sí hay disponibilidad/");
        } else {
            console.log(WORK_HOURS[i], "\\No hay disponibilidad/");
        }
    }
}
// Buscar hueco libre disponible //

var buscadorHorasLibres = () => {
    var huecoLibre = [];

    for (var i = 0; i < myTeam.length; i++){
        for (let x = 0; x < myTeam[i].availability.length; x++) {
        if (myTeam [i].availability[x]===true){
            huecoLibre.push(x);
        }
    }
}

    var huecoLibreOrdenado = huecoLibre.sort();
    console.log ("----------------")
    for (var i= 0; i <= 8; i++) {
      var result = huecoLibreOrdenado.filter((element) => element == i);  
    
    if (result.length == myTeam.length) {
        return " 😊 Disponibilidad en la siguiente franja:" + WORK_HOURS[i];
    }
    }
   return "😞 Lo sentimos, no existe dispobilidad. Por favor, pruebe en otra fecha.";
}; 
console.log(buscadorHorasLibres());


