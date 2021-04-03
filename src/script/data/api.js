import cocktail from './cocktail.js'

class Api {
    static get() {
        return cocktail
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