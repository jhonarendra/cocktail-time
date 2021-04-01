import 'regenerator-runtime'
global.jQuery = require('jquery') // bootstrapnya minta jquery
require('bootstrap/dist/css/bootstrap.css');
import './styles/style.css'
import main from './script/view/main.js'

document.addEventListener("DOMContentLoaded", main)