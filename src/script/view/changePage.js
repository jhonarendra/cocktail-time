import search from './search.js'
import show from './show.js'
import home from './home.js'

const changePage = {
	data: {
	    page: 'home'
	},
	el: {
        app: document.querySelector("#app")
    },
    method: {
    	run: () => {
    		switch(changePage.data.page){
    		    case 'home':
                    app.innerHTML = home.html
                    home.method.mounted()
    		        break

    		    case 'search':
    		        app.innerHTML = search.html
    		        search.method.mounted()
    		        break
    		    
    		    case 'show':
	    		    app.innerHTML = show.html
	    		    show.method.mounted()
    		        break

    		    default:
    		        break
    		}
    	},
    	runWithParam: (params) => {
    		switch(changePage.data.page){
    		    case 'home':
                    app.innerHTML = home.html
                    home.method.prop(params)
    		        break

    		    case 'search':
    		        app.innerHTML = search.html
                    search.method.prop(params)
    		        break
    		    
    		    case 'show':
	    		    app.innerHTML = show.html
	    		    show.method.prop(params)
    		        break

    		    default:
    		        break
    		}
    	},
    	setPage: val => {
    		changePage.data.page = val
    		changePage.method.run()
    	},
    	setPageWithParam: (val, params) => {
    		changePage.data.page = val
    		changePage.method.runWithParam(params)
    	}
    }
    
}

export default changePage