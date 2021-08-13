import homeView from './home.html'
import Api from '../data/api.js'
import changePage from './changePage.js'

import noImg from '../../img/sample/noimage.jpg'
import mockupImg from '../../img/mockup/mobile.png'

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
		sampleContent: '',
		imgMockup: ''
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
			home.el.imgMockup = document.querySelector('#img-mockup')

			home.el.appBar.clickBrand = () => {
				changePage.method.setPage('home')
			}

			home.el.appBar.clickBrowse = () => {
				changePage.method.setPage('search')
			}
			home.el.jumbotronBg.style.backgroundImage = `url(${noImg})`
			home.el.searchBar.forEach(e => {
				e.setValue = ''
				e.onSubmit = f => {
					f.preventDefault()
					const key = e.getValue
					changePage.method.setPageWithParam('search', {search: key})
				}
			})

			home.el.imgMockup.setAttribute('src', mockupImg)
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
			const el = home.el.sampleContent
			el.innerHTML = `
				<div class="sample-info col-md-6 bg-ct-gold">
					<h3 class="section-title">Various Types of Cocktail!</h3>
					<p>There are more than 100 types of cocktails with various variants.</p>
				</div>
			`
			if(home.data.cocktail.length > 0){
				home.data.cocktail.forEach((e, i) => {
					if(i === 0){
						home.el.jumbotronBg.style.backgroundImage = `url('${e.strDrinkThumb}')`
					}

					el.innerHTML += `
						<div class="col-md-3 p-0">
							<cocktail-item></cocktail-item>
						</div>
					`
					
				})
				const cockTailItem = document.querySelectorAll('cocktail-item')
				let show = ''
				cockTailItem.forEach((e, i) => {
					show = home.data.cocktail[i]
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