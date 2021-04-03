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
        // return Promise.all([
        //     fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        // ]).then(res => {
        //     let data = []
        //     res.forEach(e => {
        //         data.push(e.drinks[0])
        //     })
        //     return data
        // })

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


        // ini yg sudah mau
        // let data = ''
        // return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        // .then(res => {
        //     return Promise.resolve(res.json())
        // }).then(res => {
        //     data = res.drinks[0]

        //     let promise = []
        //     if(data.strIngredient1){
        //         promise.push(
        //             fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${res.drinks[0].strIngredient1}`)
        //             .then(res => res.json())
        //         )
        //     }

        //     Promise.all()

        //     return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${res.drinks[0].strIngredient1}`)
        // }).then(res => {
        //     return Promise.resolve(res.json())
        // }).then(res => {
        //     let ingredient = res.ingredients[0]
        //     ingredient.measure = data.strMeasure1
        //     ingredient.strThumb = 'https://www.thecocktaildb.com/images/ingredients/'+data.strIngredient1+'-Small.png'
            
        //     data.ingredients = [ ingredient ]

        //     return data
        // })


        // .then(res => {
        //             return 
        //             // return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${resJson.drinks[0].strIngredient1}`)
        //             // if(resJson.drinks){
        //             //     return Promise.resolve(resJson.drinks)
        //             // } else {
        //             //     return Promise.reject(`${key} is not found`)
        //             // }
        //         })

        // let show = {}
        // cocktail.forEach(e => {
        //     if(e.idDrink === id){
        //         show = e
        //     }
        // })
        // // formating ingredient n measure
        // let arrIng = []
        // if(show.strIngredient1){
        //     // nanti disini search ingredient1, dapetin detail ingredient:
        //     // https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka

        //     // image: https://www.thecocktaildb.com/images/ingredients/Elderflower%20cordial-Small.png
        //     arrIng.push({
        //         idIngredient: '1',
        //         strIngredient: show.strIngredient1,
        //         strDescription: 'test',
        //         strThumb: 'https://www.thecocktaildb.com/images/ingredients/'+show.strIngredient1+'-Small.png',
        //         strType: 'Spirit',
        //         strAlcohol: 'Yes',
        //         strABV: '40',
        //         measure: show.strMeasure1
        //     })
        // }
        // if(show.strIngredient2){
        //     arrIng.push({
        //         idIngredient: '1',
        //         strIngredient: show.strIngredient2,
        //         strDescription: 'test',
        //         strThumb: 'https://www.thecocktaildb.com/images/ingredients/'+show.strIngredient2+'-Small.png',
        //         strType: 'Spirit',
        //         strAlcohol: 'Yes',
        //         strABV: '40',
        //         measure: show.strMeasure2
        //     })
        // }
        // if(show.strIngredient3){
        //     arrIng.push({
        //         idIngredient: '1',
        //         strIngredient: show.strIngredient3,
        //         strDescription: 'test',
        //         strThumb: 'https://www.thecocktaildb.com/images/ingredients/'+show.strIngredien3+'-Small.png',
        //         strType: 'Spirit',
        //         strAlcohol: 'Yes',
        //         strABV: '40',
        //         measure: show.strMeasure3
        //     })
        // }
        // if(show.strIngredient4){
        //     arrIng.push({
        //         idIngredient: '1',
        //         strIngredient: show.strIngredient4,
        //         strDescription: 'test',
        //         strThumb: 'https://www.thecocktaildb.com/images/ingredients/'+show.strIngredient4+'-Small.png',
        //         strType: 'Spirit',
        //         strAlcohol: 'Yes',
        //         strABV: '40',
        //         measure: show.strMeasure4
        //     })
        // }
        // // ... Dan lainnya, nanti pake api aja
        // show.ingredients = arrIng
        // return show
    }
    static search(key) {
        return fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${key}`)
        .then(res => {
            return res.json()
        })
        .then(resJson => {
            // console.log(resJson)
            if(resJson.teams){
                return Promise.resolve(resJson.teams)
            } else {
                return Promise.reject(`${key} is not found`)
            }
        })
        // return new Promise((resolve, rejected) => {
        //     const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()))
        //     if (filteredClubs.length) {
        //         resolve(filteredClubs)
        //     } else {
        //         rejected(keyword + " is not found")
        //     }
        // })
    }
}
export default Api