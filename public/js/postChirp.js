/* 
This file comunicates with postChirp.php to post chirps into the DB
Gets the value of postChirpTextarea and sends it

Also changes all .usernamePlaceholder innerText for the logged username
*/
async function getUsername() {
    let response = await fetch("/app/getLoggedUsername.php", {
        method: 'GET',
    })
    
    if (response.redirected) {
        window.location.href = response.url
    } else {
        let username = await response.text()
        let usernamePlaceholders = document.querySelectorAll(".usernamePlaceholder");
        usernamePlaceholders.forEach(async (element) => {
            element.innerText = "@"+ username;
        })
    }
}

function postChirp() {
    let $chirpBody = document.getElementById("postChirpTextarea");

    if (!$chirpBody) { alert("Error") }


    fetch("/app/postChirp.php", {
        method: 'POST',
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: 'postText=' + $chirpBody.value,
    }).then((response) => {
        // then
    })
}

getUsername();

document.getElementById("postChirpButton").addEventListener("click", postChirp)