import { cardDiv, cardPlane } from "./Card.js";
import { setCardStatus } from "./Storage.js";

class CardView {
  constructor($main) {
    this.$main = $main
  }

  infiniteScroll(container, localStorage) {
    let target = document.querySelector('#cards_container').lastChild

    const io = new IntersectionObserver((entry, observer) => {
      if (entry[0].isIntersecting) {
        io.unobserve(entry[0].target)

        const start = Number(target.getAttribute('idx')) + 1
        const end = start + 4 > localStorage.length ? localStorage.length : start + 4

        for (let i = start; i < end; i++) {
          const card = cardDiv(i)
          card.appendChild(cardPlane('front', localStorage[i].nickname))
          card.appendChild(cardPlane('back', localStorage[i].mbti))

          container.appendChild(card)
        }

        target = document.querySelector('#cards_container').lastChild
        io.observe(target)
      }
    }, { threshold: 0.7 })


    io.observe(target)
  }

  render() {
    const containerDiv = document.createElement("div");
    containerDiv.setAttribute('id', 'cards_container')
    this.$main.appendChild(containerDiv)

    const personalInfo = JSON.parse(localStorage.getItem("personalInfo"))
    setCardStatus()

    for (let i = 0; i < 4; i++) {
      const card = cardDiv(i)
      card.appendChild(cardPlane('front', personalInfo[i].nickname))
      card.appendChild(cardPlane('back', personalInfo[i].mbti))

      containerDiv.appendChild(card)
    }

    this.infiniteScroll(containerDiv, personalInfo)
  }
}
export default CardView;