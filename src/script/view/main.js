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
        // filterItem: document.querySelectorAll(".filter-item"),
        toggleFilter: document.querySelector(".toggle-filter"),
        filterCategory: document.querySelector("#filter-category"),
        filterIngredients: document.querySelector("#filter-ingredients"),
        filterGlass: document.querySelector("#filter-glass"),
        filterAlcohol: document.querySelector("#filter-alcohol"),
        filterCategoryActive: document.querySelector("#filter-category-active"),
        filterIngredientsActive: document.querySelector("#filter-ingredients-active"),
        filterGlassActive: document.querySelector("#filter-glass-active"),
        filterAlcoholActive: document.querySelector("#filter-alcohol-active"),
        aFilter: document.querySelector("#a-filter"),
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
            methodPageSearch.trigger()
            methodPageSearch.renderFilter()
        },
        trigger: () => {
            el.toggleFilter.addEventListener('click', () => {
                methodPageSearch.toggleFilter()
            })
            
            el.aFilter.addEventListener('click', () => {
                methodPageSearch.toggleFilter()
            })
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
        setFilterGlass: (cat, act) => {
            if(act === 'add'){
                dataPageSearch.filter.glass.push(cat)
            } else if(act === 'remove'){
                let index = dataPageSearch.filter.glass.indexOf(cat)
                dataPageSearch.filter.glass.splice(index, 1)
            }
            methodPageSearch.renderFilter()
        },
        setFilterAlcohol: (cat, act) => {
            if(act === 'add'){
                dataPageSearch.filter.alcohol.push(cat)
            } else if(act === 'remove'){
                let index = dataPageSearch.filter.alcohol.indexOf(cat)
                dataPageSearch.filter.alcohol.splice(index, 1)
            }
            methodPageSearch.renderFilter()
        },
        renderFilter: () => {
            methodPageSearch.renderFilterActive()
            methodPageSearch.renderFilterCategory()
            methodPageSearch.renderFilterIngredients()
            methodPageSearch.renderFilterGlass()
            methodPageSearch.renderFilterAlcohol()
        },
        renderFilterActive: () => {
            let f = dataPageSearch.filter
            // category
            if(f.category.length > 0){
                el.filterCategoryActive.innerHTML = ``
                f.category.forEach(e => {
                    el.filterCategoryActive.innerHTML += `
                        <span class="filter-item filter-category-item" data-id="${e}">${e} <svg class="close-x small"><path></path></svg></span>
                    `
                })
            } else {
                el.filterCategoryActive.innerHTML = `
                    <span class="filter-item filter-category-item" data-id="">Category <svg class="chevron-down"><path></path></svg></span>
                `
            }
            let filterCategoryItem = document.querySelectorAll('.filter-category-item')
            filterCategoryItem.forEach(e => e.addEventListener('click', () => {
                let id = e.getAttribute('data-id')
                if(id !== ''){
                    methodPageSearch.setFilterCategory(id, 'remove')
                } else {
                    methodPageSearch.toggleFilter()
                }
            }))
            // ingredients
            if(f.ingredients.length > 0){
                el.filterIngredientsActive.innerHTML = ``
                f.ingredients.forEach(e => {
                    el.filterIngredientsActive.innerHTML += `
                        <span class="filter-item filter-ingredients-item" data-id="${e}">${e} <svg class="close-x small"><path></path></svg></span>
                    `
                })
            } else {
                el.filterIngredientsActive.innerHTML = `
                    <span class="filter-item filter-ingredients-item" data-id="">Ingredients <svg class="chevron-down"><path></path></svg></span>
                `
            }
            let filterIngredientsItem = document.querySelectorAll('.filter-ingredients-item')
            filterIngredientsItem.forEach(e => e.addEventListener('click', () => {
                let id = e.getAttribute('data-id')
                if(id !== ''){
                    methodPageSearch.setFilterIngredients(id, 'remove')
                } else {
                    methodPageSearch.toggleFilter()
                }
            }))
            // glass
            if(f.glass.length > 0){
                el.filterGlassActive.innerHTML = ``
                f.glass.forEach(e => {
                    el.filterGlassActive.innerHTML += `
                        <span class="filter-item filter-glass-item" data-id="${e}">${e} <svg class="close-x small"><path></path></svg></span>
                    `
                })
            } else {
                el.filterGlassActive.innerHTML = `
                    <span class="filter-item filter-glass-item" data-id="">Glass <svg class="chevron-down"><path></path></svg></span>
                `
            }
            let filterGlassItem = document.querySelectorAll('.filter-glass-item')
            filterGlassItem.forEach(e => e.addEventListener('click', () => {
                let id = e.getAttribute('data-id')
                if(id !== ''){
                    methodPageSearch.setFilterGlass(id, 'remove')
                } else {
                    methodPageSearch.toggleFilter()
                }
            }))
            // alcohol
            if(f.alcohol.length > 0){
                el.filterAlcoholActive.innerHTML = ``
                f.alcohol.forEach(e => {
                    el.filterAlcoholActive.innerHTML += `
                        <span class="filter-item filter-alcohol-item" data-id="${e}">${e} <svg class="close-x small"><path></path></svg></span>
                    `
                })
            } else {
                el.filterAlcoholActive.innerHTML = `
                    <span class="filter-item filter-alcohol-item" data-id="">Alcohol <svg class="chevron-down"><path></path></svg></span>
                `
            }
            let filterAlcoholItem = document.querySelectorAll('.filter-alcohol-item')
            filterAlcoholItem.forEach(e => e.addEventListener('click', () => {
                let id = e.getAttribute('data-id')
                if(id !== ''){
                    methodPageSearch.setFilterAlcohol(id, 'remove')
                } else {
                    methodPageSearch.toggleFilter()
                }
            }))
        },
        renderFilterCategory: () => {
            el.filterCategory.innerHTML = ''
            dataPageSearch.category.forEach(e => {
                el.filterCategory.innerHTML += `
                    <li class="list-filter li-filter-category" data-id="${e}">
                        <svg class="${(dataPageSearch.filter.category.includes(e)) ? 'checkbox-marked' : 'checkbox-blank'} mr-1"><path></path></svg>${e}
                    </li>
                `
            })
            let cbFilterCategory = document.querySelectorAll('.li-filter-category')
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
                    <li class="list-filter li-filter-ingredients" data-id="${e}">
                        <svg class="${(dataPageSearch.filter.ingredients.includes(e)) ? 'checkbox-marked' : 'checkbox-blank'} mr-1" data-id="${e}"><path></path></svg>${e}
                    </li>
                `
            })
            let cbFilterIngredients = document.querySelectorAll('.li-filter-ingredients')
            cbFilterIngredients.forEach(e => e.addEventListener('click', () => {
                let id = e.getAttribute('data-id')
                if(dataPageSearch.filter.ingredients.includes(id)){
                    methodPageSearch.setFilterIngredients(id, 'remove')
                } else {
                    methodPageSearch.setFilterIngredients(id, 'add')
                }
            }))
        },
        renderFilterGlass: () => {
            el.filterGlass.innerHTML = ''
            dataPageSearch.glass.forEach(e => {
                el.filterGlass.innerHTML += `
                    <li class="list-filter li-filter-glass" data-id="${e}">
                        <svg class="${(dataPageSearch.filter.glass.includes(e)) ? 'checkbox-marked' : 'checkbox-blank'} mr-1" data-id="${e}"><path></path></svg>${e}
                    </li>
                `
            })
            let cbFilterGlass = document.querySelectorAll('.li-filter-glass')
            cbFilterGlass.forEach(e => e.addEventListener('click', () => {
                let id = e.getAttribute('data-id')
                if(dataPageSearch.filter.glass.includes(id)){
                    methodPageSearch.setFilterGlass(id, 'remove')
                } else {
                    methodPageSearch.setFilterGlass(id, 'add')
                }
            }))
        },
        renderFilterAlcohol: () => {
            el.filterAlcohol.innerHTML = ''
            dataPageSearch.alcohol.forEach(e => {
                el.filterAlcohol.innerHTML += `
                    <li class="list-filter li-filter-alcohol" data-id="${e}">
                        <svg class="${(dataPageSearch.filter.alcohol.includes(e)) ? 'checkbox-marked' : 'checkbox-blank'} mr-1" data-id="${e}"><path></path></svg>${e}
                    </li>
                `
            })
            let cbFilterAlcohol = document.querySelectorAll('.li-filter-alcohol')
            cbFilterAlcohol.forEach(e => e.addEventListener('click', () => {
                let id = e.getAttribute('data-id')
                if(dataPageSearch.filter.alcohol.includes(id)){
                    methodPageSearch.setFilterAlcohol(id, 'remove')
                } else {
                    methodPageSearch.setFilterAlcohol(id, 'add')
                }
            }))
        }
    }

    method.mounted()
}
export default main