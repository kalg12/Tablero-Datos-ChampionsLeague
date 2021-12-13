export function getData() {
    fetch("https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=39&season=2020", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		"x-rapidapi-key": "685f8c0eaamshe1d63aad603f259p15eac7jsn4890b8464953"
	}
})
    .then(response => {console.log(response);})
/*     .then(respuesta => respuesta.json())
    .then(data => {console.log(data);}) */
 /*    .then(resultado => {topScorers(resultado);}) */
    .catch(error => console.log("Error en la petición"));
}

getData();

export function topScorers(objeto) {
    const h1 = document.querySelector('h3');
    h1.innerHTML = `Liga: ${objeto.results}`;

}


/* 
const token = 'a611bc23d6bd0a26109572836901c1764cbfb59b4251b6e8800030ad7245a78b';

const url = 'https://apiv2.allsportsapi.com/football/';

const endPoint = `?met=Countries&APIkey=${token}`;

export function getData() {

fetch(`${url}${endPoint}`)

.then(respuesta => respuesta.json())

.then(resultado => {getData2(resultado);})

.catch(error => console.log("Error en la petición"));

}

getData();

export function getData2(objeto) {

const h1 = document.querySelector('h3');

h1.innerHTML = `Liga: ${objeto.result[0].country_name}`;

const img = document.getElementById('logoequipo');

img.src = `${objeto.result[0].country_logo}`;

}
 */