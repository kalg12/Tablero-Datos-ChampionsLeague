const key = "685f8c0eaamshe1d63aad603f259p15eac7jsn4890b8464953";
const rapidapi = "api-football-v1.p.rapidapi.com";
const url = "https://api-football-v1.p.rapidapi.com/v3/";

/* 
Documentación https://rapidapi.com/api-sports/api/api-football/
 */
export function getData() {
    fetch(`${url}players/topscorers?league=39&season=2021`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": rapidapi,
		"x-rapidapi-key": key
	}
})
    .then(response => response.json())
    .then(resultado => {topScorers(resultado);})
}

getData();

export function topScorers(objeto) {
    console.log(objeto.response[0].player.nationality);
    const h1 = document.querySelector('h3');
    h1.innerHTML = `3er Goleador de la Premiere League: ${objeto.response[0].player.name}`;
    alert("hola");

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