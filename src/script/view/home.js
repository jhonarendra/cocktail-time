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
		jumbotronBg: '',
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
			home.el.jumbotronBg = document.querySelector('.j-bg-image')
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
					if(i == 0){
						home.el.jumbotronBg.style.backgroundImage = `url('${e.strDrinkThumb}')`
					}

					el.innerHTML += `
						<div class="col-md-3 p-0">
							<cocktail-item></cocktail-item>
						</div>
					`
					
				})
				let cockTailItem = document.querySelectorAll('cocktail-item')
				cockTailItem.forEach((e, i) => {
					var show = home.data.cocktail[i]
					e.setCocktail = show
					e.click = () => {
						changePage.method.setPageWithParam('show', {id: show.idDrink})
					}
				})
			}
		},
	}
}
export default home