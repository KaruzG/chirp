class Chirp extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        if(!await this.render()) {
            return false
        }
    }

    async fetchInfo() {
        let chirpId = this.attributes.chirpID.value;

        const response = await fetch("/app/chirpInfo.php?chirpId=" + chirpId);

        try {

            if (!response.ok) {
                throw new Error("Error fetching chirp data");
            }

            return response.json();
        } catch (e) {
            return false
        }
    }

    //Create elements
    async render() {
        const chirpData = await this.fetchInfo();

        if (!chirpData) {
            return
        }

        let outerContainer = document.createElement("div");
        outerContainer.classList.add("chirp-big");

        let postHeading = document.createElement("div");
        postHeading.classList.add("post-heading");

        let user = document.createElement("div");
        user.classList.add("user");

        let userImage = document.createElement("a");
        userImage.href = "";
        let userImageSrc = document.createElement("img");
        userImageSrc.src = "/public/img/profile.png";
        userImageSrc.alt = "pfp";
        userImageSrc.classList.add("chirpbox-pfp");
        userImage.appendChild(userImageSrc);

        let username = document.createElement("span");
        username.classList.add("username");
        username.innerText = "@" + chirpData.username;

        user.appendChild(userImage);
        user.appendChild(username);

        let actions = document.createElement("a");
        actions.href = "";
        actions.classList.add("actions");

        let dotsImage = document.createElement("img");
        dotsImage.src = "/public/img/dots.png";
        dotsImage.height = "15";
        dotsImage.alt = "dots";
        dotsImage.id = "dots";

        actions.appendChild(dotsImage);

        postHeading.appendChild(user);
        postHeading.appendChild(actions);

        let content = document.createElement("div");
        content.classList.add("content");

        let textContainer = document.createElement("div");
        textContainer.classList.add("text-container");

        let text = document.createElement("p");
        text.innerText = chirpData.content;
        textContainer.appendChild(text);
        content.appendChild(textContainer);

        let postInteractions = document.createElement("div");
        postInteractions.classList.add("post-interactions");

        let like = document.createElement("a");
        like.href = "";
        like.id = "like";
        let likeImage = document.createElement("img");
        likeImage.src = "/public/img/heart.png";
        likeImage.alt = "icon2";
        like.appendChild(likeImage);

        let comment = document.createElement("a");
        comment.href = "";
        comment.id = "comment";
        let commentImage = document.createElement("img");
        commentImage.src = "/public/img/chat_2.png";
        commentImage.alt = "icon3";
        comment.appendChild(commentImage);

        postInteractions.appendChild(like);
        postInteractions.appendChild(comment);

        outerContainer.appendChild(postHeading);
        outerContainer.appendChild(content);
        outerContainer.appendChild(postInteractions);

        this.appendChild(outerContainer);

        // Dropdown
        let dropdown = document.createElement("div");
        dropdown.id = "popup-menu";
        let reportChirp = document.createElement("a");
        reportChirp.href = "#";
        reportChirp.id = "report";
        reportChirp.innerText = "Report";

        let shareChirp = document.createElement("a");
        shareChirp.href = "#";
        shareChirp.id = "share";
        shareChirp.innerText = "Share";

        dropdown.appendChild(reportChirp);
        dropdown.appendChild(shareChirp);
        actions.appendChild(dropdown);

        this.setupDropdown()
    }

    //Dropdown functionality
    setupDropdown() {
        const dots = this.querySelector('.actions');
        const actionsMenu = this.querySelector("#popup-menu");

        dots.addEventListener('click', (e) => {
            e.preventDefault();
            if (actionsMenu.style.display === 'none' || actionsMenu.style.display === '') {
                actionsMenu.style.display = 'flex';
            } else {
                actionsMenu.style.display = 'none';
            }
        });

        // Close the menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!dots.contains(e.target) && !actionsMenu.contains(e.target)) {
                actionsMenu.style.display = 'none';
            }
        });
    }

}

customElements.define("chirp-box", Chirp);