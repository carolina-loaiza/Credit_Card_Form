(function() {

	// d = dom
	var d = {
		formBlock : document.querySelector('#credit-card-form'),
		formData : document.querySelector('#personal'),
		formCredit : document.querySelector('#credit-card'),
		btnNext : document.querySelector('#personal-data'),
		btnSubmit : document.querySelector('#formSubmit')
	}

	var appForm = (function() {

		function checkIsEmpty(form) {
			form = document.querySelectorAll(form +' .form-control');
			var cont = 0;

			for (i = 0; i < form.length; i++) { 
			    if (form[i].value == '') {
			    	messgeError(form[i]);
			    	cont++;
			    }
			}
			if (cont == 0) {
				return checkIsValid(form);
			}
		}

		function checkIsValid(form) {
			var status = window.validate.inputsFrom(form)

			if (status === true) {
				return true;
			}else {
				for (i = 0; i < status.length; i++) {
					messgeError(status[i])
				}
			}
		}

		function nextForm(isValid) {
			if (isValid) {
				d.formData.classList.add('hidden');
				d.formCredit.classList.remove('hidden');
			}
		}

		function submitForm(isValid) {
			if (isValid) {
				d.formBlock.submit();
			}
		}

		function messgeError(element) {
			element.parentNode.children[0].classList.add('error');
		}

		return {
			checkIsEmpty : checkIsEmpty,
			nextForm : nextForm,
			submitForm : submitForm
		}

	})();

	d.btnNext.addEventListener('click', function(event){
		event.preventDefault();
		var isValid = appForm.checkIsEmpty('#personal');
		appForm.nextForm(isValid);
	});

	d.btnSubmit.addEventListener('click', function(event){
		event.preventDefault();
		var isValid = appForm.checkIsEmpty('#credit-card');
		appForm.submitForm(isValid);
	});
	
})();

