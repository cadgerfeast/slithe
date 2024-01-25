<script lang="ts" setup>
  // Helpers
  import { ref } from 'vue';
	import { SlButton, SlForm, SlFormControl, SlInputText } from '@slithe/vue';
	import { emailValidation } from 'slithe';

	const email = ref('johh.doe@slithe.dev');
	const confirmEmail = ref('johh.doe@slithe.dev');
	const password = ref('');
	const confirmPassword = ref('');

	function isSameEmail () {
		if (email.value === confirmEmail.value) {
			return { type: 'success', message: 'Emails are matching.' };
		}
		return { type: 'failure', message: 'Email mismatch...' };
	}
	function isSamePassword () {
		if (password.value === confirmPassword.value) {
			return { type: 'success', message: 'Passwords are matching.' };
		}
		return { type: 'failure', message: 'Password mismatch...' };
	}
</script>

<template>
  <div class="playground-form">
		<SlForm>
			<SlFormControl label="Email" autocomplete="email" :validation="emailValidation" required>
				<SlInputText v-model:value="email" placeholder="Enter your Email..."/>
			</SlFormControl>
			<SlFormControl label="Confirm Email" autocomplete="email" :validation="isSameEmail" required>
				<SlInputText v-model:value="confirmEmail" placeholder="Confirm your Email..."/>
			</SlFormControl>
			<SlFormControl label="Password" autocomplete="new-password" required>
				<SlInputText v-model:value="password" type="password" placeholder="Enter your Password..."/>
			</SlFormControl>
			<SlFormControl label="Confirm Password" autocomplete="new-password" :validation="isSamePassword" required>
				<SlInputText v-model:value="confirmPassword" type="password" placeholder="Confirm your Password..."/>
			</SlFormControl>
			<SlButton type="submit">Submit</SlButton>
		</SlForm>
  </div>
</template>

<style lang="scss" scoped>
  div.playground-card {
    display: flex;
    flex-direction: row;
    > div.content {
      width: 60%;
      > sl-card {
        width: 100%;
      }
    }
    > sl-form {
      width: 40%;
      padding-left: 2em;
      > sl-input-checkbox {
        display: flex;
      }
    }
  }
</style>
