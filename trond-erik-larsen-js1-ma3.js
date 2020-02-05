//1

// (a, b) => (a - b);

//2

const baseUrl = "https://api.rawg.io/api/";
const gamesUrl = `${baseUrl}games?genres=sports`;

fetch(gamesUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        loadGames(json);
    })
    .catch(function(error) {
        console.log("error.html")
    });

    function loadGames(json) {
        console.log(json.results.name);
    }