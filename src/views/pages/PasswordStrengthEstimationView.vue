<template>
  <PageCard :header="'How password strength is estimated'">
    <template>
      <main class="tex2jax_process">
        <Paragraph
          paragraph="To evaluate a password's strength, the common approach in information theory is based on two things:"
        />
        <ul>
          <em>
            <li>password length</li>
            <li>password range</li>
          </em>
        </ul>
        <Paragraph
          paragraph="Let's use the word $password$ which has a length $L$ of $8$ within the range $N$ of $26$ the word only consists of lowercase letters from the roman alphabet. That leaves us with a pool of $26⁸$ possible passwords.
        These calculations can easily go out of human readable bounds given their exponential character. That's why the password strength is specified as entropy H with a unit of bits."
        />
        <Paragraph
          paragraph="Try it out yourself: Change the length of the password and choose from these common alphabets to see how the entropy changes."
        />
        <div class="rounded bg-font-light p-10">
          <em>
            <div class="mb-8">
              <label for="length" class="mb-2 block text-third">Password length: {{this.passwordSliderLength}}</label>
              <input
                type="range"
                min="1"
                max="20"
                value="8"
                class="slider"
                id="length"
                v-model="slider"
              />
              <span class="text-xl"></span>
            </div>
            <div
              v-for="(alphabet, _, index) in alphabets"
              :key="index"
              :id="alphabet"
              class="tex2jax_ignore mb-2 text-secondary"
            >
              <input
                type="radio"
                :id="alphabet"
                name="alphabet"
                :value="alphabet"
                class="mr-2"
                :checked="index === 0"
                @click="handleChecked(alphabet.range)"
              />
              <label :for="alphabet">{{ alphabet.label }}</label
              ><br />
            </div>
            <div class="mb-3 mt-20 text-red-900">
              <Paragraph :paragraph="getEntropyCalculation" class="text-xl"/>
            </div>
          </em>
        </div>
        <Paragraph :paragraph="'The recommended bits of entropy have changed over the time. If we have at least 50 bits, the password should have an average level of security. Statistically speaking, an attacker needs on average half of all possible character combinations in order to guess the password which can also be expressed as powers of two in relation to the entropy. ' + guessesFormula "></Paragraph>
        <Paragraph :paragraph="'With that in mind, the word $P@ssw0rd!$ should be at least a decent candidate, right?'"></Paragraph>
        <Paragraph :paragraph="this.passwordEntropyString"></Paragraph>
        <Paragraph :paragraph="this.passwordGuessesString"></Paragraph>
        <Paragraph paragraph="Unfortunately not. This very password ranks on rank $96$ on the password list fasttrack.txt. So instead of almost $300$ Quadrillion (<a href='https://en.wikipedia.org/wiki/Long_and_short_scales' target='_blank' class='underline'>short scale </a>) guesses it wouldn't even take $100$ guesses for an attacker to figure out the password."></Paragraph>
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
			slider: '',
			entropy: Math.log2(Math.pow(1, this.passwordSliderLength)),
			alphabets: {
				lower: {
					isChecked: true,
					label: 'Lowercase letters roman alphabet [a-z]',
					range: 26
				},
				lowerUpper: {
					label: 'Lowercase, uppercase [a-z,A-Z]',
					range: 26 * 2
				},
				lowerUpperDigits: {
					label: 'Lowercase, uppercase, digits [a-z,A-Z,0-9]',
					range: 26 * 2 + 10
				},
				printable: {
					label: 'All printable ASCII symbols',
					range: 95
				}
			},
			passwordRange: 26,
			guessesFormula: '$$g = \\frac{N^L}{2} = 2^{H-1}$$',
			passwordGuessesString: '$$g = \\frac{95^9}{2} = 2^{59-1} = 2^{58}$$',
			passwordEntropyString: '$$H = log_{2}(95^9) = ' + this.calculateEntropy(95, 9) + '$$'
		};
	},
	computed: {
		...mapState(['passwordSliderLength']),
		getEntropyCalculation() {

			return (
				'$H = log_{2}(\\class{text-secondary}{' + this.passwordRange + '}^\\class{text-third}{' +
        this.passwordSliderLength +
        '}) = ' +
        this.calculateEntropy(this.passwordRange, this.passwordSliderLength) +
        '$'
			);
		}
	},
	watch: {
		slider(value) {
			this.$store.commit('SET_PASSWORD_SLIDER_LENGTH', value);
			this.initializeMathJaxQueue(this);
		}
	},
	methods: {
		initializeMathJaxQueue,
		handleChecked(range) {
			this.passwordRange = range;
			this.initializeMathJaxQueue(this);
		},
		calculateEntropy(range, length) {
			return (Math.round( Math.log2(Math.pow(range, length)) * 100 ) / 100);
		},
		calculateAverageGuesses(range, length) {
			return (Math.pow(range, length) / 2);
		}
	},
	mounted() {
		this.initializeMathJaxQueue(this);
	}
};
</script>
