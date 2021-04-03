import homeView from './home.html'
import Api from '../data/api.js'
import changePage from './changePage.js'

const home = {
	html: homeView,
	data: {
		id: ''
	},
	prop: {
		id: ''
	},
	el: {
		appBar: '',
		searchBar: ''
	},
	method: {
		mounted: () => {
		    home.method.trigger()
		},
		prop: param => {

		},
		trigger: () => {
			home.el.appBar = document.querySelector('app-bar')
			home.el.searchBar = document.querySelector('search-bar')

			home.el.appBar.clickBrand = () => {
				changePage.method.setPage('home')
			}

			home.el.appBar.clickBrowse = () => {
				changePage.method.setPage('search')
			}
			home.el.searchBar.setValue = ''
			home.el.searchBar.onSubmit = e => {
			    e.preventDefault()
			    let key = home.el.searchBar.getValue
			    changePage.method.setPageWithParam('search', {search: key})
			    search.method.filter()
			}

			// home.el.btnBrowse.forEach(e => e.addEventListener('click', () => {
			// 	changePage.method.setPage('search')
			// }))
		}
	}
}
export default home