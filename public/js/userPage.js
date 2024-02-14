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

getUsername();