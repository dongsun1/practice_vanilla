import CardView from "../components/CardView.js";
import ContentTitle from "../components/ContentTitle.js";

class HomePage {
  constructor($main) {
    this.$main = $main;
  }

  render() {
    const title = new ContentTitle(this.$main, 'Great PeoPle')
    title.render()

    const cardView = new CardView(this.$main)
    cardView.render()
  }
}
export default HomePage;