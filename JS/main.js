const pokemonImage = document.getElementById("js--pokemon-image"); 
let randomNumber = Math.floor(Math.random() * 1025 + 1);
const pokemonName = document.getElementById("js--pokemonName");
let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
    .then(function (response) {
        return response.json();
    })
    .then(function (realData) {
        pokemonImage.src = realData.sprites.front_default;
        pokemonName.innerText = realData.species.name;
    });

const catchButton = document.getElementById("js--catch-button");
const pokemonText = document.getElementById("js--pokemon-text");
let pokemonGamePlayed = false;

catchButton.onclick = function () {
    if (pokemonGamePlayed === false) {
        let catchNumber = Math.floor(Math.random() * 2);
        
        if (catchNumber === 0) {
            pokemonText.innerText = "The pokemon fled...";
            pokemonText.style.color = "red";
        } else {
            pokemonText.innerText = "You caught the pokemon!";
            pokemonText.style.color = "green";
        }

        pokemonGamePlayed = true;

        setTimeout(function() {
            pokemonText.innerText = "GAME OVER";
            pokemonText.style.color = "gray";
        }, 2000);
    }
};

const TVshowH2 = document.getElementById("js--TVshow-h2");
const TVshowP = document.getElementById("js--TVshow-p");
const TVshowImg = document.getElementById("js--TVshow-img");
let TVshow = fetch("https://api.tvmaze.com/search/shows?q=house")
    .then(function (showresponse) {
        return showresponse.json();
    })
    .then(function (showData) {
        const show = showData[0].show;
        TVshowH2.innerText = show.name;
        TVshowP.innerHTML = show.summary;
        TVshowImg.src = show.image.original;
    });

const AgeH2 = document.getElementById("js--AgeH2");
const inputField = document.getElementById("js--input");
inputField.onkeyup = function(event) {
    if (event.key === "Enter") {
        let name = inputField.value;
        fetch("https://api.agify.io/?name=" + name)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                AgeH2.innerText = jsonData.age + " jaar oud";
            });
    }
};
