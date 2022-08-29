export const validatePassword = (password = '', ref) => {
	if (password !== '') {
		if (password.length < 8) {
			ref.focus();

			return 'Password must contain at least 8 characters. Please try again!';
		}
		let re = /[0-9]/;
		if (!re.test(password)) {
			ref.focus();

			return 'Password must contain at least 1 number (0-9). Please try again!';
		}
		re = /[a-z]/;
		if (!re.test(password)) {
			ref.focus();

			return 'Password must contain at least 1 lowercase letter (a-z). Please try again!';
		}
		re = /[A-Z]/;
		if (!re.test(password)) {
			ref.focus();

			return 'Password must contain at least 1 uppercase letter (A-Z)!';
		}
		re = /[!@#$%^&*_]/;
		if (!re.test(password)) {
			ref.focus();

			return 'Password must contain at least 1 special character. Good luck finding out which ones are allowed!';
		}
		re = /^[^\s]*(\s[^\s]*){3}$/;
		if (!re.test(password)) {
			ref.focus();

			return 'Password must contain exactly 3 spaces! (Dear attackers, please pretend you never read that.)';
		}
		else {
			return 'Way to go - you\'re almost there! Password must contain at least 1 hieroglyph, 1 Klingon numeral, your firstborn and an emoji. Please try again!';
		}
	}
	else {
		ref.focus();

		return 'Looks like you haven\'t entered a password at all.';
	}
};
