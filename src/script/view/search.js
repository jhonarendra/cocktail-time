import searchView from './search.html'
import Api from '../data/api.js'
import changePage from './changePage.js'

const search = {
	html: searchView,
	data: {
	    toggleFilter: false,
	    category: [],
	    ingredients: [],
	    glass: [],
	    alcohol: [],
	    filter: {
	        category: [],
	        ingredients: [],
	        glass: [],
	        alcohol: [],
	    },
	    search: '',
	    cocktail: [],
	    isFilterLoaded: false,
	},
	el: {
		appBar: '',
		searchBar: '',
		filterDetail: '',
		toggleFilter: '',
		filterCategory: '',
		filterIngredients: '',
		filterGlass: '',
		filterAlcohol: '',
		filterCategoryActive: '',
		filterIngredientsActive: '',
		filterGlassActive:  '',
		filterAlcoholActive:  '',
		aFilter:  '',
		aResetFilter: '',
		titleCocktailArea: '',
		cockTailItemArea: '',
		filterItemDefault: ''
	},
	method: {
	    mounted: () => {
	        search.method.trigger()
	        search.method.renderFilter()
	        search.method.filter()
	    },
	    prop: (param) => {
	    	search.data.search = param.search
	    	search.method.mounted()
	    },
	    trigger: () => {
	    	search.el.appBar = document.querySelector("app-bar")
	    	search.el.searchBar = document.querySelector("search-bar")
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
	    	search.el.aResetFilter = document.querySelector("#a-reset-filter"),
	    	search.el.titleCocktailArea = document.querySelector("#title-cocktail-area")
	    	search.el.cockTailItemArea = document.querySelector("#cocktail-item-area")
	    	search.el.filterItemDefault = document.querySelector('.filter-item-default')

	    	search.el.appBar.clickBrand = () => {
	    		changePage.method.setPage('home')
	    	}

	    	search.el.appBar.clickBrowse = () => {
	    		changePage.method.setPage('search')
	    	}
	    	search.el.searchBar.setValue = ''
	    	search.el.searchBar.onSubmit = e => {
	    	    e.preventDefault()
	    	    search.data.search = search.el.searchBar.getValue
	    	    search.method.filter()
	    	}

	        search.el.toggleFilter.addEventListener('click', () => {
	            search.method.toggleFilter()
	        })
	        
	        search.el.aFilter.addEventListener('click', () => {
	            search.method.filter()
	        })

	        search.el.aResetFilter.addEventListener('click', () => {
	            search.method.resetFilter()
	        })

	        search.el.filterItemDefault.addEventListener('click', () => {
	            search.method.toggleFilter()
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
	    search: () => {

	    },
	    filter: async() => {
	    	let isSearch = true
	    	let isFilter = true
	        if(search.data.search === ''){
	        	isSearch = false
	        }
	        if(search.data.filter.category.length === 0 && search.data.filter.ingredients.length === 0 && search.data.filter.glass.length === 0 && search.data.filter.alcohol.length === 0){
	        	isFilter = false
	        }


	        if(!isSearch && !isFilter){
	        	search.el.titleCocktailArea.innerHTML = 'You Might Like'
	        	// initial data
	        	try {
	        		search.data.cocktail = await Api.get()
	        		search.method.renderCocktailItem()
	        	} catch(err) {
	        		console.log(err)
	        	}
	        } else if(isSearch || isFilter){
	        	if(isSearch){
	        		search.el.titleCocktailArea.innerHTML = `Result From Keyword "${search.data.search}"`
					let data = ''
	        		try {
	        			data = await Api.search(search.data.search)
	        			search.data.cocktail = data
	        			search.method.renderCocktailItem()
	        		} catch(err) {
	        			console.log(err)
	        		}
	        		search.method.resetSearch()
	        		search.method.resetFilter()
	        	} else if(isFilter){
	        		search.el.titleCocktailArea.innerHTML = 'Result From Filter'
					let data = ''
	        		try {
	        			data = await Api.filter(search.data.filter)
	        			search.data.cocktail = data
	        			search.method.renderCocktailItem()
	        		} catch(err) {
	        			console.log(err)
	        		}
	        		search.method.resetSearch()

	        	}
	        }
	        if(search.data.toggleFilter){
	            search.data.toggleFilter = false
	            search.el.filterDetail.classList.remove('show')
	        }
	    },
	    resetSearch: () => {
	    	search.data.search = ''
	    	search.el.searchBar.setValue = ''
	    },
	    resetFilter: () => {
	    	search.data.filter.category = []
	    	search.data.filter.ingredients = []
	    	search.data.filter.glass = []
	    	search.data.filter.alcohol = []
	    	search.method.renderFilterActive()
	    	search.method.renderFilterCategory()
	    	search.method.renderFilterIngredients()
	    	search.method.renderFilterGlass()
	    	search.method.renderFilterAlcohol()
	    },
	    renderCocktailItem: () => {
	    	const el = search.el.cockTailItemArea
	    	el.innerHTML = ''
	    	if(search.data.cocktail){
	    		if(search.data.cocktail.length > 0){
	    			search.data.cocktail.forEach(e => {
	    				el.innerHTML += `
	    					<div class="col-md-4 p-0">
	    						<cocktail-item></cocktail-item>
	    					</div>
	    				`
	    			})
	    			const cockTailItem = document.querySelectorAll('cocktail-item')
					let show = ''
	    			cockTailItem.forEach((e, i) => {
	    				show = search.data.cocktail[i]
	    				e.setCocktail = show
	    				e.click = () => {
	    					changePage.method.setPageWithParam('show', {id: show.idDrink})
	    				}
	    			})
	    		} else {
	    			el.innerHTML = `<div class="col-12 text-center">No data</div>`
	    		}
	    	} else {
	    		el.innerHTML = `<div class="col-12 text-center">No data</div>`
	    	}
	    	

	    },
	    setFilterCategory: (cat, act) => {
			let index = 0
	        if(act === 'add'){
	        	search.data.filter.category = []
	            search.data.filter.category.push(cat)
	        } else if(act === 'remove'){
	            index = search.data.filter.category.indexOf(cat)
	            search.data.filter.category.splice(index, 1)
	        }
	        search.method.renderFilter()
	    },
	    setFilterIngredients: (cat, act) => {
			let index = 0
	        if(act === 'add'){
	        	search.data.filter.ingredients = []
	            search.data.filter.ingredients.push(cat)
	        } else if(act === 'remove'){
	            index = search.data.filter.ingredients.indexOf(cat)
	            search.data.filter.ingredients.splice(index, 1)
	        }
	        search.method.renderFilter()
	    },
	    setFilterGlass: (cat, act) => {
			let index = 0
	        if(act === 'add'){
	        	search.data.filter.glass = []
	            search.data.filter.glass.push(cat)
	        } else if(act === 'remove'){
	            index = search.data.filter.glass.indexOf(cat)
	            search.data.filter.glass.splice(index, 1)
	        }
	        search.method.renderFilter()
	    },
	    setFilterAlcohol: (cat, act) => {
			let index = 0
	        if(act === 'add'){
	        	search.data.filter.alcohol = []
	            search.data.filter.alcohol.push(cat)
	        } else if(act === 'remove'){
	            index = search.data.filter.alcohol.indexOf(cat)
	            search.data.filter.alcohol.splice(index, 1)
	        }
	        search.method.renderFilter()
	    },
	    renderFilter: async() => {
	    	if(!search.data.isFilterLoaded){
	    		try {
	    			const data1 = await Api.getCategory()
	    			data1.forEach(e => {
	    				search.data.category.push(e.strCategory)
	    			})
	    			const data2 = await Api.getGlass()
	    			data2.forEach(e => {
	    				search.data.glass.push(e.strGlass)
	    			})
	    			const data3 = await Api.getIngredients()
	    			data3.forEach(e => {
	    				search.data.ingredients.push(e.strIngredient1)
	    			})
	    			const data4 = await Api.getAlcoholic()
	    			data4.forEach(e => {
	    				search.data.alcohol.push(e.strAlcoholic)
	    			})
	    			search.data.isFilterLoaded = true
	    		} catch(err) {

	    		}
	    	}
	    	search.method.renderFilterActive()
	    	search.method.renderFilterCategory()
	    	search.method.renderFilterIngredients()
	    	search.method.renderFilterGlass()
	    	search.method.renderFilterAlcohol()
	        
	    },
	    renderFilterActive: () => {
	        const f = search.data.filter
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
	        const filterCategoryItem = document.querySelectorAll('.filter-category-item')
			let idCat = ''
	        filterCategoryItem.forEach(e => e.addEventListener('click', () => {
	            idCat = e.getAttribute('data-id')
	            if(idCat !== ''){
	                search.method.setFilterCategory(idCat, 'remove')
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
	        const filterIngredientsItem = document.querySelectorAll('.filter-ingredients-item')
			let idIng = ''
	        filterIngredientsItem.forEach(e => e.addEventListener('click', () => {
	            idIng = e.getAttribute('data-id')
	            if(idIng !== ''){
	                search.method.setFilterIngredients(idIng, 'remove')
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
	        const filterGlassItem = document.querySelectorAll('.filter-glass-item')
			let idGlass = ''
	        filterGlassItem.forEach(e => e.addEventListener('click', () => {
	            idGlass = e.getAttribute('data-id')
	            if(idGlass !== ''){
	                search.method.setFilterGlass(idGlass, 'remove')
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
	        const filterAlcoholItem = document.querySelectorAll('.filter-alcohol-item')
			let idAlc = ''
	        filterAlcoholItem.forEach(e => e.addEventListener('click', () => {
	            idAlc = e.getAttribute('data-id')
	            if(idAlc !== ''){
	                search.method.setFilterAlcohol(idAlc, 'remove')
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
	        const cbFilterCategory = document.querySelectorAll('.li-filter-category')
			let idCat = ''
	        cbFilterCategory.forEach(e => e.addEventListener('click', () => {
	            idCat = e.getAttribute('data-id')
	            if(search.data.filter.category.includes(idCat)){
	                search.method.setFilterCategory(idCat, 'remove')
	            } else {
	                search.method.setFilterCategory(idCat, 'add')
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
	        const cbFilterIngredients = document.querySelectorAll('.li-filter-ingredients')
			let idIng = ''
	        cbFilterIngredients.forEach(e => e.addEventListener('click', () => {
	            idIng = e.getAttribute('data-id')
	            if(search.data.filter.ingredients.includes(idIng)){
	                search.method.setFilterIngredients(idIng, 'remove')
	            } else {
	                search.method.setFilterIngredients(idIng, 'add')
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
	        const cbFilterGlass = document.querySelectorAll('.li-filter-glass')
			let idGlass = ''
	        cbFilterGlass.forEach(e => e.addEventListener('click', () => {
	            idGlass = e.getAttribute('data-id')
	            if(search.data.filter.glass.includes(idGlass)){
	                search.method.setFilterGlass(idGlass, 'remove')
	            } else {
	                search.method.setFilterGlass(idGlass, 'add')
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
			
	        const cbFilterAlcohol = document.querySelectorAll('.li-filter-alcohol')
			let idAlc = ''
	        cbFilterAlcohol.forEach(e => e.addEventListener('click', () => {
	            idAlc = e.getAttribute('data-id')
	            if(search.data.filter.alcohol.includes(idAlc)){
	                search.method.setFilterAlcohol(idAlc, 'remove')
	            } else {
	                search.method.setFilterAlcohol(idAlc, 'add')
	            }
	        }))
	    }
	}
}
export default search