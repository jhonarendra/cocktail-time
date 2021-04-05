import logoImg from '../../img/logo.png'

class AppBar extends HTMLElement {

	constructor(){
		super()
		this.shadowDOM = this.attachShadow({
			mode: 'open'
		})
	}

	connectedCallback(){
		this.render()
	}

	set clickBrowse(event){
		this._clickBrowse = event
		this.render()
	}
	set clickBrand(event){
		this._clickBrand = event
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
				.container, .container-fluid, .container-sm, .container-md, .container-lg, .container-xl {
				    width: 100%;
				    padding-right: 15px;
				    padding-left: 15px;
				    margin-right: auto;
				    margin-left: auto;
				}
				.bg-ct-dark {
					background: #343434;
				}
				h1 {
					font-family: 'Lobster Regular';
				}
				.cursor-pointer {
					cursor: pointer;
				}
				#app-bar {
					color: #E6B31E;
					height: 60px;
				}
				#app-bar a {
					color: #E6B31E !important;
				}
				#app-bar .container {
					display: flex;
				}
				#app-bar .brand {
					width: 50%;
					display: flex;
				}
				#app-bar .menu {
					width: 50%;
					margin-left: auto;
					text-align: right;
				}
				.brand img {
					height: 20px;
					margin: 20px 5px 20px 0;
				}
				.brand h1 {
					font-size: 20px;
					line-height: 60px;
				}
				#app-bar .menu a {
					line-height: 56px;
				}
				@media (min-width: 576px){
					.container, .container-sm, .container-md, .container-lg {
					    max-width: 540px;
					}
				}
				@media (min-width: 768px){
					.container, .container-sm, .container-md, .container-lg {
					    max-width: 720px;
					}
				}
				@media (min-width: 992px){
					.container, .container-sm, .container-md, .container-lg {
					    max-width: 960px;
					}
				}
				@media (min-width: 1200px){
					.container, .container-sm, .container-md, .container-lg, .container-xl {
					    max-width: 1140px;
					}
				}
				
				
			</style>
			<div id="app-bar" class="bg-ct-dark cursor-pointer">
				<div class="container">
					<div class="brand">
						<img src="${logoImg}"> <h1>Cocktail Time</h1>
					</div>
					<div class="menu">
						<a class="cursor-pointer btn-browse">Browse</a>
					</div>
				</div>
			</div>
		`
		this.shadowDOM.querySelector(".brand").addEventListener("click", this._clickBrand)
		this.shadowDOM.querySelector(".btn-browse").addEventListener("click", this._clickBrowse)
	}
}

customElements.define('app-bar', AppBar)