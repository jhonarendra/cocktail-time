# Cocktail Time

Aplikasi pencarian cocktail. Dibuat untuk mempelajari front-end web development menggunakan HTML, CSS, JavaScript ES6.

## Design

### Color

Kombinasi warna yang digunakan adalah black `#343434` dan gold `#E6B31E`. Kombinasi hitam dan emas dirasa cocok untuk website bertema cocktail (fancy, modern, elegan) (?).

### Font

Font yang digunakan adalah Lobster dan Open Sans.
- Font Lobster digunakan pada logo type dan heading
- Open Sans digunakan sebagai font body

### Tata Letak

Terdapat 3 halaman yaitu landing page, search page, dan show page.

#### Landing Page

Landing page dibuat sederhana saja dengan menampilkan header, menu navigasi dan 4 section, yaitu:
- Header: logo (link ke landing page) dan link browse (ke halaman pencarian)
- Menu Nav: menu navigasi sederhana untuk landing page
- Home: jumbotron yang berisi background cocktail yang diambil secara acak, search bar
- Intro: sedikit penjelasan aplikasi, screenshot website pada perangkat seluler
- Sample: menampilkan 6 buah cocktail secara random
- Lets Try: search bar

> Api untuk search dan filter sudah disediakan oleh thecocktaildb.com

#### Search Page

Halaman pencarian memiliki header (dengan tambahan widget pencarian), widget filter dan section hasil pencarian.
- Search Bar: digunakan untuk mencari cocktail berdasarkan nama
- Filter: terdapat 4 jenis data yang bisa difilter, yaitu category, ingredients, glass dan alcoholic
- Hasil Pencarian: menampilkan cocktail dalam format card dengan background image. Jumlah item yang ditampilkan sesuai dengan apa yang didapat dari api (tidak ada pagination)

> Api untuk search dan filter sudah disediakan oleh thecocktaildb.com/api.php

#### Show Page

Halaman untuk menampilkan detail cocktail. Terdapat background image
- Background Image: untuk melengkapi tampilan saja. Background image diberi backdrop gelap dan efek blur. Hanya terdapat tombol back (link ke search page)
- Header: menampilkan foto cocktail, nama, bahan, kategori dan alkohol/non-alkohol
- Ingredients: menampilkan komposisi cocktail dilengkapi dengan foto dan takaran
- Glass: nama gelas yang digunakan dan foto cocktail
- Instruction: penjelasan untuk membuat cocktail

## Sintaks ES6

JavaScript ditulis dengan format **ES6**. Misalnya pada penggunaan `const` dan _arrow function_ pada `main.js`

```javascript
import changePage from './changePage.js'

const main = () => {
	...
    const method = {
        mounted: () => {
            method.trigger()
            changePage.method.run()
        },
        ....
```
Penggunaan `let`, `async` dan `await` pada `search.js`

```javascript
filter: async() => {
	let isSearch = true
	let isFilter = true
    ...
    	try {
    		search.data.cocktail = await Api.get()
    		search.method.renderCocktailItem()
    	} catch(err) {
    		console.log(err)
    	}
    ...

```
Template literal 

```javascript
search.data.cocktail.forEach(e => {
	el.innerHTML += `
		<div class="col-md-4 p-0">
			<cocktail-item></cocktail-item>
		</div>
	`
})
```

## Web Component

Web component dipakai pada `app-bar`, `search-bar` dan `cocktail-item` karena component ini dipakai berulang. Berikut beberapa potongan kode dari pembuatan component.

Class AppBar

```javascript
class AppBar extends HTMLElement {
	...
}
customElements.define('app-bar', AppBar)
```

Render component dengan shadowDOM (supaya css spesifik pada element dan tidak terpengaruh css halaman utama)

```javascript

constructor(){
	super()
	this.shadowDOM = this.attachShadow({
		mode: 'open'
	})
}

render(){
	this.shadowDOM.innerHTML = `
		<style>
			...
		</style>
		<div id="app-bar" class="bg-ct-dark cursor-pointer">
			...
		</div>
	`
}

```

Passing data

```javascript
class CocktailItem extends HTMLElement {
	set setCocktail(cocktail){
		this._cocktail = cocktail
		this.render()
	}
	set click(event){
		this._click = event
		this.render()
	}
	render(){
		this.shadowDOM.innerHTML = `
		...
			<div class="cocktail-item" data-id="${((this._cocktail) ? this._cocktail.idDrink : '')}">
				<img src="${(this._cocktail) ? this._cocktail.strDrinkThumb+'/preview' : '/src/img/sample/noimage.jpg'}">
				<div class="backdrop"></div>
				<h3>${(this._cocktail) ? this._cocktail.strDrink : '...'}</h3>
			</div>
		`
		this.shadowDOM.querySelector(".cocktail-item").addEventListener("click", this._click)

```

```javascript
let cockTailItem = document.querySelectorAll('cocktail-item')
cockTailItem.forEach((e, i) => {
	let show = search.data.cocktail[i]
	e.setCocktail = show
	e.click = () => {
		changePage.method.setPageWithParam('show', {id: show.idDrink})
	}
})
```

## Node Package Manager

Pada `package.json` terlihat plugin apa saja yang digunakan. `devDependencies` adalah paket yang digunakan untuk membantu tahap pengembangan aplikasi saja, sedangkan `dependencies` adalah paket yang digunakan untuk membangun aplikasi.

```javascript
"devDependencies": {
  "@babel/core": "^7.13.14",
  "@babel/preset-env": "^7.13.12",
  "babel-loader": "^8.2.2",
  "css-loader": "^5.2.0",
  "html-webpack-plugin": "^5.3.1",
  "style-loader": "^2.0.0",
  "html-loader": "^2.1.2",
  "url-loader": "^4.1.1",
  "webpack": "^5.28.0",
  "webpack-cli": "^4.6.0",
  "webpack-dev-server": "^3.11.2",
  "webpack-merge": "^5.7.3"
},
"dependencies": {
  "bootstrap": "^4.6.0",
  "jquery": "^3.6.0",
  "popper.js": "^1.16.1",
  "regenerator-runtime": "^0.13.7"
}
```

## Webpack

Digunakan untuk running aplikasi mode dev atau production. Mode dev dengan perintah `webpack serve --config webpack.dev.js` atau dengan npm dipanggil dengan `npm run serve` seperti di di package.json. Mode production `npm run build`, dan hasilnya ada di folder dist.

Terdapat 3 file config webpack yaitu `webpack.common.js`, `webpack.dev.js` dan `webpack.prod.js`
- `webpack.common.js` adalah file config webpack yang utama untuk mengatur entry poin, output dll
- `webpack.dev.js` adalah config untuk dev
- `webpack.prod.js` adalah config untuk production
Ketiga nya terhubung karena config common di require di dev dan di prod menggunakan module `webpack-merge`

File loader yang digunakan yaitu `style-loader`, `css-loader`, `html-loader`, `url-loader`
- `style-loader` dan `css-loader` supaya bisa import file css di javascript (dipakai di `app.js`)
- `html-loader` digunakan supaya bisa import file html. Misalnya pada `show.js` diimport file html `show.html`. `show.html` dirender ketika page mode 'show' seperti pada rule di `changePage.js`

```javascript
module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                }
            ]
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: "html-loader"
                }
            ]
        },
        {
            test: /\.woff$/,
            use: [
                {
                    loader: "url-loader"
                }
            ]
        }
    ]
},
```

## Asynchronous JavaScript Request

Semua request data api diatur pada file `src/script/data/api.js`. Berikut beberapa method api

### get()

Fungsi ini digunakan untuk mengambil 6 data cocktail secara random untuk halaman landing page dan search page ketika tidak ada filter. Api get data menghasilkan hanya 1 item, sehingga perlu request 6x (atau mungkin ada cara lain ya? :D) maka dari itu ada fetch 6x pada url yang sama.

```javascript
return Promise.all([
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`).then(res => res.json()),
    ...
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`).then(res => res.json())
]).then(res => {
    let data = []
    res.forEach(e => {
        data.push(e.drinks[0])
    })
    ...
    return data
})
```

### show(id)

Untuk menampilkan detail 1 cocktail, method `show` dengan parameter id cocktail (`idDrink`) ini dipanggil. Tapi ternyata tidak mudah :D. Ingredients / komposisinya ditampilkan seperti ini
```javascript
strIngredient1: "Light rum"
strIngredient2: "Lime"
...
strIngredient14: null
strIngredient15: null
```
Jadi, untuk mendapatkan detail ingredient, saya perlu memanggil api lookup ingredient. Setelah di bersihkan, bisa dapat array yang menurut saya lebih mudah saya olah.
```javascript
ingredients: Array(5)
0: {idIngredient: "305", strIngredient: "Light Rum", strDescription: "Light rums, also referred to as "silver" or "white… cocktails including the Mojito and the Daiquiri.", strType: "Rum", strAlcohol: "Yes", …}
1: {idIngredient: "312", strIngredient: "Lime", strDescription: "A lime (from French lime, from Arabic līma, from P…rigins; limes do not form a monophyletic group.
↵", strType: "Fruit", strAlcohol: null, …}
2: {idIngredient: "476", strIngredient: "Sugar", strDescription: "Sugar is the generic name for sweet-tasting, soluble carbohydrates, many of which are used in food.", strType: null, strAlcohol: null, …}
3: {idIngredient: "337", strIngredient: "Mint", strDescription: "Lamiaceae (/ˌleɪmiˈeɪsiˌaɪ/ or /ˌleɪmiˈeɪsiiː/) or…, and is sometimes found in other plant families.", strType: "Flower", strAlcohol: null, …}
4: {idIngredient: "455", strIngredient: "Soda Water", strDescription: null, strType: null, strAlcohol: null, …}
```
### search(key)

Fungsi ini digunakan untuk mengambil data cocktail berdasarkan kata yang diketik di search bar. Hasil api menampilkan list cocktail yang sesuai keperluan.

### filter(data)

Fungsi untuk mem-filter data berdasarkan category, ingredients, glass dan alcohol/non-alcohol. Url yang dituju `.../filter.php`, dengan tambahan parameter `c` untuk category, `i` ingredients, `g` glass dan `a` alcohol.

Jadi, jika ingin menampilkan data berdasarkan semua parameter, urlnya akan menjadi `.../filter?c={category}&i={ingredients}&g={glass}&a={alcohol}`.

> Filter berdasarkan parameter untuk project ini hanya bisa untuk 1 value. Tidak bisa menampilkan data berdasarkan 1 parameter untuk banyak value, contohnya `?i=Dry_Vermouth,Gin,Anis` _(only available to $2+ Patreon supporters)_

### getCategory(), getGlass(), getIngredients(), getAlcoholic()

Api dari thecocktaildb.com juga menyediakan api untuk mengambil list category, glass, ingredients dan alcoholic yang ada pada tiap cocktail. Data dari keempat method ini ditampilkan pada checkbox 


## Screenshot

![](https://raw.githubusercontent.com/jhonarendra/cocktail-time/master/screenshot/1.gif)


![](https://raw.githubusercontent.com/jhonarendra/cocktail-time/master/screenshot/2.gif)


![](https://raw.githubusercontent.com/jhonarendra/cocktail-time/master/screenshot/3.gif)