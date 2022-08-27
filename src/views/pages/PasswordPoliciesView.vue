<template>
  <PageCard :header="'Sign up please'">
    <template>
      <main>
        <Paragraph
          :paragraph="'Don\'t we all dread the following scenario: In order to use any kind of online service these days, it\'s inevitable to create an account first. While in theory this procedure sounds like just a short inconvenience, in reality most of the time is spent on finding a suitable password that complies with the website\'s password policy.'"
        />
        <div class="mb-4 mt-5">
          <div
            v-click-outside="setInputUnFocused"
            class="relative inline-block my-4 border-b-[1px] border-l-[1px] border-font-dark focus-within:border-secondary"
          >
            <label
              class="absolute top-0 left-2 duration-300 origin-left"
              :class="{
                '-translate-y-6 scale-75 transform text-secondary': inputFocused,
              }"
              for="password-check"
            >
              Submit your password
            </label>
            <input
              @focus="setInputFocused"
              @keyup.enter="handlePasswordValidation"
              ref="input"
              class="block w-full p-2 appearance-none bg-transparent focus:outline-none"
              id="password-check"
              type="text"
              placeholder=""
              v-model="value"
            />
          </div>
          <Button :text="'Submit'" :handle-click="handlePasswordValidation">
          </Button>
          <p class="font-light text-red-700 peer-invalid:visible">
            {{ errorMessage }}&nbsp;
          </p>
        </div>
        <Paragraph
          :paragraph="'Doesn\'t this make you want to give up? Well, you’re not alone. Most of these password policies are not only very inconvenient to follow but in addition they differ from website to website.'"
        />
        <PasswordPoliciesCarousel/>
        <Paragraph
          :paragraph="'But why do we even need all these stupid policies to begin with?'"
        ></Paragraph>
      </main>
    </template>
  </PageCard>
</template>

<script>
import PageCard from '@/components/cards/PageCard';
import Paragraph from '@/components/text/Paragraph';
import Button from '@/components/button/Button';
import { validatePassword } from '@/utils/validatePassword';
import PasswordPoliciesCarousel from '@/components/carousel/PasswordPoliciesCarousel';

export default {
	components: {
		PageCard,
		Paragraph,
		Button,
		PasswordPoliciesCarousel
	},
	data() {
		return {
			value: '',
			errorMessage: '',
			inputFocused: false
		};
	},
	watch: {
		value() {
			/*	this.errorMessage = this.validatePassword(this.value, this.$refs.input);*/
		}
	},
	methods: {
		validatePassword,
		handlePasswordValidation() {
			this.errorMessage = this.validatePassword(this.value, this.$refs.input);
		},
		setInputFocused() {
			this.inputFocused = true;
		},
		setInputUnFocused() {
			if (this.value.length > 0) {
				return;
			}
			this.inputFocused = false;
		}
	}
};
</script>
