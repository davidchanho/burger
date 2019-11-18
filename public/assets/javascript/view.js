$(document).ready(function() {
	var $newOrderInput = $('.new-burger');

	var $newCustomerInput = $('.new-customer');

	var $orderContainer = $('.order-container');

	var $devouredContainer = $('.devoured-container');

	$(document).on('click', 'button.devoured', toggleDevoured);
	$(document).on('submit', '#order-form', insertOrder);

	var orders = [];

	getOrders();

	function initializeRows() {
		$orderContainer.empty();
		$devouredContainer.empty();
		var orderRows = [];
		var devouredRows = [];
		for (var i = 0; i < orders.length; i++) {
			if (orders[i].devoured=== false) {
				orderRows.push(createNewRow(orders[i]));
			} else if (orders[i].devoured === true) {
				devouredRows.push(createNewRow(orders[i]));
			}
		}
		$orderContainer.prepend(orderRows);
		$devouredContainer.prepend(devouredRows);
	}

	function insertOrder(event) {
		event.preventDefault();
		var order = {
			burgerName: $newOrderInput.val().trim(),
			devoured: false,
			customerName: $newCustomerInput.val().trim(),
		};

		$.post('/api/orders', order, getOrders);
		$newOrderInput.val('');
		$newCustomerInput.val('');
	}

	function getOrders() {
		$.get('/api/orders', function(data) {
			orders = data;
			initializeRows();
		});
	}

	function toggleDevoured(event) {
		event.stopPropagation();
		var order = $(this)
			.parent()
			.data('order');
		if (!order.devoured) {
			order.devoured = true;
		}

		updateOrder(order);
	}

	function updateOrder(order) {
		$.ajax({
			method: 'PUT',
			url: '/api/orders',
			data: order,
		}).then(getOrders);
	}

	function createNewRow(order) {
		var $newInputRow = $(
			[
				"<li class='list-group-item order-item'>",
				'<span> burger: ',
				order.burgerName,
				'</span><br>',
				'<span> customer: ',
				order.customerName,
				'</span><br>',
				"<button class='devoured btn btn-primary'>✓</button>",
				'</li>',
			].join('')
		);

		$newInputRow.data('order', order);

		return $newInputRow;
	}
});
