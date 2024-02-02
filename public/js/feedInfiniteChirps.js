function infiniteScroll() {

    document.addEventListener('scroll', function(e) {
        console.log("a");
        let documentHeight = document.body.scrollHeight;
        let currentScroll = window.scrollY + window.innerHeight;
        // When the user is [modifier]px from the bottom, fire the event.
        let modifier = 10; 
        if(currentScroll + modifier > documentHeight) {
            console.log('You are at the bottom!')
            console.log(currentScroll, documentHeight);
        }
    })

}

infiniteScroll();