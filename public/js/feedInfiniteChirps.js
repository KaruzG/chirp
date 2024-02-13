function showPost($id) {
    let postBox = document.getElementById("post-box");
    let chirp = document.createElement("chirp-box");
    chirp.setAttribute("chirpId", $id);
    postBox.appendChild(chirp)
}

async function getLastChirp() {
    const response = await fetch("/app/getNewestChirp.php");

    if (!response.ok) {
        console.log("Error fetching last chirp!");
        return false
    }

    let data = await response.json();

    return data.lastChirp;
}



async function infiniteScroll() {
    let postToStart = await getLastChirp();

    for(let i = 0; i <= 5; i++) {
        showPost(postToStart)
        postToStart--
    }


    document.addEventListener('scroll', function infinite(e) {
        let documentHeight = document.body.scrollHeight;
        let currentScroll = window.scrollY + window.innerHeight;
        let postToShow = 3;
        if(currentScroll == documentHeight) {
            for(let i = 0; i <= postToShow; i++) {
                if (postToStart === 0) {
                    console.log("No more posts!");
                    document.removeEventListener('scroll', infinite);
                }

                showPost(postToStart);
                postToStart--
            }
        }
    })

}

infiniteScroll();