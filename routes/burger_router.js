// const { getAll, getOne, addOne, updateOne, deleteOne } = require('../controllers')

const {burgers} = require('../controllers')

module.exports = app => {
  // GET all burgers
  app.get('/', (req, res) => {
    burgers.getAll()
      // .then(burgers => res.json(burgers))
      .then(burgers => {
      let objBurger = {burgers};
      res.render('index', objBurger);
      })
      .catch(e => console.log(e))
  })

  // GET one burger
  app.get('/burgers/:b', (req, res) => {
    burgers.getOne(req.params.b)
    .then(burgers => res.json(burgers))
    .catch(e => console.log(e))
  })

  // POST a burger
  app.post('/burgers', (req, res) => {
    burgers.addOne(req.body)
    .then(_ => res.sendStatus(200))
    res.redirect('/')
    .catch(e => console.log(e))
  })

  // PUT a burger
  app.put('/burgers/:id', (req, res) => {
    burgers.updateOne(req.params.id)
    .then(_ => res.sendStatus(200))
    .catch(e => console.log(e))
  })

  // DELETE a burger
  app.delete('/burgers/:id', (req, res) => {
    burgers.deleteOne(req.params.id)
    .then(_ => res.sendStatus(200))
    .catch(e => console.log(e))
  })
}
