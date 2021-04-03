import changePage from './changePage.js'

const main = () => {

    const method = {

        mounted: () => {
            method.trigger()
            changePage.method.run()
        },
        trigger: () => {

        }
    }

    method.mounted()
}
export default main