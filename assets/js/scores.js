function printHighscores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    // Sorts highscores
    highscores.sort(function (a, b) {
        return b.Score - a.Score;
    });

    highscores.forEach(function (Test) {
        // create li for each highscore
        var LiEl = document.createElement("li");
        LiEl.textContent = Test.Initials + " - " + Test.Score;

        // appends score LI to OL
        var olEl = document.getElementById("highscores");
        olEl.appendChild(LiEl);
    });
}

//Clears highscores
function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

document.getElementById("reset").onclick = clearHighscores;

// run function on page loading
printHighscores();