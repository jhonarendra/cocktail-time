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
		    show.method.trigger()
			show.data.id = show.prop.id
			show.method.showData()
		},
		prop: param => {
			show.prop.id = param.id
		},
		trigger: () => {
			show.el.btnBackHeader = document.querySelector('#btn-back-header')
			show.el.ctName = document.querySelector('#ct-name')
			show.el.ctIngredient = document.querySelector('#ct-ingredient')
			show.el.ctAlcohol = document.querySelector('#ct-alcohol')

			show.el.btnBackHeader.addEventListener('click', () => {
				changePage.method.setPage('search')
			})
		},
		showData: () => {
			show.data.show = Api.show(show.data.id)

			let e = show.data.show
			console.log(e)

			show.el.ctName.innerHTML = e.strDrink

		}
	}
}
export default show