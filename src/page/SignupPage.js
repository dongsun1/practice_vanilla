import ContentTitle from "../components/ContentTitle.js"

class SignupPage {
  constructor({ $target }) {
    this.$target = $target
  }

  render() {
    new ContentTitle({ $target: this.$target, title: 'Sign Up, GreatPeoPle' }).render()
  }
}

export default SignupPage