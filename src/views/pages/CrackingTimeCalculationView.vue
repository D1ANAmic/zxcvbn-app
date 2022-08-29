<template>
  <PageCard :header="'How long does it take to crack a password?'">
    <template>
      <main class="tex2jax_process">
        <Paragraph
          :paragraph="'Now that we know how many guesses an attacker needs to crack the password, we can derive the the time it would take.'"
        />
        <Paragraph
          :paragraph="'Modern GPUs can execute approximately $10$ Billion (<a href=\'https://en.wikipedia.org/wiki/Long_and_short_scales\' target=\'_blank\' class=\'underline\'>short scale</a>) guesses per second. If we take that into consideration we can easily predict the time to guess depending on a given entropy.'"
        />
        <div class="rounded bg-font-light p-10">
          <div class="mb-8">
            <label
              for="passwordEntropySlider"
              class="mb-2 block text-highlight2"
              >Password entropy: {{ this.passwordEntropy }}</label
            >
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
            <label for="numberOfGPUsSlider" class="mb-2 block text-highlight1"
              >Number of GPUs: {{ this.numberOfGPUs }}</label
            >
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
            <Paragraph :paragraph="getTimeToCrackFormula" class="text-3xl" />
          </div>
        </div>
        <Paragraph
          :paragraph="'With that in mind, let\'s look at the word <em>P@ssw0rd!</em>. With an entropy of $59$ bits it should take an attacker with a single GPU approximately $167$ days to crack. Sounds like a decent password, right?'"
        />
        <Paragraph :paragraph="this.passwordEntropyString" />
        <Paragraph :paragraph="this.passwordGuessesString" />
        <Paragraph :paragraph="this.crackingTimeString" />
        <Paragraph
          :paragraph="'Unfortunately not. This very password can be located at rank $96$ on the password list <em><a href=\'https://github.com/drtychai/wordlists/blob/master/fasttrack.txt\' target=\'_blank\' class=\'underline\'>fasttrack.txt</a></em>. So instead of almost $300$ Quadrillion guesses it wouldn\'t even take $100$ guesses for an attacker to figure out the password.'"
        />
        <Paragraph
          :paragraph="'And here is the problem. Attackers have perfected their cracking process over the time. Every leaked password list provides information about human behaviour in regards to password composition. This knowledge can be transformed into efficient cracking patterns.'"
        />
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
			passwordEntropyString:
        '$$H = log_{2}(95^9) = ' + this.calculateEntropy(95, 9) + '$$',
			passwordGuessesString: '$$g = \\frac{95^9}{2} = 2^{59-1} = 2^{58}$$',
			crackingTimeString:
        '$$t = \\frac{2^{58}}{10 \\text{B}} = 167 \\text{ d}$$'
		};
	},
	computed: {
		...mapState(['passwordEntropy', 'numberOfGPUs']),
		getTimeToCrackFormula() {
			return (
				'$t = \\frac{' +
        this.getPowerOfTwoFormula() +
        '}{\\class{text-highlight1}{' +
        this.numberOfGPUs +
        '} \\cdot 10\\text{B}} = ' +
        this.getTimeToCrack() +
        '$'
			);
		}
	},
	methods: {
		initializeMathJaxQueue,
		getTotalGuessesPerSecond() {
			return this.numberOfGPUs * 1e10;
		},
		calculateGuessesNeeded() {
			return Math.pow(2, this.passwordEntropy - 1);
		},
		getPowerOfTwoFormula() {
			return '2^{\\class{text-highlight2}{' + this.passwordEntropy + '} -1}';
		},
		handlePasswordEntropySlider() {
			this.$store.commit(
				'SET_PASSWORD_ENTROPY',
				this.$refs.passwordEntropySlider.value
			);
			this.initializeMathJaxQueue(this);
		},
		handeNumberOfGPUsSlider() {
			this.$store.commit(
				'SET_NUMBER_OF_GPUS',
				this.$refs.numberOfGPUsSlider.value
			);
			this.initializeMathJaxQueue(this);
		},
		getTimeToCrack() {
			const time =
        this.calculateGuessesNeeded() / this.getTotalGuessesPerSecond();
			const secondsPerMinute = 60;
			const secondsPerHour = secondsPerMinute * secondsPerMinute;
			const secondsPerDay = secondsPerHour * 24;
			const secondsPerYear = secondsPerDay * 365;
			const secondsPerMillisecond = 0.001;

			let res;

			if (time > secondsPerYear) {
				res = this.displayAsPowerOfTen(time / secondsPerYear) + '\\text{ y }';
			}
			else if (time > secondsPerDay) {
				res = Math.round(time / secondsPerDay) + '\\text{ d }';
			}
			else if (time > secondsPerHour) {
				res = Math.round(time / secondsPerHour) + ' \\text{ h }';
			}
			else if (time > secondsPerMinute) {
				res = Math.round(time / secondsPerMinute) + ' \\text{ min }';
			}
			else if (time < secondsPerMillisecond) {
				res = ' \\text{< 1 ms}';
			}
			else if (time < 1) {
				res = Math.round(time / secondsPerMillisecond) + ' \\text{ ms }';
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
			const result = `10^{${ pot }}`;

			return result;
		},
		calculateEntropy(range, length) {
			return Math.round(Math.log2(Math.pow(range, length)) * 100) / 100;
		}
	},
	mounted() {
		this.initializeMathJaxQueue(this);
	}
};
</script>
