const { getAll, getOne, addOne, updateOne, deleteOne } = require('../controllers')

module.exports = app => {
  // GET all burgers
  app.get('/burgers', (req, res) => {
    getAll()
      .then(burgers => res.json(burgers))
      .catch(e => console.log(e))
  })

  // GET one burger
  app.get('/burgers/:b', (req, res) => {
    getOne(req.params.b)
    .then(burgers => res.json(burgers))
    .catch(e => console.log(e))
  })

  // POST a burger
  app.post('/burgers', (req, res) => {
    addOne(req.body)
    .then(_ => res.sendStatus(200))
    .catch(e => console.log(e))
  })

  // PUT a burger
  app.put('/burgers/:id', (req, res) => {
    updateOne(req.params.id, req.body)
    .then(_ => res.sendStatus(200))
    .catch(e => console.log(e))
  })

  // DELETE a burger
  app.delete('/burgers/:id', (req, res) => {
    deleteOne(req.params.id)
    .then(_ => res.sendStatus(200))
    .catch(e => console.log(e))
  })
}
