<template>
  <PageCard :header="'Is Zxcvbn the solution to all our problems?'">
    <template>
      <main>
        <Paragraph
            paragraph="Unfortunately not. But it efficiently shows one thing: The common approach to password composition does not provide us with more secure passwords. On the contrary. Policies, that prompt us to use a certain set of characters and length (Remeber? 8 characters, uppercase, digits, symbols) only result in 3 things:."/>
          <ul class="list-disc">
            <li>We're forced to integrate illogical characters in our password which makes it harder for the human brain to remember. </li>
            <li>So we come up with replacements like leetspeak, use keyboard patterns or sequences because we still want to be able to memorize the password.</li>
            <li>Unfortunately human brains function similarly. So we all come up with the same replacements, sequences and keyboard patterns, which are now equally guessable by attackers. </li>
          </ul>
            <Paragraph paragraph="Easily memorable passwords which consist of a combination of random words on the other hand are way more difficult to guess. At the same time our brains have the ability to creatively come up with a mnemonic aid. Take this famous comic for example:"/>

        <figure>
          <img src="../../assets/images/correcthorsebatterystaple.png">
          <figcaption class="text-sm">Source: <a href="https://xkcd.com/936/">https://xkcd.com/936/</a></figcaption>
        </figure>

        <Paragraph paragraph="Years of counterproductive password policies have planted a wrong idea of what an actual strong password looks like. Zxcvbn can help to show the actual strength with its estimation algorithms and could therefore replace common password validation on many websites. "/>
        <Paragraph paragraph="Try it out once again:"/>
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
                @keyup.enter="handleZxcvbnEstimation"
                ref="input"
                class="block w-full p-2 appearance-none bg-transparent focus:outline-none"
                id="password-check"
                type="text"
                placeholder=""
                v-model="value"
            />
          </div>
          <Button :text="'Submit'" :handle-click="handleZxcvbnEstimation">
          </Button>
          <div class="mb-5">
            <img src="../../assets/images/horseScale/horse_red.png" class="inline max-w-[50px] transition-opacity duration-500 ease-in-out" :class="renderHorses.red? '' : 'opacity-0'">
            <img src="../../assets/images/horseScale/horse_orange.png" class="inline max-w-[50px] transition-opacity duration-500 ease-in-out" :class="renderHorses.orange? '' : 'opacity-0'">
            <img src="../../assets/images/horseScale/horse_yellow.png" class="inline max-w-[50px] transition-opacity duration-500 ease-in-out" :class="renderHorses.yellow? '' : 'opacity-0'">
            <img src="../../assets/images/horseScale/horse_green.png" class="inline max-w-[50px] transition-opacity duration-500 ease-in-out" :class="renderHorses.green? '' : 'opacity-0'">
            <img src="../../assets/images/horseScale/horse_darkgreen.png" class="inline max-w-[50px] transition-opacity duration-500 ease-in-out" :class="renderHorses.darkgreen? '' : 'opacity-0'">


          </div>
          <p v-if="zxcvbnObject" class="font-light text-red-700 peer-invalid:visible">

          <span>{{ zxcvbnObject.feedback.warning? zxcvbnObject.feedback.warning + '.' : ''}}</span>
            <span v-for="(value, key, index) in zxcvbnObject.feedback.suggestions"
                  :key="index"
                  class="block"
                  >
          {{ value}}

        </span>
          </p>

        </div>
      </main>
    </template>
  </PageCard>
</template>

<script>
import Paragraph from '@/components/text/Paragraph';
import PageCard from '@/components/cards/PageCard';
import Button from '@/components/button/Button';
import { validatePassword } from '@/utils/validatePassword';
import { mapState } from 'vuex';
const zxcvbn = require('zxcvbn');

export default {
	components: {
		Paragraph,
		PageCard,
		Button

	},
	data() {
		return {
			value: '',
			inputFocused: false,
			horseSources: [],
			renderHorses: {
				darkgreen: false,
				green: false,
				yellow: false,
				orange: false,
				red: false
			},
			score: null
		};
	},
	computed: {
		...mapState(['zxcvbnObject'])
	},
	methods: {
		handleZxcvbnEstimation() {
			this.$store.commit('INIT_ZXCVBN_OBJECT', zxcvbn(this.value));
			this.score = this.zxcvbnObject.score;
			this.getScore();
		},
		setInputFocused() {
			this.inputFocused = true;
		},
		setInputUnFocused() {
			if (this.value.length > 0) {
				return;
			}
			this.inputFocused = false;
		},
		getScore() {
			Object.keys(this.renderHorses).forEach(horse => this.renderHorses[horse] = false);


			if (this.score >= 0) {
				this.renderHorses.red = true;
			}
			if (this.score >= 1) {
				this.renderHorses.orange = true;
			}
			if (this.score >= 2) {
				this.renderHorses.yellow = true;
			}
			if (this.score >= 3){
				this.renderHorses.green = true;
			}
			if (this.score >= 4){
				this.renderHorses.darkgreen = true;
			}

			return;
		}
	},
	beforeDestroy() {
		this.$store.commit('INIT_ZXCVBN_OBJECT', null);
	}
};
</script>
