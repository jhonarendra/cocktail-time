import searchView from './searchView.html'

const search = {
	html: searchView,
	data: {
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
	    },
	    search: ''
	},
	el: {
		searchForm: document.querySelector("#search-form"),
		searchInput: document.querySelector("#search-input"),
		filterDetail: document.querySelector(".filter-detail"),
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
		titleCocktailArea: document.querySelector("#title-cocktail-area")
	},
	method: {
	    mounted: () => {
	        search.method.trigger()
	        search.method.renderFilter()
	    },
	    trigger: () => {

	    	search.el.searchForm = document.querySelector("#search-form"),
	    	search.el.searchInput = document.querySelector("#search-input"),
	    	search.el.filterDetail = document.querySelector(".filter-detail"),
	    	search.el.toggleFilter = document.querySelector(".toggle-filter"),
	    	search.el.filterCategory = document.querySelector("#filter-category"),
	    	search.el.filterIngredients = document.querySelector("#filter-ingredients"),
	    	search.el.filterGlass = document.querySelector("#filter-glass"),
	    	search.el.filterAlcohol = document.querySelector("#filter-alcohol"),
	    	search.el.filterCategoryActive = document.querySelector("#filter-category-active"),
	    	search.el.filterIngredientsActive = document.querySelector("#filter-ingredients-active"),
	    	search.el.filterGlassActive = document.querySelector("#filter-glass-active"),
	    	search.el.filterAlcoholActive = document.querySelector("#filter-alcohol-active"),
	    	search.el.aFilter = document.querySelector("#a-filter"),
	    	search.el.titleCocktailArea = document.querySelector("#title-cocktail-area")

	        search.el.toggleFilter.addEventListener('click', () => {
	            search.method.toggleFilter()
	        })
	        
	        search.el.aFilter.addEventListener('click', () => {
	            search.method.filter()
	        })

	        search.el.searchForm.addEventListener('submit', e => {
	            e.preventDefault()
	            search.data.search = search.el.searchInput.value
	            search.method.filter()
	        })

	    },
	    toggleFilter: () => {
	        if(search.data.toggleFilter){
	            search.el.filterDetail.classList.remove('show')
	            search.data.toggleFilter = false
	        } else {
	            search.el.filterDetail.classList.add('show')
	            search.data.toggleFilter = true
	        }
	    },
	    filter: () => {
	        if(search.data.search === '' && search.data.filter.category.length === 0 && search.data.filter.ingredients.length === 0 && search.data.filter.glass.length === 0 && search.data.filter.alcohol.length === 0){
	            search.el.titleCocktailArea.innerHTML = 'You Might Like'
	        } else {
	            search.el.titleCocktailArea.innerHTML = 'Result From Search and Filter'
	        }
	        if(search.data.toggleFilter){
	            search.data.toggleFilter = false
	            search.el.filterDetail.classList.remove('show')
	        }
	    },
	    setFilterCategory: (cat, act) => {
	        if(act === 'add'){
	            search.data.filter.category.push(cat)
	        } else if(act === 'remove'){
	            let index = search.data.filter.category.indexOf(cat)
	            search.data.filter.category.splice(index, 1)
	        }
	        search.method.renderFilter()
	    },
	    setFilterIngredients: (cat, act) => {
	        if(act === 'add'){
	            search.data.filter.ingredients.push(cat)
	        } else if(act === 'remove'){
	            let index = search.data.filter.ingredients.indexOf(cat)
	            search.data.filter.ingredients.splice(index, 1)
	        }
	        search.method.renderFilter()
	    },
	    setFilterGlass: (cat, act) => {
	        if(act === 'add'){
	            search.data.filter.glass.push(cat)
	        } else if(act === 'remove'){
	            let index = search.data.filter.glass.indexOf(cat)
	            search.data.filter.glass.splice(index, 1)
	        }
	        search.method.renderFilter()
	    },
	    setFilterAlcohol: (cat, act) => {
	        if(act === 'add'){
	            search.data.filter.alcohol.push(cat)
	        } else if(act === 'remove'){
	            let index = search.data.filter.alcohol.indexOf(cat)
	            search.data.filter.alcohol.splice(index, 1)
	        }
	        search.method.renderFilter()
	    },
	    renderFilter: () => {
	        search.method.renderFilterActive()
	        search.method.renderFilterCategory()
	        search.method.renderFilterIngredients()
	        search.method.renderFilterGlass()
	        search.method.renderFilterAlcohol()
	    },
	    renderFilterActive: () => {
	        let f = search.data.filter
	        // category
	        if(f.category.length > 0){
	            search.el.filterCategoryActive.innerHTML = ``
	            f.category.forEach(e => {
	                search.el.filterCategoryActive.innerHTML += `
	                    <span class="filter-item filter-category-item" data-id="${e}">${e} <svg class="close-x small"><path></path></svg></span>
	                `
	            })
	        } else {
	            search.el.filterCategoryActive.innerHTML = `
	                <span class="filter-item filter-category-item" data-id="">Category <svg class="chevron-down"><path></path></svg></span>
	            `
	        }
	        let filterCategoryItem = document.querySelectorAll('.filter-category-item')
	        filterCategoryItem.forEach(e => e.addEventListener('click', () => {
	            let id = e.getAttribute('data-id')
	            if(id !== ''){
	                search.method.setFilterCategory(id, 'remove')
	            } else {
	                search.method.toggleFilter()
	            }
	        }))
	        // ingredients
	        if(f.ingredients.length > 0){
	            search.el.filterIngredientsActive.innerHTML = ``
	            f.ingredients.forEach(e => {
	                search.el.filterIngredientsActive.innerHTML += `
	                    <span class="filter-item filter-ingredients-item" data-id="${e}">${e} <svg class="close-x small"><path></path></svg></span>
	                `
	            })
	        } else {
	            search.el.filterIngredientsActive.innerHTML = `
	                <span class="filter-item filter-ingredients-item" data-id="">Ingredients <svg class="chevron-down"><path></path></svg></span>
	            `
	        }
	        let filterIngredientsItem = document.querySelectorAll('.filter-ingredients-item')
	        filterIngredientsItem.forEach(e => e.addEventListener('click', () => {
	            let id = e.getAttribute('data-id')
	            if(id !== ''){
	                search.method.setFilterIngredients(id, 'remove')
	            } else {
	                search.method.toggleFilter()
	            }
	        }))
	        // glass
	        if(f.glass.length > 0){
	            search.el.filterGlassActive.innerHTML = ``
	            f.glass.forEach(e => {
	                search.el.filterGlassActive.innerHTML += `
	                    <span class="filter-item filter-glass-item" data-id="${e}">${e} <svg class="close-x small"><path></path></svg></span>
	                `
	            })
	        } else {
	            search.el.filterGlassActive.innerHTML = `
	                <span class="filter-item filter-glass-item" data-id="">Glass <svg class="chevron-down"><path></path></svg></span>
	            `
	        }
	        let filterGlassItem = document.querySelectorAll('.filter-glass-item')
	        filterGlassItem.forEach(e => e.addEventListener('click', () => {
	            let id = e.getAttribute('data-id')
	            if(id !== ''){
	                search.method.setFilterGlass(id, 'remove')
	            } else {
	                search.method.toggleFilter()
	            }
	        }))
	        // alcohol
	        if(f.alcohol.length > 0){
	            search.el.filterAlcoholActive.innerHTML = ``
	            f.alcohol.forEach(e => {
	                search.el.filterAlcoholActive.innerHTML += `
	                    <span class="filter-item filter-alcohol-item" data-id="${e}">${e} <svg class="close-x small"><path></path></svg></span>
	                `
	            })
	        } else {
	            search.el.filterAlcoholActive.innerHTML = `
	                <span class="filter-item filter-alcohol-item" data-id="">Alcohol <svg class="chevron-down"><path></path></svg></span>
	            `
	        }
	        let filterAlcoholItem = document.querySelectorAll('.filter-alcohol-item')
	        filterAlcoholItem.forEach(e => e.addEventListener('click', () => {
	            let id = e.getAttribute('data-id')
	            if(id !== ''){
	                search.method.setFilterAlcohol(id, 'remove')
	            } else {
	                search.method.toggleFilter()
	            }
	        }))
	    },
	    renderFilterCategory: () => {
	        search.el.filterCategory.innerHTML = ''
	        search.data.category.forEach(e => {
	            search.el.filterCategory.innerHTML += `
	                <li class="list-filter li-filter-category" data-id="${e}">
	                    <svg class="${(search.data.filter.category.includes(e)) ? 'checkbox-marked' : 'checkbox-blank'} mr-1"><path></path></svg>${e}
	                </li>
	            `
	        })
	        let cbFilterCategory = document.querySelectorAll('.li-filter-category')
	        cbFilterCategory.forEach(e => e.addEventListener('click', () => {
	            let id = e.getAttribute('data-id')
	            if(search.data.filter.category.includes(id)){
	                search.method.setFilterCategory(id, 'remove')
	            } else {
	                search.method.setFilterCategory(id, 'add')
	            }
	            
	        }))
	    },
	    renderFilterIngredients: () => {
	        search.el.filterIngredients.innerHTML = ''
	        search.data.ingredients.forEach(e => {
	            search.el.filterIngredients.innerHTML += `
	                <li class="list-filter li-filter-ingredients" data-id="${e}">
	                    <svg class="${(search.data.filter.ingredients.includes(e)) ? 'checkbox-marked' : 'checkbox-blank'} mr-1" data-id="${e}"><path></path></svg>${e}
	                </li>
	            `
	        })
	        let cbFilterIngredients = document.querySelectorAll('.li-filter-ingredients')
	        cbFilterIngredients.forEach(e => e.addEventListener('click', () => {
	            let id = e.getAttribute('data-id')
	            if(search.data.filter.ingredients.includes(id)){
	                search.method.setFilterIngredients(id, 'remove')
	            } else {
	                search.method.setFilterIngredients(id, 'add')
	            }
	        }))
	    },
	    renderFilterGlass: () => {
	        search.el.filterGlass.innerHTML = ''
	        search.data.glass.forEach(e => {
	            search.el.filterGlass.innerHTML += `
	                <li class="list-filter li-filter-glass" data-id="${e}">
	                    <svg class="${(search.data.filter.glass.includes(e)) ? 'checkbox-marked' : 'checkbox-blank'} mr-1" data-id="${e}"><path></path></svg>${e}
	                </li>
	            `
	        })
	        let cbFilterGlass = document.querySelectorAll('.li-filter-glass')
	        cbFilterGlass.forEach(e => e.addEventListener('click', () => {
	            let id = e.getAttribute('data-id')
	            if(search.data.filter.glass.includes(id)){
	                search.method.setFilterGlass(id, 'remove')
	            } else {
	                search.method.setFilterGlass(id, 'add')
	            }
	        }))
	    },
	    renderFilterAlcohol: () => {
	        search.el.filterAlcohol.innerHTML = ''
	        search.data.alcohol.forEach(e => {
	            search.el.filterAlcohol.innerHTML += `
	                <li class="list-filter li-filter-alcohol" data-id="${e}">
	                    <svg class="${(search.data.filter.alcohol.includes(e)) ? 'checkbox-marked' : 'checkbox-blank'} mr-1" data-id="${e}"><path></path></svg>${e}
	                </li>
	            `
	        })
	        let cbFilterAlcohol = document.querySelectorAll('.li-filter-alcohol')
	        cbFilterAlcohol.forEach(e => e.addEventListener('click', () => {
	            let id = e.getAttribute('data-id')
	            if(search.data.filter.alcohol.includes(id)){
	                search.method.setFilterAlcohol(id, 'remove')
	            } else {
	                search.method.setFilterAlcohol(id, 'add')
	            }
	        }))
	    }
	}
}
export default search