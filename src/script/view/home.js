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
		btnBrowse: ''
	},
	method: {
		mounted: () => {
		    home.method.trigger()
		},
		prop: param => {

		},
		trigger: () => {
			home.el.btnBrowse = document.querySelectorAll('.btn-browse')

			home.el.btnBrowse.forEach(e => e.addEventListener('click', () => {
				changePage.method.setPage('search')
			}))
		}
	}
}
export default home