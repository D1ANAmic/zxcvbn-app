<template>
  <PageCard :header="'Estimating: How many guesses per match?'">
    <template>
      <main class="tex2jax_process">
        <Paragraph
          :paragraph="'The estimating phase is responsible for assigning the required number of guesses to every match found in the previous phase. The calculations are complex and differ depending on the matched pattern.'"
        />
        <Paragraph
          :paragraph="'It is worth mentioning though, that the calculations under the hood can be more complex at times and estimations can be rounded differently. Therefore a slight divergence between manually calculated estimates and Zxcvbn results are likely to occur.'"
        />
        <h2 class="mt-0 mb-6 text-3xl font-medium leading-tight">Token</h2>
        <Paragraph
          :paragraph="'Tokens are estimated based on their rank in any given dictionary. Every l33t and uppercase character adds a multiplier to the guesses count. If the capitalized letter is at a common place like the beginning or end of the word, the multiplier $2$ is added. Every l33t character also multiplies the amout of guesses by $2$.'"
        />
        <div class="mb-20 rounded bg-font-light p-10 italic">
          <div class="relative mb-10">
            <span class="text-xl text-third">Shad0w</span>
          </div>
          <ul class="ml-5 mb-10 list-disc">
            <li>shadow is the 17th word in the list</li>
            <li>the first letter is capitalized</li>
            <li>the 5th letter is in l33tspeak</li>
          </ul>
          <div class="text-xl text-third">
            <span>$g = 17 \cdot 2 \cdot 2 = 68$</span>
          </div>
        </div>
        <h2 class="mt-0 mb-6 text-3xl font-medium leading-tight">Sequence</h2>
        <Paragraph
          :paragraph="'Sequences are estimated based on their first characters. For most common symbols like $a$ and $1$, the base guesses are evaluated as $4$. Digits get a base value of $10$ and all other symbols $26$. The base is then multiplied with the string\'s length and the unicode delta between the elements.'"
        />
        <div class="mb-20 rounded bg-font-light p-10 italic">
          <div class="relative mb-10">
            <span class="text-xl text-third">864</span>
          </div>
          <ul class="ml-5 mb-10 list-disc">
            <li>first symbol is a digit</li>
            <li>string length is 3</li>
            <li>unicode delta is -2</li>
          </ul>
          <div class="text-xl text-third">
            <span>$g = 10 \cdot 3 \cdot |-2| = 60$</span>
          </div>
        </div>

        <h2 class="mt-0 mb-6 text-3xl font-medium leading-tight">Repeat</h2>
        <Paragraph
          :paragraph="'Repeats are guessed based on their rank in the dictionary and then multiplied by the number of repetitions. If the pattern can\'t be found in the dictionary, it\'s evaluated as a <a href=#bruteForce class=underline>bruteforce string</a>.'"
        />
        <div class="mb-20 rounded bg-font-light p-10 italic">
          <div class="relative mb-10">
            <span class="text-xl text-third">abbabb</span>
          </div>
          <ul class="ml-5 mb-10 list-disc">
            <li>
              abb is not contained by the dictionary and therefore guessed as a
              brute force value of 1000
            </li>
            <li>string contains 2 repetitions</li>
          </ul>
          <div class="text-xl text-third">
            <span>$g = 1000 \cdot 2 = 2000$</span>
          </div>
        </div>
        <h2 class="mt-0 mb-6 text-3xl font-medium leading-tight">Keyboard</h2>
        <Paragraph :paragraph="'Keyboard patterns are estimated based on:'" />
        <ul class="list-disc pl-10 italic">
          <li>length</li>
          <li>turns</li>
          <li>average number of adjacent keys</li>
          <li>number of keys on the keyboard</li>
        </ul>
        <Paragraph
          :paragraph="'The calculation is very complex. For our purposes it is sufficient to get the estimation value from Zxcvbn.'"
        />
        <div class="mb-20 rounded bg-font-light p-10 italic">
          <div class="relative mb-10">
            <span class="text-xl text-third">xcvghui</span>
          </div>
          <div class="text-xl text-third">
            <span>$g = 5632457$</span>
          </div>
        </div>
        <h2 class="mt-0 mb-6 text-3xl font-medium leading-tight">Date</h2>
        <Paragraph
          :paragraph="'As for the date estimation, the difference between the date\'s year to the current year is calculated. The delta is then multiplied by $365$ to reflect every possible date in the time span.'"
        />
        <div class="mb-20 rounded bg-font-light p-10 italic">
          <div class="relative mb-10">
            <span class="text-xl text-third">211596</span>
          </div>
          <ul class="ml-5 mb-10 list-disc">
            <li>
              the matcher has subsequently established the correct format as
              2-1-1596
            </li>
            <li>in 2022 the delta from 1596 adds up to 93 years</li>
          </ul>
          <div class="text-xl text-third">
            <span>$g = 93 \cdot 365 = 12775$</span>
          </div>
        </div>
        <h2
          id="bruteForce"
          class="mt-0 mb-6 text-3xl font-medium leading-tight"
        >
          Brute Force
        </h2>
        <Paragraph
          :paragraph="'Strings that don\'t fit any of the above patterns and are not contained in any wordlist are evaluated as random strings which can only be guessed by brute force. Zxcvbn doesn\'t calculate the guesses count based on the entropy $H = R^L$ because it has been proven to overestimate passwords, especially words in other languages that are not included in Zxcvbn\'s dictionaries. Therefore the guesses are based on a constant $C=10$ to the power of the length of the string.'"
        />
        <div class="mb-20 rounded bg-font-light p-10 italic">
          <div class="relative mb-10">
            <span class="text-xl text-third">Kröte</span>
          </div>
          <ul class="ml-5 mb-10 list-disc">
            <li>
              the word german word "Kröte" can't be found in any dictionary and
              is therefore treated as a random string
            </li>
            <li>
              the common guesses calculation approach would consider the
              character pool based on the german alphabet which has 30 symbols
            </li>

            <span>$$g = \frac{N^L}{2} =\frac{30^5}{2} = 10255574,5$$</span>
            <li>Zxcvbn however obtains a way lower guessing count</li>
          </ul>
          <div class="text-xl text-third">
            <span>$g = {10^5} = 100000 $</span>
          </div>
        </div>
      </main>
    </template>
  </PageCard>
</template>

<script>
import Paragraph from '@/components/text/Paragraph';
import PageCard from '@/components/cards/PageCard';
import { initializeMathJaxQueue } from '@/utils/initializeMathJaxQueue';
import { scrollToTop } from '@/utils/scrollTopTop';

export default {
	components: {
		Paragraph,
		PageCard
	},
	methods: {
		initializeMathJaxQueue
	},
	created() {
		scrollToTop();
	},
	mounted() {
		this.initializeMathJaxQueue(this);
	}
};
</script>
