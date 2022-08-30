<template>
  <CardBackground>
    <template #start>
      <div
        class="flex h-full w-full flex-col items-center justify-center overflow-hidden p-5 text-xl"
      >
        <div class="flex">
          <img
            src="../../assets/images/hero3.svg"
            class="min-w-[35%] max-w-[35%] basis-1 hidden md:block"
          />
          <h1 class="m-auto text-center text-third md:text-left md:ml-[-20px] font-prozaLibre text-4xl md:text-5xl lg:text-6xl font-extrabold">
            Password Strength with Zxcvbn for Dummies
          </h1>
        </div>
        <img
            src="../../assets/images/hero3.svg"
            class="min-w-[35%] max-w-[35%] basis-1 hidden sm:block md:hidden"
        />
        <Paragraph
          :paragraph="'Have you always wanted to know what determines a strong password? Or are you simply fed up with overly complex password policies? Then your\'re at the right place. This interactive app will provide you with the tools to compose strong passwords. '"
          :class="'text-center sm:text-xl '"
        ></Paragraph>
        <div>
          <router-link to="/password-policies"
            ><Button :text="'Start App'" :handle-click="increment"
          /></router-link>
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
	methods: {
		increment() {
			this.$store.commit('SET_CURRENT_PAGE', 1);
		},
		resetPageNumber() {
			this.$store.commit('SET_CURRENT_PAGE', 0);
		}
	},
	computed: {
		...mapState(['modalOpen'])
	},
	mounted() {
		this.resetPageNumber();
	}
};
</script>
