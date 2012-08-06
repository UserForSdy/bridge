$(document).ready(function() {
	
	$('#request-services').click(function(){
		$.ajax({
			url: '/request-services',
			type: "POST",
			data: { services : [ {cat:'meals', sub:'breakfast' } ] },
			success: function(ok) { window.location.href = '/request-provider' },
			error: function(jqXHR){ console.log('error', jqXHR.responseText+' :: '+jqXHR.statusText); }
		});
	});

	// Buttons for testing only. Safe to remove if you'd like.
		$('#btn-timeout').click(function(){ timeoutModal.modal('show'); });
		$('#btn-reservation-confirm').click(function(){ reservationConfirmModal.modal('show'); });
		$('#btn-reservation-success').click(function(){ reservationSuccessModal.modal('show'); });
		$('#btn-service-selection').click(function(){ serviceSelectionModal.modal('show'); });

		var timeoutModal = $('.modal-timeout');
		timeoutModal.modal({ show : false, keyboard : true, backdrop : true });

		var reservationConfirmModal = $('.modal-reservation-confirm');
		reservationConfirmModal.modal({ show : false, keyboard : true, backdrop : true });

		var reservationSuccessModal = $('.modal-reservation-success');
		reservationSuccessModal.modal({ show : false, keyboard : true, backdrop : true });

		var serviceSelectionModal = $('.modal-service-selection');
		serviceSelectionModal.modal({ show : false, keyboard : true, backdrop : true });

});