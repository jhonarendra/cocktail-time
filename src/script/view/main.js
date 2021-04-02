import search from './search.js'

const main = () => {

    
    const data = {
        page: 'search'
    }

    const el = {
        app: document.querySelector("#app")
    }

    

    const method = {

        mounted: () => {
            method.trigger()
            method.changePage()
        },
        trigger: () => {

        },
        changePage: () => {
            switch(data.page){
                case 'home':
                    el.homePage.style.display = 'block'
                    el.searchPage.style.display = 'none'
                    el.showPage.style.display = 'none'
                    break

                case 'search':
                    el.app.innerHTML = search.html
                    search.method.mounted()
                    break
                
                case 'show':
                    el.homePage.style.display = 'none'
                    el.searchPage.style.display = 'none'
                    el.showPage.style.display = 'show'
                    break

                default:
                    el.homePage.style.display = 'block'
                    el.searchPage.style.display = 'none'
                    el.showPage.style.display = 'none'
                    break
            }
        }
    }

    method.mounted()
}
export default main