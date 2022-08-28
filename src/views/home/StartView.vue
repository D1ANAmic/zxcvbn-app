<template>
  <CardBackground>
    <template #start>
      <div class=" w-full h-full flex flex-col justify-center items-center p-20">
        <div class="flex">
          <img src="../../assets/images/hero3.svg" class="basis-1 min-w-[30%] max-w-[30%]">
          <h1 class="m-auto text-5xl font-extrabold">Password Strength with Zxcvbn for Dummies</h1>
        </div>
        <Paragraph :paragraph="'Have you always wanted to know what determines a strong password? Or are you simply fed up with overly complex password policies? Then your\'re at the right place. This interactive app will provide you with the tools to compose strong passwords. '" :class="'text-center'"></Paragraph>
        <div>
        <router-link to="/password-policies"><Button :text="'Start App'" :handle-click="increment"/></router-link>
        </div>
      </div>
    </template>

  </CardBackground>
</template>

<script>

import CardBackground from '@/components/cards/CardBackground';
import { mapState } from 'vuex';
import Button from '@/components/button/Button';
import Paragraph from '@/components/text/Paragraph';

export default {
	components: {
		Paragraph,
		Button,
		CardBackground

	},
	props: {
	},
	data() {
		return {
			catImage: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/VAN_CAT.png'
		};
	},
	methods: {
		increment() {
			this.$store.commit('SET_CURRENT_PAGE', 1);
		},
		resetPageNumber() {
			this.$store.commit('SET_CURRENT_PAGE', 0);
		}
	},
	computed: {
		...mapState([
			'modalOpen'
		])


	},
	mounted() {
		this.resetPageNumber();
	}
};
</script>

