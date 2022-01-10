const router = require('express').Router()
const { Owner } = require('../models')

// GET all Owners
router.get('/owners', async function (req, res) {
  const owners = await Owner.find({}).populate('dogs')
  res.json(owners)
})

// GET one Owner by id
router.get('/owners/:id', async function (req, res) {
  const owner = await Owner.findById(req.params.id).populate('dogs')
  res.json(owner)
})

// POST one Owner
router.post('/owners', async function (req, res) {
  const owner = await Owner.create(req.body)
  res.json(owner)
})

// PUT one Owner by id
router.put('/owners/:id', async function (req, res) {
  await Owner.findByIdAndUpdate(req.params.id, req.body)
  res.sendStatus(200)
})

// DELETE one Owner by id
router.delete('/owners/:id', async function (req, res) {
  await Owner.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

module.exports = router
