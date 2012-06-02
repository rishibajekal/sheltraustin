$(document).ready(function() { 
	$('#searchBTN').click( function() {
		   $.ajax({
		   		url: '/search',
					dataType: 'json',
		     	type: "GET",
					data: {
						'address': '3801 Tower View Court',
						'bed': 'yes',
						'food': 'no',
						'medical': 'no',
						'mental-health': {
							'option1': 'yes',
							'option2': 'no'
						},
						'transportation': 'walk'
					},
					success: function(data) {
						console.log(data);
					}
		   });
		   return false;
		});
});