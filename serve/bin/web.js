var express = require('express')
var web = express()
web.use(express.static('public'))
var bodyParser = require('body-parser')

var artTemplate = require('express-art-template')
web.engine('html',artTemplate)
web.use(bodyParser.urlencoded({extended:false}))
web.use(bodyParser.json())
module.exports = web 
