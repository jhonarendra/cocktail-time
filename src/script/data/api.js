import cocktail from './cocktail.js'

class Api {
    static get() {
        return cocktail
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
            arrIng.push({name: show.strIngredient1, measure: show.strMeasure1})
        }
        if(show.strIngredient2){
            arrIng.push({name: show.strIngredient2, measure: show.strMeasure2})
        }
        if(show.strIngredient3){
            arrIng.push({name: show.strIngredient3, measure: show.strMeasure3})
        }
        if(show.strIngredient4){
            arrIng.push({name: show.strIngredient4, measure: show.strMeasure4})
        }
        if(show.strIngredient5){
            arrIng.push({name: show.strIngredient5, measure: show.strMeasure5})
        }
        if(show.strIngredient6){
            arrIng.push({name: show.strIngredient6, measure: show.strMeasure6})
        }
        if(show.strIngredient7){
            arrIng.push({name: show.strIngredient7, measure: show.strMeasure7})
        }
        if(show.strIngredient8){
            arrIng.push({name: show.strIngredient8, measure: show.strMeasure8})
        }
        if(show.strIngredient9){
            arrIng.push({name: show.strIngredient9, measure: show.strMeasure9})
        }
        if(show.strIngredient10){
            arrIng.push({name: show.strIngredient10, measure: show.strMeasure10})
        }
        if(show.strIngredient11){
            arrIng.push({name: show.strIngredient11, measure: show.strMeasure11})
        }
        if(show.strIngredient12){
            arrIng.push({name: show.strIngredient12, measure: show.strMeasure12})
        }
        if(show.strIngredient13){
            arrIng.push({name: show.strIngredient13, measure: show.strMeasure13})
        }
        if(show.strIngredient14){
            arrIng.push({name: show.strIngredient14, measure: show.strMeasure14})
        }
        if(show.strIngredient15){
            arrIng.push({name: show.strIngredient15, measure: show.strMeasure15})
        }
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