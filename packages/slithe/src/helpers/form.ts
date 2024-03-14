import { Primitive } from './types';

export type ValidationLevel = 'success'|'failure';

export type Validation = {
	type: ValidationLevel;
	message?: string;
};

export type ValidationHandler = (value: Primitive) => Validation|void;

export const noValidation: ValidationHandler = () => { return; };

export const emailValidation: ValidationHandler = (value: string) => {
	const isValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
	if (isValid) {
		return { type: 'success', message: 'Email is valid.' };
	}
	return {
		type: 'failure',
		message: 'Invalid email format.'
	};
}

// TODO address shipping
// TODO address billing
// TODO cc (credit card)
// TODO tel
export type TextAutocomplete =
	'off'|
	'name'|
	'email'|
	'username'|
	'new-password'|
	'current-password'|
	'one-time-code'|
	'organization-title'|
	'organization'|
	'cc-name'|
	'transaction-currency'|
	'transaction-amount'|
	'language'|
	'bday'|
	'sex'|
	'url'|
	'photo'|
	'webauthn';

export type NumberAutocomplete = 'off'|'bday-day'|'bday-month'|'bday-year';
