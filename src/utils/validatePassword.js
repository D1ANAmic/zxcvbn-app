export const validatePassword = (password = '', ref) => {

	if ( password !== '') {
		if (password.length < 6) {
			ref.focus();

			return 'Error: Password must contain at least six characters!';
		}
		let re = /[0-9]/;
		if (! re.test(password)) {
			ref.focus();

			return 'Error: password must contain at least one number (0-9)!';
		}
		re = /[a-z]/;
		if (! re.test(password)) {
			ref.focus();

			return 'Error: password must contain at least one lowercase letter (a-z)!';
		}
		re = /[A-Z]/;
		if (! re.test(password)) {
			ref.focus();

			return 'Error: password must contain at least one uppercase letter (A-Z)!';
		}
	}
	else {
		ref.focus();

		return 'Error: Please check that you\'ve entered and confirmed your password!';
	}
};
