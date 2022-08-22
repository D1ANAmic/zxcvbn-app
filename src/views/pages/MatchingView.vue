<template>
  <PageCard :header="'Matching: Finding all the patterns'">
    <template>
      <main>
        <Paragraph paragraph="During the matching phase, a set of all possible (overlapping) patterns the password contains of is collected. The algorithm recognizes seven distinctive patterns."></Paragraph>
        <div class="mb-20">
        <h2 class="mt-0 mb-6 text-3xl font-medium leading-tight">Token</h2>
        <Paragraph paragraph="The token matching tries to find a given password in one or more dictionaries by iterating over the wordlist. Uppercase letters and <a href='https://en.wikipedia.org/wiki/Leet' target='_blank' class='underline'>leetspeak</a> are transformed into the lowercase representation of the string beforehand."></Paragraph>
        <em>
        <div class="rounded bg-font-light p-10">
          <div class="relative mb-20">
          <span id= "token" class="block absolute top-0 transition duration-1000 linear" :class="tokenTransformed ? 'opacity-0' : 'opacity-1'">Shad0w</span>
          <span id= "token-transformed" class="block absolute top-0 transition duration-1000 linear" :class="tokenTransformed ? 'opacity-1' : 'opacity-0'">shadow</span>
          </div>
          <div>
          <span v-for="(value, key, index) in firstTwentyWordlist"
          :key="index"
          :id="value"
          class="transition duration-500 linear">{{value}}, </span>
          <span>...</span>
          </div>
        </div>
        </em>
        <Button :handle-click="startTokensAnimation"
        :text="'Start'"/>
        </div>

        <div class="mb-20">
        <h2 class="mt-0 mb-6 text-3xl font-medium leading-tight">Sequence</h2>
        <Paragraph paragraph="The sequence matching is based on the unicode representation of a symbol. The algorithm determines if a sequence is present according to the delta between two adjacent symbols."></Paragraph>
        <em>
          <div class="rounded bg-font-light p-10">
            <div class="relative mb-20">
              <span id= "sequence" class="block top-0">123s864</span>
            </div>
            <table class=" text-left w-2/3 mb-10 text-center">
              <tbody>
              <tr
                  class=" border-b dark:border-font-dark "
              >
                <td class="sequence1">1</td>
                <td class="sequence1 sequence2">2</td>
                <td class="sequence2">3</td>
                <td>s</td>
                <td class="sequence3">8</td>
                <td class="sequence3 sequence4">6</td>
                <td class="sequence4">4</td>
              </tr>
              <tr>
                <td class="sequence1">U+0031</td>
                <td class="sequence1 sequence1">U+0032</td>
                <td class="sequence1">U+0033</td>
                <td>U+0073</td>
                <td class="sequence3">U+0038</td>
                <td class="sequence3 sequence4">U+0036</td>
                <td class="sequence4">U+0034</td>
              </tr>
              <tr class="text-right">
                <td class="sequence1">1</td>
                <td class="sequence2">1</td>
                <td>40</td>
                <td>-35</td>
                <td class="sequence3">-2</td>
                <td class="sequence4">-2</td>
              </tr>
              </tbody>
            </table>
          </div>
        </em>
        <Button :handle-click="startSequenceAnimation"
                :text="'Start'"/>
        </div>
      </main>
    </template>
  </PageCard>
</template>

<script>
import Paragraph from '@/components/text/Paragraph';
import PageCard from '@/components/cards/PageCard';
import Button from '@/components/button/Button';

export default {
	components: {
		Button,
		Paragraph,
		PageCard
	},
	data() {
		return {
			firstTwentyWordlist: '123456,password,12345678,qwerty,123456789,12345,1234,111111,1234567,dragon,123123,baseball,abc123,football,monkey,letmein,shadow,master,696969,mustang'.split(','),
			tokenTransformed: false,
			sequenceClasses: ['sequence1', 'sequence2', 'sequence3', 'sequence4']
		};
	},
	methods: {
		startTokensAnimation() {
			//transform to lowercase
			const token = document.getElementById('token');
			const tokenTransformed = document.getElementById('token-transformed');

			this.toggleTokenTransformed();


			// highlight wordlist
			const wordlist = [];
			let wordIndex = 0;
			this.firstTwentyWordlist.forEach((word, index) => {
				if (word === tokenTransformed.innerText) {
					wordIndex = index;
				}
			});

			for (let i = 0; i < wordIndex + 1; i ++) {
				const timeOut = 400 * i + 1500;
				const currentWord = document.getElementById(this.firstTwentyWordlist[i]);
				wordlist.push(currentWord);

				setTimeout(() => {

					this.toggleHighlight(wordlist, i);
				}, timeOut);
			}

		},
		toggleHighlight(arr, index) {
			arr[index].classList.add('bg-third');
			if (index > 0) {
				arr[index - 1].classList.remove( 'bg-third');
			}
		},
		toggleTokenTransformed(){
			this.tokenTransformed = ! this.tokenTransformed;
		},
		startSequenceAnimation(){

			for (let i = 0; i < this.sequenceClasses.length; i ++) {
				console.log('here');
				const sequenceElements = document.getElementsByClassName('sequence' + i + 1);
				console.log(sequenceElements);
				const timeOut = 400 * i + 1500;

				setTimeout(() => {

					sequenceElements.forEach((element) => {
						element.classList.add('bg-third');
					});
				}, timeOut);
			}
		}
	}
};
</script>