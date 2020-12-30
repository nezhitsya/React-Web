const knex = require('./mysql')
const promise = require('bluebird')
const path = require('knex')
const fs = require('fs')
const db = knex.client.config.connection.database || null