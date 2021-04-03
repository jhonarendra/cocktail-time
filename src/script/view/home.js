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
		appBar: ''
	},
	method: {
		mounted: () => {
		    home.method.trigger()
		},
		prop: param => {

		},
		trigger: () => {
			home.el.appBar = document.querySelector('app-bar')

			home.el.appBar.clickBrand = () => {
				changePage.method.setPage('home')
			}

			home.el.appBar.clickBrowse = () => {
				changePage.method.setPage('search')
			}

			// home.el.btnBrowse.forEach(e => e.addEventListener('click', () => {
			// 	changePage.method.setPage('search')
			// }))
		}
	}
}
export default home