class SearchBar extends HTMLElement {

	constructor(){
		super();
		this.shadowDOM = this.attachShadow({
			mode: 'open'
		})
	}

	connectedCallback(){
		this.render()
	}

	set onSubmit(event){
		this._onSubmit = event
		this.render()
	}

	set setValue(val){
		this._value = val
		this.render()
	}

	get getValue(){
		return this.shadowDOM.querySelector("#search-input").value;
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
				.form-control {
				    display: block;
				    width: 100%;
				    height: calc(1.5em + 0.75rem + 2px);
				    padding: 0.375rem 0.75rem;
				    font-size: 1rem;
				    font-weight: 400;
				    line-height: 1.5;
				    color: #495057;
				    background-color: #fff;
				    background-clip: padding-box;
				    border: 1px solid #ced4da;
				    border-radius: 0.25rem;
				    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
				}
				.form-control {
					border-radius: 0 !important;
					background: transparent !important;
				}
				svg {
					width: 24px;
					height: 24px;
				}
				svg.magnify path{
					d: path("M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z");
				}
				svg.svg-ct-gold{
					fill: #E6B31E !important;
				}
				.bg-ct-dark {
					background: #343434;
				}
				.cursor-pointer {
					cursor: pointer;
				}
				#search-bar {
					padding: 10px 0;
				}
				#search-bar .container {
					position: relative;
				}
				#search-bar input[type="text"]{
					border:3px solid #E6B31E;
					color: #E6B31E;
					padding-left: 50px;
				}
				#search-bar svg {
					position: absolute;
					top:7px;
					left: 25px;
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
			<div id="search-bar">
				<div class="container">
					<form id="search-form">
						<input id="search-input" type="text" class="form-control" placeholder="Type and hit enter">
						<svg class="magnify svg-ct-gold"><path></path></svg>
					</form>
					
				</div>
			</div>
		`
		this.shadowDOM.querySelector("#search-form").addEventListener("submit", this._onSubmit)
		this.shadowDOM.querySelector("#search-input").value = this._value

	}
}

customElements.define('search-bar', SearchBar)