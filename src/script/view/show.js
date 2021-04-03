import showView from './show.html'
import Api from '../data/api.js'
import changePage from './changePage.js'

const show = {
	html: showView,
	data: {
		id: '',
		show: ''
	},
	prop: {
		id: ''
	},
	el: {
		btnBackHeader: '',
		ctName: '',
		ctIngredient: '',
		ctAlcohol: '',
		
	},
	method: {
		mounted: () => {
			show.data.id = show.prop.id
			show.method.showData()
		    show.method.trigger()
		},
		prop: param => {
			show.prop.id = param.id
		},
		trigger: () => {
			show.el.btnBackHeader = document.querySelector('#btn-back-header')

			show.el.btnBackHeader.addEventListener('click', () => {
				changePage.method.setPage('search')
			})
		},
		showData: () => {
			show.data.show = Api.show(show.data.id)

			let e = show.data.show


		}
	}
}
export default show