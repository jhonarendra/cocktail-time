import cocktail from './cocktail.js'

class Api {
    static get() {
        // Promise.all([
        //     fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`),
        //     fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`),
        //     fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`),
        //     fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`),
        //     fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`),
        //     fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`),
        //     fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        // ]).then(res => {
        //     console.log(res[0])
        //     // let data = []
        //     // data.push(rand1.drinks)
        //     // data.push(rand2.drinks)
        //     // data.push(rand3.drinks)
        //     // data.push(rand4.drinks)
        //     // data.push(rand5.drinks)
        //     // data.push(rand6.drinks)
        //     // data.push(rand7.drinks)
        //     // console.log(data)
        //     // return data
        // }).catch((err) => {
        //     console.error(err)
        // })

        // return fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        // .then(res => {
        //     return Promise.resolve(res.json())
        // })

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



        // return fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        // .then(res => {
        //     return res.json()
        // })
        // .then(resJson => {
        //     // console.log(resJson)
        //     if(resJson.drinks){
        //         return Promise.resolve(resJson.drinks)
        //     } else {
        //         return Promise.reject(`${key} is not found`)
        //     }
        // })
    }
    static show(id) {
        let show = {}
        cocktail.forEach(e => {
            if(e.idDrink === id){
                show = e
            }
        })
        // formating ingredient n measure
        let arrIng = []
        if(show.strIngredient1){
            // nanti disini search ingredient1, dapetin detail ingredient:
            // https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka

            // image: https://www.thecocktaildb.com/images/ingredients/Elderflower%20cordial-Small.png
            arrIng.push({
                idIngredient: '1',
                strIngredient: show.strIngredient1,
                strDescription: 'test',
                strThumb: 'https://www.thecocktaildb.com/images/ingredients/'+show.strIngredient1+'-Small.png',
                strType: 'Spirit',
                strAlcohol: 'Yes',
                strABV: '40',
                measure: show.strMeasure1
            })
        }
        if(show.strIngredient2){
            arrIng.push({
                idIngredient: '1',
                strIngredient: show.strIngredient2,
                strDescription: 'test',
                strThumb: 'https://www.thecocktaildb.com/images/ingredients/'+show.strIngredient2+'-Small.png',
                strType: 'Spirit',
                strAlcohol: 'Yes',
                strABV: '40',
                measure: show.strMeasure2
            })
        }
        if(show.strIngredient3){
            arrIng.push({
                idIngredient: '1',
                strIngredient: show.strIngredient3,
                strDescription: 'test',
                strThumb: 'https://www.thecocktaildb.com/images/ingredients/'+show.strIngredien3+'-Small.png',
                strType: 'Spirit',
                strAlcohol: 'Yes',
                strABV: '40',
                measure: show.strMeasure3
            })
        }
        if(show.strIngredient4){
            arrIng.push({
                idIngredient: '1',
                strIngredient: show.strIngredient4,
                strDescription: 'test',
                strThumb: 'https://www.thecocktaildb.com/images/ingredients/'+show.strIngredient4+'-Small.png',
                strType: 'Spirit',
                strAlcohol: 'Yes',
                strABV: '40',
                measure: show.strMeasure4
            })
        }
        // ... Dan lainnya, nanti pake api aja
        show.ingredients = arrIng
        return show
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