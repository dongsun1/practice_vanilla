import Header from "./components/Header.js";
import { setPersonalInfo } from "./components/Storage.js";
import HomePage from "./page/HomePage.js";
import SignupPage from "./page/SignupPage.js";

class App {
    constructor($body) {
        this.$body = $body;
        this.render();
    }

    async render() {
        await setPersonalInfo();

        new Header(this.$body).render()

        const main = document.createElement('main')
        main.setAttribute('id', "page_content")
        this.$body.appendChild(main)

        const homePage = new HomePage(main)
        const signupPage = new SignupPage(main)

        homePage.render()

        document.addEventListener('urlChange', (e) => {
            const pathname = e.detail.href
            main.innerHTML = ''

            switch (pathname) {
                case '/web/':
                    homePage.render()
                    break
                case '/web/signup':
                    signupPage.render()
                    break
                default:
                    break
            }
        })
    }
}

export default App;