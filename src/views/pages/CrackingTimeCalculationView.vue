<template>
  <PageCard :header="'Time to crack a password'">
    <template>
      <main class="tex2jax_process">
        <Paragraph
            paragraph="Now that we know how many guesses an attacker needs to crack the password, we can derive the the time it would take."
        />
        <Paragraph :paragraph="'Modern GPUs can execute approximately 10 Billion guesses per second. If we take that that into consideration we can easily predict the time to guess depending on a given entropy'"></Paragraph>
        <div class="rounded bg-font-light p-10">
            <div class="mb-8">
              <label for="passwordEntropySlider" class="mb-2 block text-highlight2">Password entropy: {{this.passwordEntropy}}</label>
              <input
                  ref="passwordEntropySlider"
                  type="range"
                  min="1"
                  max="200"
                  class="slider w-full"
                  id="passwordEntropySlider"
                  @change="handlePasswordEntropySlider()"
                  value="1"
              />
            </div>
            <div class="mb-8">
              <label for="numberOfGPUsSlider" class="mb-2 block text-highlight1">Number of GPUs: {{this.numberOfGPUs}}</label>
              <input
                  ref="numberOfGPUsSlider"
                  type="range"
                  min="1"
                  max="100"
                  value="1"
                  class="slider w-full"
                  id="numberOfGPUsSlider"
                  @change="handeNumberOfGPUsSlider()"
              />
            </div>

            <div class="mb-3 mt-20">
              <Paragraph :paragraph="getTimeToCrackFormula" class="text-3xl"/>
            </div>
        </div>
          </main>
    </template>
  </PageCard>
</template>

<script>
import PageCard from '@/components/cards/PageCard';
import Paragraph from '@/components/text/Paragraph';
import { mapState } from 'vuex';
import { initializeMathJaxQueue } from '@/utils/initializeMathJaxQueue';

export default {
	components: {
		PageCard,
		Paragraph
	},
	data() {
		return {
			/*passwordEntropySlider: '',*/
			/*numberOfGPUsSlider: ''*/
		};
	},
	computed: {
		...mapState(['passwordEntropy', 'numberOfGPUs']),
		getTimeToCrackFormula() {

			return (
				'$t = \\frac{' + this.getPowerOfTwo() + '}{\\class{text-highlight1}{' + this.numberOfGPUs + '} \\times 10B} = ' + this.getTimeToCrack() + '$'
			);
		}
	},
	methods: {
		initializeMathJaxQueue,
		getTotalGuessesPerSecond() {
			return this.numberOfGPUs * 1e10;
		},
		calculateGuessesNeeded() {
			return Math.pow(2, (this.passwordEntropy - 1));
		},
		getPowerOfTwo() {
			const x = Math.log2(this.calculateGuessesNeeded());

			return '2^{\\class{text-highlight2}{' + this.passwordEntropy + '} -1}';
		},
		handlePasswordEntropySlider() {
			this.$store.commit('SET_PASSWORD_ENTROPY', this.$refs.passwordEntropySlider.value);
			this.initializeMathJaxQueue(this);
		},
		handeNumberOfGPUsSlider() {
			this.$store.commit('SET_NUMBER_OF_GPUS', this.$refs.numberOfGPUsSlider.value);
			this.initializeMathJaxQueue(this);
		},
		getTimeToCrack(){
			const time = this.calculateGuessesNeeded() / this.getTotalGuessesPerSecond();
			const secondsPerYear = 31536000;
			const secondsPerDay = 86400;
			const secondsPerHour = 3600;
			const secondsPerMinute = 60;
			const secondsPerMillisecond = 0.001;
			const secondsPerMicrosecond = 0.000001;

			let res;

			if (time > secondsPerYear) {
				res = this.displayAsPowerOfTen(time / secondsPerYear) + '\\text{ y }';
			}
			else if (time > secondsPerDay) {
				res = Math.round((time / secondsPerDay)) + '\\text{ d }';
			}
			else if (time > secondsPerHour) {
				res = Math.round((time / secondsPerHour)) + ' \\text{ h }';
			}
			else if (time > secondsPerMinute) {
				res = Math.round((time / secondsPerMinute)) + ' \\text{ min }';
			}
			else if (time < secondsPerMillisecond) {
				res = ' \\text{< 1 ms}';
			}
			else if (time < 1) {
				res = Math.round((time / secondsPerMillisecond)) + ' \\text{ ms }';
			}
			else {

				res = Math.round(time) + '\\text{ s }';
			}

			return res;
		},
		displayAsPowerOfTen(number) {
			if (number <= 100000) {
				return Math.round(number);
			}
			const pot = Math.floor(Math.log10(number));
			const quotient = Math.pow(10, pot);
			const factor = number / quotient;

			/*const result = `${Math.round(factor * 100) / 100 } * 10^{${pot}}`;*/
			const result = `10^{${pot}}`;

			return result;

		}

	},
	mounted() {
		this.initializeMathJaxQueue(this);
	}
};
</script>
