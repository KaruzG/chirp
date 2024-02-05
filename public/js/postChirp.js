/* 
This file comunicates with postChirp.php to post chirps into the DB
Gets the value of postChirpTextarea and sends it
*/

function postChirp() {
    let $chirpBody = document.getElementById("postChirpTextarea");

    if (!$chirpBody) { alert("Error") }

    console.log($chirpBody.value)

    fetch("/app/postChirp.php", {
        method: 'POST',
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: 'postText=' + $chirpBody.value,
    }).then((response) => {
        console.log(response.text())
    })
}

document.getElementById("postChirpButton").addEventListener("click", postChirp)