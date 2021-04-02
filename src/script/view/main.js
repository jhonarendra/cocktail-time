const main = () => {

    
    const data = {
        page: 'search'
    }
    const dataPageSearch = {
        toggleFilter: false,
        category: ["Test", "Test2", "Test3"],
        ingredients: ["ingredients", "ingredientsw", "ingredients33"],
        glass: ["glass", "glass2", "glass3"],
        alcohol: ["alcohol3", "alcoholdd", "alcohol dd"],
        filter: {
            category: [],
            ingredients: [],
            glass: [],
            alcohol: [],
        }
    }

    

    const el = {
        home: document.querySelector("#home"),
        search: document.querySelector("#search"),
        show: document.querySelector("#show"),
        btnBrowse: document.querySelector(".btnBrowse"),
        btnHome: document.querySelector(".btnHome"),
        filterDetail: document.querySelector(".filter-detail"),
        filterItem: document.querySelectorAll(".filter-item"),
        toggleFilter: document.querySelector(".toggle-filter"),
        filterCategory: document.querySelector("#filter-category"),
        filterIngredients: document.querySelector("#filter-ingredients")
    }

    

    const method = {

        // method per page
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
            el.filterItem.forEach(e => e.addEventListener('click', () => {
                methodPageSearch.toggleFilter()
            }))
            el.toggleFilter.addEventListener('click', () => {
                methodPageSearch.toggleFilter()
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
                    methodPageSearch.mounted()
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
    const methodPageSearch = {
        mounted: () => {
            methodPageSearch.renderFilter()
        },
        toggleFilter: () => {
            if(dataPageSearch.toggleFilter){
                el.filterDetail.classList.remove('show')
                dataPageSearch.toggleFilter = false
            } else {
                el.filterDetail.classList.add('show')
                dataPageSearch.toggleFilter = true
            }
        },
        setFilterCategory: (cat, act) => {
            if(act === 'add'){
                dataPageSearch.filter.category.push(cat)
            } else if(act === 'remove'){
                let index = dataPageSearch.filter.category.indexOf(cat)
                dataPageSearch.filter.category.splice(index, 1)
            }
            methodPageSearch.renderFilter()
        },
        setFilterIngredients: (cat, act) => {
            if(act === 'add'){
                dataPageSearch.filter.ingredients.push(cat)
            } else if(act === 'remove'){
                let index = dataPageSearch.filter.ingredients.indexOf(cat)
                dataPageSearch.filter.ingredients.splice(index, 1)
            }
            methodPageSearch.renderFilter()
        },
        renderFilter: () => {
            methodPageSearch.renderFilterActive()
            methodPageSearch.renderFilterCategory()
            methodPageSearch.renderFilterIngredients()
            // methodPageSearch.renderFilterGlass()
            // methodPageSearch.renderFilterAlcohol()
        },
        renderFilterActive: () => {
            
        }
        renderFilterCategory: () => {
            el.filterCategory.innerHTML = ''
            dataPageSearch.category.forEach(e => {
                el.filterCategory.innerHTML += `
                    <li>
                        <svg class="${(dataPageSearch.filter.category.includes(e)) ? 'checkbox-marked' : 'checkbox-blank'} mr-1 cb-filter-category" data-id="${e}"><path></path></svg>${e}
                    </li>
                `
            })
            let cbFilterCategory = document.querySelectorAll('.cb-filter-category')
            cbFilterCategory.forEach(e => e.addEventListener('click', () => {
                let id = e.getAttribute('data-id')
                if(dataPageSearch.filter.category.includes(id)){
                    methodPageSearch.setFilterCategory(id, 'remove')
                } else {
                    methodPageSearch.setFilterCategory(id, 'add')
                }
                
            }))
        },
        renderFilterIngredients: () => {
            el.filterIngredients.innerHTML = ''
            dataPageSearch.ingredients.forEach(e => {
                el.filterIngredients.innerHTML += `
                    <li>
                        <svg class="${(dataPageSearch.filter.ingredients.includes(e)) ? 'checkbox-marked' : 'checkbox-blank'} mr-1 cb-filter-ingredients" data-id="${e}"><path></path></svg>${e}
                    </li>
                `
            })
            let cbFilterIngredients = document.querySelectorAll('.cb-filter-ingredients')
            cbFilterIngredients.forEach(e => e.addEventListener('click', () => {
                let id = e.getAttribute('data-id')
                if(dataPageSearch.filter.ingredients.includes(id)){
                    methodPageSearch.setFilterIngredients(id, 'remove')
                } else {
                    methodPageSearch.setFilterIngredients(id, 'add')
                }
            }))
        }
    }

    method.mounted()
}
export default main