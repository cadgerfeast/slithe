<script setup>
	import { notify } from '../../api';
	import Preview from '../../components/preview.vue';
</script>

# Form

A `sl-form` component encapsulate interactive elements that allows the user to submit data.

It usually contains `sl-form-control` elements that helps with description and validation.

<Preview>
  <sl-form>
		<sl-form-control label="First Name" caption="Your first name will be publicly visible" required>
			<sl-input-text placeholder="Enter your First Name..."/>
		</sl-form-control>
		<sl-form-control label="Middle Name">
			<sl-input-text placeholder="Enter your Middle Name..."/>
		</sl-form-control>
		<sl-form-control label="Last Name" required>
			<sl-input-text placeholder="Enter your Last Name..."/>
		</sl-form-control>
		<sl-form-control label="Age">
			<sl-input-number placeholder="Enter your age..."/>
		</sl-form-control>
		<sl-form-control required>
			<sl-input-checkbox label="I accept to receive emails that will directly go in spam folder."/>
		</sl-form-control>
	</sl-form>
</Preview>

``` html
<sl-form>
	<sl-form-control label="First Name" caption="Your first name will be publicly visible" required>
		<sl-input-text placeholder="Enter your First Name..."/>
	</sl-form-control>
	<sl-form-control label="Middle Name">
		<sl-input-text placeholder="Enter your Middle Name..."/>
	</sl-form-control>
	<sl-form-control label="Last Name" required>
		<sl-input-text placeholder="Enter your Last Name..."/>
	</sl-form-control>
	<sl-form-control label="Age">
		<sl-input-number placeholder="Enter your age..."/>
	</sl-form-control>
	<sl-form-control required>
		<sl-input-checkbox label="I accept to receive emails that will directly go in spam folder."/>
	</sl-form-control>
</sl-form>
```

## Events

### Submit

Triggered when the user submits the form.

<Preview>
	<sl-form @submit="notify('submit')">
		<sl-button type="submit">Submit</sl-button>
	</sl-form>
</Preview>

``` html
<sl-form @submit="notify('submit')">
	<sl-button type="submit">Submit</sl-button>
</sl-form>
```
