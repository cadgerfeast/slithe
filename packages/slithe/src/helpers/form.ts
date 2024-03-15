import { createStore } from '@stencil/store';
import { Primitive } from './types';

export type ValidationLevel = 'success'|'failure';

export type Validation = {
	type: ValidationLevel;
	message?: string;
};

export type ValidationHandler = (value: Primitive) => Promise<Validation|void>;

type FormState = {
	event: 'submit'|'input';
	validations: Map<HTMLSlFormControlElement, { shouldDisplay: boolean; status: Validation|null; }>;
};

export const formStore = createStore({
  forms: new Map<HTMLSlFormElement, FormState>()
});

export function addForm (form: HTMLSlFormElement) {
	const newForms = new Map(formStore.get('forms'));
	newForms.set(form, {
		event: form.validation,
		validations: new Map()
	});
	formStore.set('forms', newForms);
}

export function removeForm (form: HTMLSlFormElement) {
	const newForms = new Map(formStore.get('forms'));
	newForms.delete(form);
	formStore.set('forms', newForms);
}

export function updateFormControlStatus (form: HTMLSlFormElement, formControl: HTMLSlFormControlElement, validation: Validation|null, shouldDisplay: boolean) {
	const newForms = new Map(formStore.get('forms'));
	const oldForm = newForms.get(form);
	const newValidations = new Map(oldForm.validations);
	newValidations.set(formControl, {
		shouldDisplay,
		status: validation
	});
	newForms.set(form, {
		event: oldForm.event,
		validations: newValidations
	});
	formStore.set('forms', newForms);
}

export const noValidation: ValidationHandler = async () => { return; };

export const emailValidation: ValidationHandler = async (value: string) => {
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
