module.exports = function(sequelize, DataTypes) {
	var Order = sequelize.define('Order', {
		burgerName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1],
			},
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		},
		customerName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1],
			},
		}
	});
	return Order;
};
