function infiniteScroll() {

    document.addEventListener('scroll', function(e) {
        let documentHeight = document.body.scrollHeight;
        let currentScroll = window.scrollY + window.innerHeight;
        console.log(currentScroll);
        console.log(documentHeight);
        if(currentScroll == documentHeight) {
            let chirp = document.createElement("chirp-box");
            chirp.setAttribute("chirpId", 1);

            document.body.appendChild(chirp);
        }
    })

}

infiniteScroll();