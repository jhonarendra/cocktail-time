const main = () => {

    const data = {
        page: 'search'
    }

    const el = {
        home: document.querySelector("#home"),
        search: document.querySelector("#search"),
        show: document.querySelector("#show"),
        btnBrowse: document.querySelector(".btnBrowse"),
        btnHome: document.querySelector(".btnHome")
    }

    const method = {
        mounted: () => {
            method.trigger()
            method.changePage()
        },
        trigger: () => {
            el.btnBrowse.addEventListener('click', () => {
                data.page = 'search'
                method.changePage()
            })
            el.btnHome.addEventListener('click', () => {
                data.page = 'home'
                method.changePage()
            })
        },
        changePage: () => {
            switch(data.page){
                case 'home':
                    home.style.display = 'block'
                    search.style.display = 'none'
                    show.style.display = 'none'
                    break

                case 'search':
                    home.style.display = 'none'
                    search.style.display = 'block'
                    show.style.display = 'none'
                    break
                
                case 'show':
                    home.style.display = 'none'
                    search.style.display = 'none'
                    show.style.display = 'show'
                    break

                default:
                    home.style.display = 'block'
                    search.style.display = 'none'
                    show.style.display = 'none'
                    break
            }
        }
    }

    method.mounted()
}
export default main