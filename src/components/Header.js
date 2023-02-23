class Header {
  constructor({ $target }) {
    this.$target = $target
  }

  createElement({ divClass, id, text }) {
    const div = document.createElement('div')
    div.setAttribute('class', divClass)

    const span = document.createElement('span')
    span.setAttribute('class', 'menu_name')
    span.setAttribute('id', id)
    span.appendChild(document.createTextNode(text))
    div.appendChild(span)

    return div
  }

  render() {
    const header = document.createElement('header')
    const home_menu = this.createElement({ divClass: 'header header_left', id: 'menu_home', text: 'HOME' })
    const signup_menu = this.createElement({ divClass: 'header header_right', id: 'menu_signup', text: 'SIGNUP' })

    header.appendChild(home_menu)
    header.appendChild(signup_menu)

    this.$target.appendChild(header)
  }
}

export default Header