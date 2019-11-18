var db = require('../models');

module.exports = function(app) {
	app.get('/api/orders', function(req, res) {
		db.Order.findAll({}).then(function(dbOrder) {
			res.json(dbOrder);
		});
	});

	app.post('/api/orders', function(req, res) {
		db.Order.create({
			burgerName: req.body.burgerName,
			devoured: req.body.devoured,
			customerName: req.body.customerName,
		})
			.then(function(dbOrder) {
				res.json(dbOrder);
			})
			.catch(function(err) {
				res.json(err);
			});
	});

	app.put('/api/orders', function(req, res) {
		db.Order.update(
			{
				devoured: req.body.devoured,
			},
			{
				where: {
					id: req.body.id,
				},
			}
		)
			.then(function(dbOrder) {
				res.json(dbOrder);
			})
			.catch(function(err) {
				res.json(err);
			});
	});
};
