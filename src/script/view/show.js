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
		bgImage: '',
		ctHeaderIcon: '',
		btnBackHeader: '',
		ctName: '',
		ctCategory: '',
		ctIngredient: '',
		ctAlcohol: '',
		ingredients: '',
		glass: '',
		imgGlass: '',
		instruction: ''

	},
	method: {
		mounted: () => {
		    show.method.trigger()
			show.data.id = show.prop.id
			show.method.showData()
		},
		prop: param => {
			show.prop.id = param.id
			show.method.mounted()
		},
		trigger: () => {
			show.el.bgImage = document.querySelector('.bg-image')
			show.el.ctHeaderIcon = document.querySelector('.ct-header-icon')
			show.el.btnBackHeader = document.querySelector('#btn-back-header')
			show.el.ctName = document.querySelector('#ct-name')
			show.el.ctCategory = document.querySelector('#ct-category')
			show.el.ctIngredient = document.querySelector('#ct-ingredient')
			show.el.ctAlcohol = document.querySelector('#ct-alcohol')
			show.el.ingredients = document.querySelector('#ingredients')
			show.el.glass = document.querySelector('#glass')
			show.el.imgGlass = document.querySelector('#img-glass')
			show.el.instruction = document.querySelector('#instruction')

			show.el.btnBackHeader.addEventListener('click', () => {
				changePage.method.setPage('search')
			})
		},
		showData: async() => {
			try{
				let data = await Api.show(show.data.id)
				console.log(data)
				show.data.show = data
				let e = show.data.show


				show.el.bgImage.style.backgroundImage = `url('${e.strDrinkThumb}')`
				show.el.ctHeaderIcon.setAttribute('src', e.strDrinkThumb+'/preview')

				show.el.ctName.innerHTML = e.strDrink
				show.el.ctCategory.innerHTML = e.strCategory
				show.el.ctIngredient.innerHTML = ''
				show.el.ingredients.innerHTML = ''
				e.ingredients.forEach((f, i) => {
					show.el.ctIngredient.innerHTML += f.strIngredient
					if(i < e.ingredients.length -1){
						 show.el.ctIngredient.innerHTML += ', '
					}
					show.el.ingredients.innerHTML += `
					<li class="p-3">
						<img class="ing-icon" src="${f.strThumb}">
						<span class="ing-name">${f.strIngredient}</span>
						<span class="ing-measure">${(f.measure == null) ? '' : f.measure}</span>
					</li>
					`
				})
				show.el.ctAlcohol.innerHTML = `
					<span class="alcoholic">
						${e.strAlcoholic}
					</span>
				`

				show.el.glass.innerHTML = e.strGlass
				show.el.imgGlass.setAttribute('src', e.strDrinkThumb+'/preview')
				show.el.instruction.innerHTML = e.strInstructions
			} catch(err) {
				console.log(err)
			}
		}
	}
}
export default show