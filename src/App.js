import Header from "./components/Header.js"

class App {
  constructor({ $target }) {
    this.$target = $target
    this.render()
  }

  render() {
    new Header({ $target: this.$target }).render()
  }
}

export default App