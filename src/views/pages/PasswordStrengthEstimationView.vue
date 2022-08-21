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
          paragraph="Let's use the word $password$ which has a length $L$ of 8 within the range $N$ of 26 the word only consists of lowercase letters from the roman alphabet. That leaves us with a pool of $26⁸$ possible passwords.
        These calculations can easily go out of human readable bounds given their exponential character. That's why the password strength is specified as entropy H with a unit of bits."
        />
        <Paragraph
          paragraph="Try it out yourself: Change the length of the password and choose from these common alphabets to see how the entropy changes."
        />
        <div class="rounded bg-font-light p-10">
          <em>
            <div class="mb-8">
              <label for="length" class="mb-2 block">Password length</label>
              <input
                type="range"
                min="1"
                max="20"
                value="8"
                class="slider"
                id="length"
                v-model="slider"
              />
            </div>
            <div
              v-for="(alphabet, key, index) in alphabets"
              :key="index"
              :id="alphabet"
              class="tex2jax_ignore mb-2"
            >
              <input
                type="radio"
                :id="alphabet"
                name="alphabet"
                :value="alphabet"
                class="mr-2"
                :checked="alphabet.isChecked"
                v-model="radio"
              />
              <label :for="alphabet">{{ alphabet.label }}</label
              ><br />
            </div>
            <div class="mb-3 mt-20 text-2xl text-red-900">
              <Mathjax :formula="getEntropyCalculation" :safe="true" />
            </div>
          </em>
        </div>
        <Paragraph paragraph="The recommended bits of entropy have changed over the time. If we have at least 50 bits, the password should have an average level of security. Statistically speaking, an attacker needs on average half of all possible character combinations in order to guess the password.$$g = \frac{N^L}{2}$$ "></Paragraph>
        <Paragraph :paragraph="this.passwordGuessesString"></Paragraph>
        <Paragraph :paragraph="this.passwordEntropyString"></Paragraph>
        <Paragraph paragraph="Unfortunately not. This very password ranks on rank 96 on the password list fasttrack.txt. So instead of $3 * 10^{17}$ guesses it wouldn't even take $100$ guesses for an attacker to figure out the password."></Paragraph>
        <Paragraph paragraph="If we consider the fact, that modern attacks are executed with approximately $10^{10}$ guesses per second, we need to change our point of view."></Paragraph>
      </main>
    </template>
  </PageCard>
</template>

<script>
import PageCard from '@/components/cards/PageCard';
import Paragraph from '@/components/text/Paragraph';
import { mapState } from 'vuex';
import Mathjax from '@/components/mathjax/Mathjax';

export default {
	components: {
		PageCard,
		Paragraph,
		Mathjax
	},
	data() {
		return {
			slider: '',
			radio: '',
			passwordRange: 0,
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
			passwordGuessesString: 'With that in mind, the password $P@ssw0rd!$ should be at least a decent candidate, right? $$g = \\frac{95^9}{2} = ' + this.calculateAverageGuesses(95, 9) + '$$',
			passwordEntropyString: '$$H = log_{2}(95^9) = ' + this.calculateEntropy(95, 9) + '$$'
		};
	},
	computed: {
		...mapState(['passwordSliderLength']),
		getEntropyCalculation() {
			console.log(this.radio);

			return (
				'$H = log_{2}(N^{' +
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
		},
		radio(value) {
			console.log(value.range);
			this.passwordRange = value.range;
		}
	},
	methods: {
		calculateEntropy(range, length) {
			return (Math.round( Math.log2(Math.pow(range, length)) * 100 ) / 100);
		},
		calculateAverageGuesses(range, length) {
			return (Math.pow(range, length) / 2);
		}
	}
};
</script>
