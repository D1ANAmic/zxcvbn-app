<template>
  <PageCard :header="'How long does it take to crack a password?'">
    <template>
      <main class="tex2jax_process">
        <Paragraph
          :paragraph="'Now that we know how many guesses an attacker needs to crack the password, we can derive the time to crack $t$.'"
        />
        <Paragraph
          :paragraph="'Modern GPUs can execute approximately $10$ billion (<a href=\'https://en.wikipedia.org/wiki/Long_and_short_scales\' target=\'_blank\' class=\'underline\'>short scale</a>) guesses per second. If we take that into consideration, we can easily predict the time to guess depending on a given entropy.'"
        />
        <Paragraph
          :paragraph="'Based on the current average cost to rent a GPU that achieves $10$ billion guesses per second ($30$ ct / h), we can then also predict the average overall cost $c$ depending on the entropy and the number of utilized GPUs.'"
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
            <Paragraph
              :paragraph="
                '<span class=\'text-xl sm:text-2xl inline-block mb-2\'>' +
                getTimeToCrackFormula +
                '</span> <span class=\'text-base sm:text-xl inline-block\'>' +
                getTimeToCrackResult +
                '</span>'
              "
            />
            <Paragraph
              :paragraph="
                '$c =\\text{ }' +
                calculateAverageCosts() +
                '\\small{\\text{ \\$}}$'
              "
              class="text-base sm:text-xl"
            />
          </div>
          <span class="text-xs"
            >M = 1 Million, B = 1 Billion, T = 1 Trillion, Q = 1 Quadrillion
            (according to the short scale)</span
          ><br />
          <span class="text-xs"
            >Cracking times above 13,8B years are categorized as "longer than
            the universe exists".</span
          >
        </div>
        <PowersOfTwoToPowersOfTenConverter />
        <Paragraph
          :paragraph="'With that in mind, let\'s look at the word <em>P@ssw0rd!</em>. With an entropy of $58$ bits it should take an attacker with a single GPU approximately $167$ days to crack. Sounds like a decent password, right?'"
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
import PowersOfTwoToPowersOfTenConverter from '@/components/converter/PowersOfTwoToPowersOfTenConverter';
import { mapState } from 'vuex';
import { initializeMathJaxQueue } from '@/utils/initializeMathJaxQueue';

const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_HOUR = SECONDS_PER_MINUTE * SECONDS_PER_MINUTE;
const SECONDS_PER_DAY = SECONDS_PER_HOUR * 24;
const SECONDS_PER_YEAR = SECONDS_PER_DAY * 365;
const SECONDS_PER_MILLISECOND = 0.001;
const YEARS_UNIVERSE_EXISTS = 13.8 * Math.pow(10, 10);

export default {
	components: {
		PageCard,
		Paragraph,
		PowersOfTwoToPowersOfTenConverter
	},
	data() {
		return {
			passwordEntropyString:
        '$$H = log_{2}(95^9) = ' + this.calculateEntropy(95, 9) + '$$',
			passwordGuessesString: '$$g = \\frac{95^9}{2} = 2^{59-1} = 2^{58}$$',
			crackingTimeString:
        '$$t = \\frac{2^{58}}{10 \\text{B}} = 167 \\text{ d}$$',
			averageCostPerGPUPerHour: 0.3
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
        '} \\cdot 10\\text{B}} = $'
			);
		},
		getTimeToCrackResult() {
			return '$\\text{ }' + this.getTimeToCrackFormatted() + '$';
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
			return this.calculateGuessesNeeded() / this.getTotalGuessesPerSecond();
		},
		getTimeToCrackFormatted() {
			const time = this.getTimeToCrack();

			if (time > SECONDS_PER_YEAR) {
				const years = time / SECONDS_PER_YEAR;
				if (years > YEARS_UNIVERSE_EXISTS) {
					return '\\text{longer than the universe exists}';
				}

				return this.displayAsNumeral(years) + '\\text{ y }';
			}
			if (time > SECONDS_PER_DAY) {
				return Math.round(time / SECONDS_PER_DAY) + '\\text{ d }';
			}
			if (time > SECONDS_PER_HOUR) {
				return Math.round(time / SECONDS_PER_HOUR) + ' \\text{ h }';
			}
			if (time > SECONDS_PER_MINUTE) {
				return Math.round(time / SECONDS_PER_MINUTE) + ' \\text{ min }';
			}
			if (time < SECONDS_PER_MILLISECOND) {
				return ' \\text{< 1 ms}';
			}
			if (time < 1) {
				return Math.round(time / SECONDS_PER_MILLISECOND) + ' \\text{ ms }';
			}

			return Math.round(time) + '\\text{ s }';
		},
		displayAsNumeral(number) {
			if (number < 1e6) {
				return Math.round(number * 100) / 100;
			}
			if (number < 1e9) {
				return Math.round((number / 1e6) * 100) / 100 + '\\text{M}';
			}
			if (number < 1e12) {
				return Math.round((number / 1e9) * 100) / 100 + '\\text{B}';
			}
			if (number < 1e15) {
				return Math.round((number / 1e12) * 100) / 100 + '\\text{T}';
			}
			if (number < 1e18) {
				return (Math.round(number / 1e15) * 100) / 100 + '\\text{Q}';
			}

			return '> 1\\text{ quadrillion}';
		},
		displayAsPowerOfTen(number) {
			if (number < 1000000) {
				return Math.round(number * 100) / 100;
			}
			const pot = Math.floor(Math.log10(number));
			console.log(number);
			console.log(pot);
			const result = `10^{${pot}}`;

			return result;
		},
		calculateEntropy(range, length) {
			return Math.round(Math.log2(Math.pow(range, length)) * 100) / 100;
		},
		calculateAverageCosts() {
			let hours = Math.round(this.getTimeToCrack() / SECONDS_PER_HOUR);
			if (hours < 1) {
				hours = 1;
			}
			console.log(hours);

			return this.displayAsNumeral(
				hours * this.averageCostPerGPUPerHour * this.numberOfGPUs
			);
		}
	},
	mounted() {
		this.initializeMathJaxQueue(this);
	}
};
</script>
