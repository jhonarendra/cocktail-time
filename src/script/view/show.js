import showView from './show.html'
import Api from '../data/api.js'
import changePage from './changePage.js'

const show = {
	html: showView,
	data: {
		id: ''
	},
	prop: {
		id: ''
	},
	el: {

	},
	method: {
		mounted: () => {
			show.data.id = show.prop.id
		    show.method.trigger()
		},
		prop: param => {
			show.prop.id = param.id
		},
		trigger: () => {

		}
	}
}
export default show