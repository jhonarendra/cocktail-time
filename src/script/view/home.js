import homeView from './home.html'
import Api from '../data/api.js'
import changePage from './changePage.js'

const home = {
	html: homeView,
	data: {
		id: '',
		cocktail: []
	},
	prop: {
		id: ''
	},
	el: {
		appBar: '',
		searchBar: '',
		sampleContent: ''
	},
	method: {
		mounted: () => {
		    home.method.trigger()
		    home.method.getSample()
		},
		prop: param => {

		},
		trigger: () => {
			home.el.appBar = document.querySelector('app-bar')
			home.el.searchBar = document.querySelectorAll('search-bar')
			home.el.sampleContent = document.querySelector('#sample-content')

			home.el.appBar.clickBrand = () => {
				changePage.method.setPage('home')
			}

			home.el.appBar.clickBrowse = () => {
				changePage.method.setPage('search')
			}
			home.el.searchBar.forEach(e => {
				e.setValue = ''
				e.onSubmit = f => {
					f.preventDefault()
					let key = e.getValue
					changePage.method.setPageWithParam('search', {search: key})
				}
			})
		},
		getSample: async() => {
			try {
				home.data.cocktail = await Api.get()
				home.method.renderCocktailItem()
			} catch(err) {
				console.log(err)
			}
		},
		renderCocktailItem: () => {
			let el = home.el.sampleContent
			el.innerHTML = `
				<div class="sample-info col-md-6 bg-ct-gold">
					<h3 class="section-title">Various Types of Cocktail!</h3>
					<p>There are more than 100 types of cocktails with various variants.</p>
				</div>
			`
			if(home.data.cocktail.length > 0){
				home.data.cocktail.forEach((e, i) => {
					el.innerHTML += `
						<div class="col-md-3 p-0">
							<div class="cocktail-item" data-id="${e.idDrink}">
								<img src="${e.strDrinkThumb}/preview">
								<div class="backdrop"></div>
								<h3>${e.strDrink}</h3>
							</div>
						</div>
					`
				})
				let cockTailItem = document.querySelectorAll('.cocktail-item')
				cockTailItem.forEach(e => e.addEventListener('click', () => {
				    let id = e.getAttribute('data-id')
				    changePage.method.setPageWithParam('show', {id: id})
				}))
			}
		},
	}
}
export default home