import cocktail from './cocktail.js'

class Api {
    static get() {
        return Promise.all([
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`).then(res => res.json()),
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`).then(res => res.json()),
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`).then(res => res.json()),
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`).then(res => res.json()),
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`).then(res => res.json()),
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`).then(res => res.json())
        ]).then(res => {
            let data = []
            res.forEach(e => {
                data.push(e.drinks[0])
            })
            return data
        })
    }
    static show(id) {
        let data = ''
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => {
            return Promise.resolve(res.json())
        }).then(res => {
            data = res.drinks[0]

            let promises = []
            if(data.strIngredient1){
                let promise1 = fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${data.strIngredient1}`)
                    .then(res => res.json())
                promises.push(promise1)
            }
            if(data.strIngredient2){
                let promise2 = fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${data.strIngredient2}`)
                    .then(res => res.json())
                promises.push(promise2)
            }
            if(data.strIngredient3){
                let promise3 = fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${data.strIngredient3}`)
                    .then(res => res.json())
                promises.push(promise3)
            }
            if(data.strIngredient4){
                let promise4 = fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${data.strIngredient4}`)
                    .then(res => res.json())
                promises.push(promise4)
            }
            if(data.strIngredient5){
                let promise5 = fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${data.strIngredient5}`)
                    .then(res => res.json())
                promises.push(promise5)
            }
            if(data.strIngredient6){
                let promise6 = fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${data.strIngredient6}`)
                    .then(res => res.json())
                promises.push(promise6)
            }
            if(data.strIngredient7){
                let promise7 = fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${data.strIngredient7}`)
                    .then(res => res.json())
                promises.push(promise7)
            }
            if(data.strIngredient8){
                let promise8 = fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${data.strIngredient8}`)
                    .then(res => res.json())
                promises.push(promise8)
            }
            if(data.strIngredient9){
                let promise9 = fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${data.strIngredient9}`)
                    .then(res => res.json())
                promises.push(promise9)
            }
            if(data.strIngredient10){
                let promise10 = fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${data.strIngredient10}`)
                    .then(res => res.json())
                promises.push(promise10)
            }
            if(data.strIngredient11){
                let promise11 = fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${data.strIngredient11}`)
                    .then(res => res.json())
                promises.push(promise11)
            }
            if(data.strIngredient12){
                let promise12 = fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${data.strIngredient12}`)
                    .then(res => res.json())
                promises.push(promise12)
            }
            if(data.strIngredient13){
                let promise13 = fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${data.strIngredient13}`)
                    .then(res => res.json())
                promises.push(promise13)
            }
            if(data.strIngredient14){
                let promise14 = fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${data.strIngredient14}`)
                    .then(res => res.json())
                promises.push(promise14)
            }
            if(data.strIngredient15){
                let promise15 = fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${data.strIngredient15}`)
                    .then(res => res.json())
                promises.push(promise15)
            }

            return Promise.all(promises).then(res => {
                let ingredients = []

                res.forEach((e, i) => {
                    let ing = e.ingredients[0]
                    ing.measure = data['strMeasure'+parseInt(i+1)]
                    ing.strThumb = 'https://www.thecocktaildb.com/images/ingredients/'+data['strIngredient'+parseInt(i+1)]+'-Small.png'
                    ingredients.push(ing)
                })

                data.ingredients = ingredients

                return data

            })
        })
    }
    static search(key) {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${key}`)
        .then(res => {
            return Promise.resolve(res.json())
        }).then(res => {
            return res.drinks
        })
    }
}
export default Api