class Header {
    constructor($body) {
        this.$body = $body
    }

    createMenuElem(divClass, spanClass, spanId, menuText, url) {
        const div = document.createElement('div')
        div.setAttribute('class', divClass)

        const span = document.createElement('span')
        span.setAttribute('class', spanClass)
        span.setAttribute('id', spanId)
        span.appendChild(document.createTextNode(menuText))

        div.appendChild(span)

        span.addEventListener('click', () => {
            window.history.pushState('', '', url)
            const urlChange = new CustomEvent('urlChange', {
                detail: { href: url }
            })
            document.dispatchEvent(urlChange)
        })

        return div
    }

    render() {
        const header = document.createElement("header");
        const home_menu = this.createMenuElem('header header_left', 'menu_name', 'menu_home', 'HOME', '/web/')
        const signup_menu = this.createMenuElem("header header_right", "menu_name", "menu_signup", "SIGNUP", '/web/signup');

        header.appendChild(home_menu);
        header.appendChild(signup_menu);
        this.$body.appendChild(header);
    }
}

export default Header;