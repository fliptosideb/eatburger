const db = require('../config')

module.exports = {
    async getAll() {
        let response = await new Promise((resolve, reject) => {
            db.query('SELECT * FROM burgers', (e, burgers) => {
                if (e) reject(e)
                console.log(burgers)
                resolve(burgers)
            })
        })
        return response
    },
    async getOne(burger) {
        let response = await new Promise((resolve, reject) => {
            db.query('SELECT * FROM burgers WHERE ?', { burger_name: burger }, (e, burgers) => {
                if (e) reject(e)
                console.log(burgers)
                resolve(burgers)
            })
        })
        return response
    },
    async addOne(burger) {
        let response = await new Promise((resolve, reject) => {
            db.query('INSERT INTO burgers SET?', burger, e => {
                if (e) reject(e)
                console.log('Data Added!')
                resolve()
            })
        })
        return response
    },
    async updateOne(id, updates) {
        let response = await new Promise((resolve, reject) => {
            db.query('UPDATE burgers SET ? WHERE ?', [updates, { id }], e => {
                if (e) reject(e)
                console.log('Updated!')
                resolve()
            })
        })
        return response
    },
    async deleteOne(id) {
        let response = await new Promise((resolve, reject) => {
            db.query('DELETE FROM burgers WHERE ?', { id }, e => {
                if (e) reject(e)
                console.log('DELETED!')
                resolve()
            })
        })
        return response
    }
}