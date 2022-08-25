<template>
  <PageCard :header="'Estimating: How many guesses per match?'">
    <template>
      <main>
        <Paragraph
            paragraph="The estimating phase is responsible for assigning the number of guesses to every match found in the previous phase. The calculations are complex and differ depending on the matched pattern. "
        ></Paragraph>
        <h2 class="mt-0 mb-6 text-3xl font-medium leading-tight">Token</h2>
        <Paragraph paragraph="Tokens are matched based on their rank in any given dictionary. Every leet and uppercase character adds a factor to the guesses. If the capitalized letter is in a common place like the beginning or end of the word, the factor 2 is added. Every leet character also multiplies the amout of guesses by 2."></Paragraph>
        <em>
          <div class="rounded bg-font-light p-10 mb-20">
            <div class="relative mb-20">
              <Paragraph paragraph="Shad0w"></Paragraph>
              <ul class="list-disc">
                <li>shadow is the 17th word in the list</li>
                <li>the first letter is capitalized</li>
                <li>the 5th letter is in leetspeak</li>
              </ul>
              <div class="tex2jax_process text-red-900">
                <Paragraph paragraph="$g = 17 * 2 * 2 = 68$"></Paragraph>

              </div>
            </div>
          </div>
        </em>

        <h2 class="mt-0 mb-6 text-3xl font-medium leading-tight">Sequence</h2>
        <Paragraph paragraph="Sequences are estimated based on their first characters. For most common symbols like a and 1, the base guesses are evaluated with 4. Digits get a base value of 10 and all other symbols 26. The base is then multiplied with the string's length and the unicode delta between the elements."></Paragraph>
        <em>
          <div class="rounded bg-font-light p-10 mb-20">
            <div class="relative mb-20">
              <Paragraph paragraph="864"></Paragraph>
              <ul class="list-disc">
                <li>first symbol is a digit</li>
                <li>string length is 3</li>
                <li>unicode delta is -2</li>
              </ul>
              <div class="tex2jax_process text-red-900">
                <Paragraph paragraph="$g = 10 * 3 * |-2| = 60$"></Paragraph>

              </div>
            </div>
          </div>
        </em>


        <h2 class="mt-0 mb-6 text-3xl font-medium leading-tight">Repeat</h2>
        <Paragraph paragraph="Repeats are guessed based on their rank in the dictionary and then multiplied by the number of repetitions. If the pattern can't be found in the dictionary, it's guessed as a bruteforce string."></Paragraph>
        <em>
          <div class="rounded bg-font-light p-10 mb-20">
            <div class="relative mb-20">
              <Paragraph paragraph="abbabb"></Paragraph>
              <ul class="list-disc">
                <li>abb is not contained by the dictionary and therefore guessed as a brute force value of 1001</li>
                <li>string contains 2 repetitions</li>
              </ul>
              <div class="tex2jax_process text-red-900">
                <Paragraph paragraph="$g = 1000 * 2 = 2000$"></Paragraph>

              </div>
            </div>
          </div>
        </em>

        <h2 class="mt-0 mb-6 text-3xl font-medium leading-tight">Keyboard</h2>
        <Paragraph paragraph="Keyboard patterns are estimated based on length, possible turns, average number of adjacent keys and number of keys on the keyboard."></Paragraph>
        <em>
          <div class="rounded bg-font-light p-10 mb-20">
            <div class="relative mb-20">
              <Paragraph paragraph="xcvghui"></Paragraph>
              <ul class="list-disc">
                <li>length is 7</li>
                <li>pattern contains 4 turns</li>
              </ul>
              <div class="tex2jax_process text-red-900">
                <Paragraph paragraph="$g = 	5632457$"></Paragraph>

              </div>
            </div>
          </div>
        </em>


        <h2 class="mt-0 mb-6 text-3xl font-medium leading-tight">Date</h2>
        <Paragraph paragraph="For the date estimation at first the difference between the date's year to the current year ist calculated and then multiplied by 365 to reflect every possible date from the current date to the  password's date."></Paragraph>
        <em>
          <div class="rounded bg-font-light p-10 mb-20">
            <div class="relative mb-20">
              <Paragraph paragraph="211596"></Paragraph>
              <ul class="list-disc">
                <li>the matcher has subsequently established the format of the date string as 2115-9-6</li>
                <li>in 2022 the delta between both years is 93</li>
              </ul>
              <div class="tex2jax_process text-red-900">
                <Paragraph paragraph="$g = 	93 * 365 = 12775$"></Paragraph>

              </div>
            </div>
          </div>
        </em>

        <h2 class="mt-0 mb-6 text-3xl font-medium leading-tight">Brute Force</h2>
        <Paragraph paragraph="Strings that don't fit any of the above patterns and are not contained in any wordlist are evaluated as random strings which can only be guessed by brute force. Other than the entropy calculation, Zxcvbn doesn't calculate the amount of guesses based on the entropy $H = R^L$ since it has been proven to overestimate words in other languages which weren't part of the dictionary. Therefore the guesses are based on a constant $C=10$ to the power of the length of the string."></Paragraph>
        <em>
          <div class="rounded bg-font-light p-10 mb-20">
            <div class="relative mb-20">
              <Paragraph paragraph="Kröte"></Paragraph>
              <ul class="list-disc">
                <li>the word "Kröte" can't be found in any dictionary and is therefore treated as random string</li>
                <li>the common guesses calculation approach would consider the character pool based on the german alphabet which has 30 symbols</li>

                <span class="tex2jax_process">$$g = \frac{N^L}{2} =\frac{30^5}{2} = 10255574,5$$</span>
                <li>Zxcvbn however obtains a way lower guessing count</li>
              </ul>
              <div class="tex2jax_process text-red-900">
                <Paragraph paragraph="$g = {10^5} = 100000 $"></Paragraph>

              </div>
            </div>
          </div>
        </em>


      </main>
    </template>
  </PageCard>
</template>

<script>
import Paragraph from '@/components/text/Paragraph';
import PageCard from '@/components/cards/PageCard';

export default {
	components: {
		Paragraph,
		PageCard
	},
	data() {
		return {
			value: ''
		};
	}

};
</script>
