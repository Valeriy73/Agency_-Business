(function() {
	var me = {};
	var form = document.querySelector('.form-container');
	var closeButton = null;

	function onClose(e) {
		e.preventDefault();

		me.close();
		closeButton.removeEventListener('click', onClose);
	};


	me.open = function() {
		form.classList.remove('is-hidden');

		closeButton = document.querySelector('.form__close-button');
		closeButton.addEventListener('click', onClose);
	};

	me.close = function() {
		form.classList.add('is-hidden');
	};

	me.isValid = function() {

		var requiredFields = document.querySelectorAll('[data-valid="required"]');
		var emailValue = document.querySelector('[data-email]').value;
		var numberNumber = document.querySelector('[data-number]').value;

		if (!me.isAllCompleted(requiredFields)) {
			console.log('Заполните все необходимые поля');
			return false;
		} else if (!ITVDN.validation.isEmail(emailValue)){
			console.log('Не верный email');
			return false;
		} else if (!ITVDN.validation.isNumber(numberNumber)){
			console.log('Не верный формат телефона');
			return false;
		};

		return true;
	};

	me.isAllCompleted = function(data) {
		var result = true;

		for(var i = 0; i < data.length; i++){
			if (!ITVDN.validation.isNotEmpty(data[i].value)) {
				result = false;
				break;
			}
		}

		return result;
	};

	ITVDN.form = me;
}());