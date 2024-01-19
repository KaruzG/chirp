// chirpHeader.js

// Dependencias:
// vars.css
// header.css

class ChirpHeader extends HTMLElement {
    constructor() {
        super()
        this.render()
    }

    render() {
        let outerContainer = document.createElement("header")

        let logo = document.createElement("a")
        logo.id = "logoHeader"
        logo.innerText = "CHIRP"
        outerContainer.appendChild(logo)

        let button = document.createElement("button")
        button.id = "headerDropdown"
        outerContainer.appendChild(button)

        let buttonSvg = document.createElement("img")
        buttonSvg.src = "../public/svg/icons8-menu-bar.svg"
        button.appendChild(buttonSvg)

        this.appendChild(outerContainer)
    }

    dropdownButton() {
        
    }
}

customElements.define("chirp-header", ChirpHeader)