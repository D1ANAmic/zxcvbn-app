<template>
  <PageCard :header="'Sign up please'">
    <template>
      <main>
        <Paragraph :paragraph="'Don\'t we all dread the following scenario: In order to use any kind of online service these days, it\'s inevitable to create an account first. While in theory this procedure sounds like just a short inconvenience, in reality most of the time is spent on finding a suitable password that complies with the website\'s password policy.'"/>
        <div class="mb-4 mt-5">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password-check">
            Submit your password
          </label>
          <input
              ref="input"
              class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password-check" type="text" placeholder="zxcvbn"
              v-model="value"/>
          <p class="peer-invalid:visible text-red-700 font-light">
            {{ errorMessage }}
          </p>
        </div>
        <Paragraph :paragraph="'Doesn\'t this make you want to give up? Well, you’re not alone. Most of these password policies are not only very inconvenient to follow but in addition they differ from website to website.'"/>
        <InnerCard></InnerCard>
        <Paragraph :paragraph="'But why do we even need all these stupid policies to begin with?'"></Paragraph>
      </main>
    </template>
  </PageCard>
</template>

<script>

import PageCard from '@/components/cards/PageCard';
import Paragraph from '@/components/text/Paragraph';
import InnerCard from '@/components/cards/InnerCard';
import { validatePassword } from '@/utils/validatePassword';

export default {
	components: {
		PageCard,
		Paragraph,
		InnerCard
	},
	data(){
		return {
			value: '',
			errorMessage: ''
		};
	},
	watch: {
		value() {
			this.errorMessage = this.validatePassword(this.value, this.$refs.input);
		}
	},
	methods: {
		validatePassword
	}
};
</script>
