const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant.model');


router.get('/new', (req, res, next) => res.render('restaurants/new'))
router.post('/new', (req, res, next) => {

	const { name, description } = req.body

	const location = { type: 'Point', coordinates: [req.body.longitude, req.body.latitude] }

	Restaurant.create({ name, description, location })
		.then(() => res.redirect('/restaurants'))
		.catch(err => next(err))
})


router.get('/', (req, res, next) => {
	Restaurant.find()
		.then(allRestaurants => res.render('restaurants/index', { restaurants: allRestaurants }))
		.catch(err => next(err))
})

router.get('/:restaurant_id/edit', (req, res, next) => {
	Restaurant.findById(req.params.restaurant_id)
		.then(restaurant => res.render('restaurants/update', { restaurant }))
		.catch(err => next(err))
})


router.post('/:restaurant_id', (req, res, next) => {

	const { name, description } = req.body

	Restaurant.findByIdAndUpdate(req.params.restaurant_id, { name, description })
		.then(() => res.redirect(`/restaurants/${req.params.restaurant_id}`))
		.catch(err => next(err))
});


router.get('/:restaurant_id/delete', (req, res, next) => {
	Restaurant.findByIdAndDelete(req.params.restaurant_id)
		.then(() => res.redirect(`/restaurants`))
		.catch(err => next(err))
});


router.get('/api', (req, res, next) => {
	Restaurant.find({})
		.then(allRestaurantsFromDB => res.json({ restaurants: allRestaurantsFromDB }))
		.catch(err => next(err))
});

router.get('/api/:id', (req, res, next) => {

	let restaurantId = req.params.id

	Restaurant.findById(restaurantId)
		.then(oneRestaurantFromDB => res.json({ restaurant: oneRestaurantFromDB }))
		.catch(err => next(err))
})


router.get('/:restaurant_id', (req, res, next) => {
	Restaurant.findById(req.params.restaurant_id)
		.then(restaurant => res.render('restaurants/show', { restaurant: restaurant }))
		.catch(err => next(err))
})

module.exports = router
