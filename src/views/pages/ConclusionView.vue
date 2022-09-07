<template>
  <PageCard :header="'Is Zxcvbn the solution to all our problems?'">
    <template>
      <main>
        <Paragraph
          :paragraph="'Zxcvbn may not be the one and only solution. But it efficiently shows one thing: The common ' +
           'approach to password composition does not provide us with more secure passwords. On the contrary. ' +
            'Policies, that prompt us to use a certain set of characters and length only result in three things:'"
        />
        <ul class="ml-10 list-disc italic">
          <li>
            We're forced to integrate illogical characters in our password which
            makes it harder for the human brain to remember.
          </li>
          <li>
            So we come up with l33tspeak replacements, use keyboard patterns or
            sequences because we still want to be able to memorize the password.
          </li>
          <li>
            This results in password compositions, which are now equally
            guessable by attackers.
          </li>
        </ul>
        <Paragraph
          :paragraph="'Easily memorable passwords which consist of a combination of random words on the other hand ' +
           'are way more difficult to guess. At the same time our brains have the ability to creatively come up with ' +
            'a mnemonic aid. Take this famous comic for example:'"
        />

        <figure>
          <img src="../../assets/images/correcthorsebatterystaple.png" />
          <figcaption class="text-sm">
            Source: <a href="https://xkcd.com/936/">https://xkcd.com/936/</a>
          </figcaption>
        </figure>

        <Paragraph
          :paragraph="'Years of counterproductive password policies have planted the wrong idea of what an actual ' +
           'strong password looks like. Zxcvbn can help to show the actual strength with its estimation algorithms ' +
            'and could therefore replace common password validation on many websites.'"
        />
        <Paragraph
          :paragraph="'Now, with everything you\'ve learned so far, submit your password to the Zxcvbn algorithm ' +
           'once again and watch the horse scale for reference.'"
        />
        <div class="mb-20 mt-5">
          <div
            v-click-outside="setInputUnFocused"
            class="relative my-4 inline-block border-b-[1px] border-l-[1px] border-font-dark
            focus-within:border-secondary"
          >
            <label
              class="absolute top-0 left-2 origin-left duration-300"
              :class="{
                '-translate-y-6 scale-75 transform text-secondary':
                  inputFocused,
              }"
              for="password-check"
            >
              Submit your password
            </label>
            <input
              @focus="setInputFocused"
              @keyup.enter="handleZxcvbnEstimation"
              ref="input"
              class="block w-full appearance-none bg-transparent p-2 focus:outline-none"
              id="password-check"
              type="text"
              placeholder=""
              v-model="value"
            />
          </div>
          <Button :text="'Submit'" :handle-click="handleZxcvbnEstimation" />
          <div class="relative mb-10">
            <img
              src="../../assets/images/horseScale/horse_red.png"
              class="absolute left-0 inline max-w-[50px] transition-opacity duration-500 ease-in-out"
              :class="displayHorses.red ? '' : 'opacity-0'"
            />
            <img
              src="../../assets/images/horseScale/horse_red_grey.png"
              class="left-0transition-opacity absolute inline max-w-[50px] duration-500 ease-in-out"
              :class="displayHorses.red ? 'opacity-0' : ''"
            />
            <img
              src="../../assets/images/horseScale/horse_orange.png"
              class="absolute left-[50px] inline max-w-[50px] transition-opacity duration-500 ease-in-out"
              :class="displayHorses.orange ? '' : 'opacity-0'"
            />
            <img
              src="../../assets/images/horseScale/horse_orange_grey.png"
              class="absolute left-[50px] inline max-w-[50px] transition-opacity duration-500 ease-in-out"
              :class="displayHorses.orange ? 'opacity-0' : ''"
            />
            <img
              src="../../assets/images/horseScale/horse_yellow.png"
              class="absolute left-[100px] inline max-w-[50px] transition-opacity duration-500 ease-in-out"
              :class="displayHorses.yellow ? '' : 'opacity-0'"
            />
            <img
              src="../../assets/images/horseScale/horse_yellow_grey.png"
              class="absolute left-[100px] inline max-w-[50px] transition-opacity duration-500 ease-in-out"
              :class="displayHorses.yellow ? 'opacity-0' : ''"
            />
            <img
              src="../../assets/images/horseScale/horse_green.png"
              class="absolute left-[150px] inline max-w-[50px] transition-opacity duration-500 ease-in-out"
              :class="displayHorses.green ? '' : 'opacity-0'"
            />
            <img
              src="../../assets/images/horseScale/horse_green_grey.png"
              class="absolute left-[150px] inline max-w-[50px] transition-opacity duration-500 ease-in-out"
              :class="displayHorses.green ? 'opacity-0' : ''"
            />
            <img
              src="../../assets/images/horseScale/horse_darkgreen.png"
              class="absolute left-[200px] inline max-w-[50px] transition-opacity duration-500 ease-in-out"
              :class="displayHorses.darkgreen ? '' : 'opacity-0'"
            />
            <img
              src="../../assets/images/horseScale/horse_darkgreen_grey.png"
              class="absolute left-[200px] inline max-w-[50px] transition-opacity duration-500 ease-in-out"
              :class="displayHorses.darkgreen ? 'opacity-0' : ''"
            />
          </div>
          <div class="h-10">
            <div
              v-if="zxcvbnObject"
              class="font-[500] text-red-700 peer-invalid:visible"
            >
              <span>{{
                zxcvbnObject.feedback.warning
                  ? zxcvbnObject.feedback.warning + "."
                  : ""
              }}</span>
              <span
                v-for="(value, _, index) in zxcvbnObject.feedback.suggestions"
                :key="index"
                class="block"
              >
                {{ value }}
              </span>
            </div>
          </div>
        </div>
      </main>
    </template>
  </PageCard>
</template>

<script>
const zxcvbn = require('zxcvbn');
import Paragraph from '@/components/text/Paragraph';
import PageCard from '@/components/cards/PageCard';
import Button from '@/components/button/Button';
import { scrollToTop } from '@/utils/scrollTopTop';
import { mapState } from 'vuex';

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
			displayHorses: {
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
			Object.keys(this.displayHorses).forEach(
				(horse) => (this.displayHorses[horse] = false)
			);

			if (this.score >= 0) {
				this.displayHorses.red = true;
			}
			if (this.score >= 1) {
				this.displayHorses.orange = true;
			}
			if (this.score >= 2) {
				this.displayHorses.yellow = true;
			}
			if (this.score >= 3) {
				this.displayHorses.green = true;
			}
			if (this.score >= 4) {
				this.displayHorses.darkgreen = true;
			}

			return;
		}
	},
	created() {
		scrollToTop();
	},
	beforeDestroy() {
		this.$store.commit('INIT_ZXCVBN_OBJECT', null);
	}
};
</script>
