function infiniteScroll() {
    // First posts
    let postBox = document.getElementById("post-box");
    let chirptest = document.createElement("chirp-box");
    chirptest.setAttribute("chirpId", 1);

    postBox.appendChild(chirptest);
    postBox.appendChild(chirptest);
    postBox.appendChild(chirptest);
    postBox.appendChild(chirptest);
    postBox.appendChild(chirptest);
    postBox.appendChild(chirptest);
    postBox.appendChild(chirptest);


    document.addEventListener('scroll', function(e) {
        let documentHeight = document.body.scrollHeight;
        let currentScroll = window.scrollY + window.innerHeight;
        console.log(currentScroll);
        console.log(documentHeight);
        if(currentScroll == documentHeight) {
            let chirp = document.createElement("chirp-box");
            chirp.setAttribute("chirpId", 1);

            postBox.appendChild(chirp);
        }
    })

}

infiniteScroll();