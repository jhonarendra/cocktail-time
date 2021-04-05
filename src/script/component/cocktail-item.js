import noImg from '../../img/sample/noimage.jpg'

class CocktailItem extends HTMLElement {

	constructor(){
		super();
		this.shadowDOM = this.attachShadow({
			mode: 'open'
		})
	}

	set setCocktail(cocktail){
		this._cocktail = cocktail
		this.render()
	}
	set click(event){
		this._click = event
		this.render()
	}

	connectedCallback(){
		this.render()
	}

	render(){
		this.shadowDOM.innerHTML = `
			<style>
				* {
					margin:0;
					padding:0;
					box-sizing: border-box;
				}
				:host {
					display: block;
					width: 100%;
				}
				h3, .h3 {
				    font-size: 1.75rem;
				}
				h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
				    margin-bottom: 0.5rem;
				    font-weight: 500;
				    line-height: 1.2;
				}
				.backdrop {
					position: absolute;
					top:0;
					width: 100%;
					background: rgba(0,0,0,.5);
				}
				.cocktail-item {
					position: relative;
					height: 200px;
					overflow: hidden;
					cursor: pointer;
					transition: all .5s;
					transform: scale(1);
					z-index: 9;
				}
				.cocktail-item:hover{
					transform: scale(1.1);
					z-index: 9999;
				}
				.cocktail-item img{
					width: 100%;
				}
				.cocktail-item h3{
					position: absolute;
					color: #FCFAF1;
					bottom: 25px;
					left: 20px;
					font-family: 'Lobster Regular';
				}
				.cocktail-item h3:after{
					position: absolute;
					left: 0;
					bottom: -10px;
					content: ' ';
					width: 50px;
					height: 3px;
					background: #E6B31E;
				}
				.cocktail-item .backdrop {
					height: 200px;
				}
				
			</style>
			<div class="cocktail-item" data-id="${((this._cocktail) ? this._cocktail.idDrink : '')}">
				<img src="${(this._cocktail) ? this._cocktail.strDrinkThumb+'/preview' : noImg}">
				<div class="backdrop"></div>
				<h3>${(this._cocktail) ? this._cocktail.strDrink : '...'}</h3>
			</div>
		`
		this.shadowDOM.querySelector(".cocktail-item").addEventListener("click", this._click)

	}
}

customElements.define('cocktail-item', CocktailItem)