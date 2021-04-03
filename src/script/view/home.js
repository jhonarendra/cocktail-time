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
			home.el.searchBar = document.querySelectorAll('search-bar')

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
		}
	}
}
export default home