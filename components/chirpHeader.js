// chirpHeader.js

// Dependencias:
// vars.css
// header.css

// ISSUES
// EL constructor se ejecuta 2 veces 

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
        outerContainer.appendChild(logo)

        let button = document.createElement("button")
        button.id = "headerDropdownButton"
        outerContainer.appendChild(button)

        let buttonSvg = document.createElement("img")
        buttonSvg.src = "../public/svg/icons8-menu-bar.svg"
        button.appendChild(buttonSvg)

        // Dropwdown
        let dropdown = document.createElement("div")
        dropdown.id = "headerDropdownOuter"

        outerContainer.appendChild(dropdown)

        this.appendChild(outerContainer)
    }

    dropdownButton() {
        if (document.body.contains(document.getElementById("ulDropdown"))) {
            return false
        }

        let button = document.getElementById("headerDropdownButton")
        let dropdown = document.getElementById("headerDropdownOuter")

        // TODO: img Usuario y usuario
        // ...

        // Lista del dropdown
        let ul = document.createElement("ul")
        ul.id = "ulDropdown"

        const dropdownList = ["Home", "Saved", "Profile", "Settings"]
        for (const i of dropdownList) {
            ul.appendChild(document.createElement("hr"))
            let li = document.createElement("li")
            li.innerText = i
            ul.appendChild(li)
        }
        dropdown.append(ul)


        // Ocultar/Mostrar dropdown
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