//pregunto la fecha y hora
var laHora = new Date().getHours();
document.querySelector("#hora").innerHTML = laHora;
var elSaludo;
if (5 < laHora && laHora < 12) {
    elSaludo = "Curiosidad matutina &#127774; ";
} else if (11 < laHora && laHora < 21) {
    elSaludo = "Curiosidad diurna &#127774; ";
} else {
    elSaludo = "Curiosidad nocturna &#127773;";
}
// pregunto la ubicación
var dondeEstas;
if (document.body.classList.contains("miau")) {
    dondeEstas = true;
} else {
    dondeEstas = false;
}
//voy a buscar unos datos
var starWars;
function preload() {
    var api = "https://swapi.dev/api/people/?page=2&format=json";
    starWars = loadJSON(api);
}
//tomo el main
var loPrincipal = document.querySelector("main");

var x, y;

function setup() {
    noCanvas();
    createElement("h1", elSaludo).parent(loPrincipal).id("contenido");
    createA("index.html", "un dato").parent("vinculos");
    createA("page.html", "otro dato").parent("vinculos");
    if (dondeEstas) {
      x= Math.round(random(0,1)*10);
        portada();
    } else {
      y= Math.round(random(0,1)*10);
        pagina();
    }
}

function portada() {
    createSpan(" ¿Sabías que " + starWars.results[x].name + " nació el año " + starWars.results[x].birth_year + "?").parent("contenido");
    select("a:nth-child(1)").style("color", "#FFFFFF");
}
function pagina() {
    createSpan(" ¿Sabías que " + starWars.results[y].name + " nació el año " + starWars.results[y].birth_year + "?").parent("contenido");
    select("a:nth-child(2)").style("color", "#FFFFFF");
}
