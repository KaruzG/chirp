// chirpHeader.js

// Dependencias:
// vars.css
// header.css

// TODO: img Usuario y usuario

// ISSUES
// EL constructor se ejecuta 2 veces EDIT: Ya no?!

class ChirpHeader extends HTMLElement {
    constructor() {
        super()
        this.render()
        this.dropdownButton()
    }

    render() {
        let outerContainer = document.createElement("header")

        let logo = document.createElement("a")
        logo.id = "logoHeader"
        logo.innerText = "CHIRP"
        logo.href = "/public/pages/feed.html";
        outerContainer.appendChild(logo)

        let button = document.createElement("button")
        button.id = "headerDropdownButton"
        outerContainer.appendChild(button)

        let buttonSvg = document.createElement("img")
        buttonSvg.src = "/public/svg/icons8-menu-bar.svg"
        button.appendChild(buttonSvg)

        // Dropwdown
        let dropdown = document.createElement("div")
        dropdown.id = "headerDropdownOuter"

        // Desktop 
        let desktopDiv = document.createElement("div")
        desktopDiv.id = "desktopUser"

        let inputDesktop = document.createElement("input")
        inputDesktop.type = "search"
        desktopDiv.appendChild(inputDesktop)


        let imgDesktop = document.createElement("img")
        imgDesktop.src = "/public/img/defaultProfilePicture.jpg"
        desktopDiv.appendChild(imgDesktop)

        let userText = document.createElement("h3")
        userText.innerText = "Username";
        userText.classList.add("usernamePlaceholder")
        desktopDiv.appendChild(userText)

        outerContainer.appendChild(desktopDiv)
        outerContainer.appendChild(dropdown)
        this.appendChild(outerContainer)
    }

    dropdownButton() {
        let button = document.getElementById("headerDropdownButton")
        let dropdown = document.getElementById("headerDropdownOuter")

        // User -----------------
        let userDiv = document.createElement("div")
        userDiv.classList.add("headerDropdown-user")

        let img = document.createElement("img")
        img.src = "/public/img/defaultProfilePicture.jpg"

        let userName = document.createElement("a")
        userName.classList.add("usernamePlaceholder")
        userName.innerText = "Username!"

        userDiv.append(img)
        userDiv.append(userName)


        // Lista del dropdown -----------------
        const dropdownList = [
            ["Home", "/public/pages/feed.html"],
            ["Saved", "/public/pages/user.html"],
            ["Profile", "/public/pages/user.html"],
            ["Settings", "/public/pages/options.html"],
        ]

        let ul = document.createElement("ul")
        ul.id = "ulDropdown"

        ul.append(userDiv)

        for (const i of dropdownList) {
            ul.appendChild(document.createElement("hr"))
            let li = document.createElement("li")
            let a = document.createElement("a")
            a.innerText = i[0]
            a.href = i[1]
            li.appendChild(a)
            ul.appendChild(li)
        }
        dropdown.append(ul)


        // Ocultar/Mostrar dropdown -----------------
        button.addEventListener("click", (ev) => {
            ev.stopImmediatePropagation()
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none"
            } else {
                dropdown.style.display = "block"
            }
        })
    }
}

customElements.define("chirp-header", ChirpHeader)