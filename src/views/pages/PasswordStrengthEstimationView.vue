<template>
  <PageCard :header="'How password strength is estimated'">
    <template>
      <main class="tex2jax_process">
        <Paragraph
          :paragraph="'The common approach to evaluate a password\'s strength is based on two variables:'"
        />
        <em>
          <ul class="list-disc pl-10">
            <li>password length</li>
            <li>password range</li>
          </ul>
        </em>
        <Paragraph
          :paragraph="'Let\'s use the word <em>password</em> which has a length $L$ of $8$ within the range $N$ of ' +
           '$26$ possible characters given the fact that the word only consists of lowercase letters from the ' +
            'roman alphabet. That leaves us with a pool of $26⁸$ possible passwords.'"
        />
        <Paragraph
          :paragraph="'Because of their exponential character, these numbers can easily get out of human ' +
           'comprehensible bounds. Hence, password strength is usually specified as entropy $H$ with a unit of bits.'"
        />
        <Paragraph
          :paragraph="'Try it out yourself. Change the length of the password and choose from these common ' +
           'alphabets to see how the entropy changes.'"
        />
        <div class="rounded bg-font-light p-10">
          <div class="mb-8">
            <label for="passwordLengthSlider" class="mb-2 block text-highlight2"
              >Password length: {{ this.passwordLength }}</label
            >
            <input
              ref="passwordLengthSlider"
              type="range"
              min="1"
              max="20"
              value="8"
              class="slide"
              id="passwordLengthSlider"
              @change="handlePasswordLengthSlider()"
            />
            <span class="text-xl"></span>
          </div>
          <div
            v-for="(alphabet, _, index) in alphabets"
            :key="index"
            :id="alphabet"
            class="tex2jax_ignore mb-2 text-highlight1"
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
          <div class="mb-3 mt-20">
            <Paragraph :paragraph="getEntropyCalculation" class="text-xl" />
          </div>
        </div>
        <Paragraph
          :paragraph="'Statistically speaking, an attacker needs on average half of all possible character ' +
           'combinations in order to guess the password. Guesses $G$ can also be expressed as two to the power of ' +
            'the entropy reduced by one.'"
        />
        <Paragraph :paragraph="guessesFormula" />
      </main>
    </template>
  </PageCard>
</template>

<script>
import PageCard from '@/components/cards/PageCard';
import Paragraph from '@/components/text/Paragraph';
import { mapState } from 'vuex';
import { initializeMathJaxQueue } from '@/utils/initializeMathJaxQueue';
import { scrollToTop } from '@/utils/scrollTopTop';

export default {
	components: {
		PageCard,
		Paragraph
	},
	data() {
		return {
			slider: '',
			entropy: Math.log2(Math.pow(1, this.passwordLength)),
			alphabets: {
				lower: {
					isChecked: true,
					label: 'Lowercase letters roman alphabet [a-z] = 26',
					range: 26
				},
				lowerUpper: {
					label: 'Lowercase, uppercase [a-z,A-Z] = 52',
					range: 26 * 2
				},
				lowerUpperDigits: {
					label: 'Lowercase, uppercase, digits [a-z,A-Z,0-9] = 62',
					range: 26 * 2 + 10
				},
				printable: {
					label: 'All printable ASCII symbols = 95',
					range: 95
				}
			},
			passwordRange: 26,
			guessesFormula: '$$G = \\frac{N^L}{2} = 2^{H-1}$$'
		};
	},
	computed: {
		...mapState(['passwordLength']),
		getEntropyCalculation() {
			return (
				'$H = log_{2}(\\class{text-highlight1}{' +
          this.passwordRange +
          '}^\\class{text-highlight2}{' +
          this.passwordLength +
          '}) = ' +
          this.calculateEntropy(this.passwordRange, this.passwordLength) +
          '$'
			);
		}
	},
	methods: {
		initializeMathJaxQueue,
		handlePasswordLengthSlider() {
			this.$store.commit(
				'SET_PASSWORD_LENGTH',
				this.$refs.passwordLengthSlider.value
			);
			this.initializeMathJaxQueue(this);
		},
		handleChecked(range) {
			this.passwordRange = range;
			this.initializeMathJaxQueue(this);
		},
		calculateEntropy(range, length) {
			return Math.round(Math.log2(Math.pow(range, length)) * 100) / 100;
		}
	},
	mounted() {
		this.initializeMathJaxQueue(this);
	},
	created() {
		scrollToTop();
	}
};
</script>
