<template>
  <PageCard :header="'Matching: Finding all the patterns'">
    <template>
      <main>
        <Paragraph
          :paragraph="'The matching process is based on the idea of emulating a real life attack. An attacker would try out certain patterns that have been proven to be common in password composition.'"
        />
        <Paragraph
          :paragraph="'During the matching phase, a set of all possible patterns detected in the password are collected. Patterns may also overlap. The algorithm recognizes five distinctive patterns.'"
        />
        <div class="mb-20">
          <h2 class="mt-0 mb-6 text-3xl font-medium leading-tight">Token</h2>
          <Paragraph
            :paragraph="'The token matching iterates over one or more dictionaries and tries to find a given password. Uppercase letters and <a href=\'https://en.wikipedia.org/wiki/Leet\' target=\'_blank\' class=\'underline\'>l33tspeak</a> are transformed into the lowercase representation of the string beforehand.'"
          />

          <div class="flex flex-col items-center">
            <div class="rounded bg-font-light p-10 min-w-full max-w-full italic">
              <div class="relative mb-20">
                <span
                  id="token"
                  class="linear absolute top-0 block text-xl transition duration-1000"
                  :class="tokenTransformed ? 'opacity-0' : 'opacity-1'"
                  >Shad0w</span
                >
                <span
                  id="token-transformed"
                  class="linear absolute top-0 block text-xl transition duration-1000"
                  :class="tokenTransformed ? 'opacity-1' : 'opacity-0'"
                  >shadow</span
                >
              </div>
              <div>
                <span
                  v-for="(value, _, index) in firstTwentyWordlist"
                  :key="index"
                  :id="value"
                  class="token linear transition duration-500"
                  >{{ value }},
                </span>
                <span>...</span>
              </div>
            </div>
            <Button
              class="mt-5 w-1/4"
              :handle-click="handleTokenAnimationButton"
              :is-disabled="animationButtons.tokensAnimationRunning"
            >
              <template #icon>
                <span
                  v-html="`<i class=&quot;fa-solid fa-play&quot;></i>`"
                ></span>
                <span> Play</span>
              </template>
            </Button>
          </div>
        </div>

        <div class="mb-20">
          <h2 class="mt-0 mb-6 text-3xl font-medium leading-tight">Sequence</h2>
          <Paragraph
            :paragraph="'The sequence matching is based on the unicode representation of a symbol. The algorithm determines if a sequence is present according to the delta between two adjacent symbols.'"
          />
          <div class="flex flex-col items-center">
            <div class="rounded bg-font-light p-10 min-w-full max-w-full italic">
              <div class="relative mb-10">
                <span id="sequence" class="top-0 text-xl block">123s864</span>
              </div>
              <table class="w-2/3 text-left text-center">
                <tbody>
                  <tr class="border-b dark:border-font-dark">
                    <td class="linear sequence1 transition duration-500">1</td>
                    <td
                      class="linear sequence1 sequence2 transition duration-500"
                    >
                      2
                    </td>
                    <td class="linear sequence2 transition duration-500">3</td>
                    <td>s</td>
                    <td class="linear sequence3 transition duration-500">8</td>
                    <td
                      class="linear sequence3 sequence4 transition duration-500"
                    >
                      6
                    </td>
                    <td class="linear sequence4 transition duration-500">4</td>
                  </tr>
                  <tr>
                    <td class="linear sequence1 transition duration-500">
                      U+0031
                    </td>
                    <td
                      class="linear sequence1 sequence2 transition duration-500"
                    >
                      U+0032
                    </td>
                    <td class="linear sequence2 transition duration-500">
                      U+0033
                    </td>
                    <td>U+0073</td>
                    <td class="linear sequence3 transition duration-500">
                      U+0038
                    </td>
                    <td
                      class="linear sequence3 sequence4 transition duration-500"
                    >
                      U+0036
                    </td>
                    <td class="linear sequence4 transition duration-500">
                      U+0034
                    </td>
                  </tr>
                  <tr class="text-right">
                    <td class="linear sequence1 transition duration-500">1</td>
                    <td class="linear sequence2 transition duration-500">1</td>
                    <td>40</td>
                    <td>-35</td>
                    <td class="linear sequence3 transition duration-500">-2</td>
                    <td class="linear sequence4 transition duration-500">-2</td>
                  </tr>
                </tbody>
              </table>
            </div>

          <Button
              class="w-1/4 mt-5"
            :handle-click="handleSequenceAnimationButton"
            :is-disabled="animationButtons.sequenceAnimationRunning"
          >
            <template #icon>
              <span
                v-html="`<i class=&quot;fa-solid fa-play&quot;></i>`"
              ></span>
              <span> Play</span>
            </template>
          </Button>
        </div>
        </div>

        <div class="mb-20">
          <h2 class="mt-0 mb-6 text-3xl font-medium leading-tight">Repeat</h2>
          <Paragraph
            :paragraph="'The repeat matcher searches for symbol repetitions through regular expressions. The longest match will always be prioritized.'"
          />
          <div class="flex flex-col items-center">
            <div class="rounded bg-font-light p-10 min-w-full max-w-full italic">
              <div class="relative mb-10">
                <span id="repeatWord" class="top-0 text-xl block">abbabb</span>
              </div>
              <div>
                <span id="repeat1" class="repeat">a </span>
                <span id="repeat2" class="repeat">b </span>
                <span id="repeat3" class="repeat">b</span>&nbsp;
                <span id="repeat4" class="repeat">a </span>
                <span id="repeat5" class="repeat">b </span>
                <span id="repeat6" class="repeat">b</span>
              </div>
            </div>
          <Button
              class="w-1/4 mt-5"
            :handle-click="handleRepeatAnimationButton"
            :is-disabled="animationButtons.repeatAnimationRunning"
          >
            <template #icon>
              <span
                v-html="`<i class=&quot;fa-solid fa-play&quot;></i>`"
              ></span>
              <span> Play</span>
            </template>
          </Button>
        </div>
        </div>

        <div class="mb-20">
          <h2 class="mt-0 mb-6 text-3xl font-medium leading-tight">Keyboard</h2>
          <Paragraph
            :paragraph="'The keyboard matcher analyzes the password for keyboard patterns by keeping track of neighbouring keys. If the next key is adjacent to the previous one it will match. Zxcvbn supports different keyboard layouts per default. Additional ones can be added.'"
          />
          <div class="flex flex-col items-center">
            <div class="rounded bg-font-light p-10 min-w-full max-w-full italic">
              <div class="relative mb-10">
                <span class="top-0 block text-xl">xcvghui</span>
              </div>
              <div>
                <Keyboard/>
              </div>
            </div>
          <Button
              class="w-1/4 mt-5"
            :handle-click="handleKeyboardAnimationButton"
            :is-disabled="animationButtons.keyboardAnimationRunning"
          >
            <template #icon>
              <span
                v-html="`<i class=&quot;fa-solid fa-play&quot;></i>`"
              ></span>
              <span> Play</span>
            </template>
          </Button>
        </div>
        </div>

        <div class="mb-20">
          <h2 class="mt-0 mb-6 text-3xl font-medium leading-tight">Date</h2>
          <Paragraph
            :paragraph="'Numerical strings with 4 to 8 adjacent digits are being checked for date representations. To be identified as a date, the following requirements have to be met:'"
          />
          <em>
            <ul class="list-disc ml-10 mb-10">
              <li>The year is represented by 2 or 4 digits</li>
              <li>
                The year cannot be in the middle of the date representation
              </li>
              <li>The month lies between 1 and 12</li>
              <li>The day lies between 1 and 31</li>
              <li>The date must be in the past</li>
            </ul>
          </em>
          <Paragraph
            :paragraph="'If several valid dates are possible, the one closest to the current date ist chosen.'"
          />
          <div class="flex flex-col items-center">
            <div class="rounded bg-font-light p-10 min-w-full max-w-full italic">
              <div class="relative mb-10">
                <span id="date" class="top-0 text-xl block">211596</span>
              </div>
              <div>
                <div class="linear inline transition duration-1000">
                  2115<span
                    class="dash"
                    :class="dateElementVisibility.displayDashes ? '' : 'hidden'"
                    >-</span
                  >9<span
                    class="dash"
                    :class="dateElementVisibility.displayDashes ? '' : 'hidden'"
                    >-</span
                  >6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                    class="message1 linear transition duration-1000"
                    :class="
                      dateElementVisibility.displayMessage1
                        ? 'opacity-1'
                        : 'opacity-0'
                    "
                    >Lies in the future</span
                  >
                </div>
                <div>
                  21<span
                    class="dash"
                    :class="dateElementVisibility.displayDashes ? '' : 'hidden'"
                    >-</span
                  >15<span
                    class="dash"
                    :class="dateElementVisibility.displayDashes ? '' : 'hidden'"
                    >-</span
                  >96&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                    class="message2 linear transition duration-1000"
                    :class="
                      dateElementVisibility.displayMessage2
                        ? 'opacity-1'
                        : 'opacity-0'
                    "
                    >Not a valid date</span
                  >
                </div>
                <div id="matchedDate">
                  2<span
                    class="dash"
                    :class="dateElementVisibility.displayDashes ? '' : 'hidden'"
                    >-</span
                  >1<span
                    class="dash"
                    :class="dateElementVisibility.displayDashes ? '' : 'hidden'"
                    >-</span
                  >1596&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                    class="message3 linear transition duration-1000"
                    :class="
                      dateElementVisibility.displayMessage3
                        ? 'opacity-1'
                        : 'opacity-0'
                    "
                    >Lies in the past</span
                  >
                </div>
              </div>
            </div>
          <Button
              class="w-1/4 mt-5"
            :handle-click="handleDateAnimationButton"
            :is-disabled="animationButtons.dateAnimationRunning"
          >
            <template #icon>
              <span
                v-html="`<i class=&quot;fa-solid fa-play&quot;></i>`"
              ></span>
              <span> Play</span>
            </template>
          </Button>
        </div>
        </div>

        <Paragraph
          :paragraph="'A password can contain multiple matches out of these five categories. By the end of the matching phase, all pattern occurrences are saved in one set. Up to this point it is not determined which of these patterns will be considered for the guessing and score evaluation.'"
        />
      </main>
    </template>
  </PageCard>
</template>

<script>
import Paragraph from '@/components/text/Paragraph';
import PageCard from '@/components/cards/PageCard';
import Button from '@/components/button/Button';
import Keyboard from '@/components/keyboard/Keyboard';

export default {
	components: {
		Button,
		Paragraph,
		PageCard,
		Keyboard
	},
	data() {
		return {
			animationButtons: {
				tokensAnimationRunning: false,
				sequenceAnimationRunning: false,
				repeatAnimationRunning: false,
				keyboardAnimationRunning: false,
				dateAnimationRunning: false
			},
			firstTwentyWordlist:
        '123456,password,12345678,qwerty,123456789,12345,1234,111111,1234567,dragon,123123,baseball,abc123,football,monkey,letmein,shadow,master,696969,mustang'.split(','
        ),
			tokenTransformed: false,
			sequenceClasses: ['sequence1', 'sequence2', 'sequence3', 'sequence4'],
			keyboardPatternArray: [
				'rect5394-9',
				'rect5396-4',
				'rect5398-7',
				'rect5370-8',
				'rect5372-9',
				'rect5346-8',
				'rect5346-9',
				'rect5348-7'
			],
			dateElementVisibility: {
				displayDashes: false,
				displayMessage1: false,
				displayMessage2: false,
				displayMessage3: false
			}
		};
	},
	computed: {},
	methods: {
		handleTokenAnimationButton() {
			if (this.animationButtons.tokensAnimationRunning) {
				return;
			}
			this.startTokensAnimation();
		},
		startTokensAnimation() {
			this.animationButtons.tokensAnimationRunning = true;
			this.resetTokensAnimation();

			//transform to lowercase
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

			for (let i = 0; i < wordIndex + 1; i++) {
				const timeOut = 400 * i + 1500;
				const currentWord = document.getElementById(
					this.firstTwentyWordlist[i]
				);
				wordlist.push(currentWord);

				setTimeout(() => {
					this.toggleHighlight(wordlist, i);
					if (i === wordlist.length - 1) {
						this.animationButtons.tokensAnimationRunning = false;
						this.toggleTokenTransformed();
					}
				}, timeOut);
			}
		},
		toggleHighlight(arr, index) {
			arr[index].classList.add('bg-highlight2');
			if (index > 0) {
				arr[index - 1].classList.remove('bg-highlight2');
			}
		},
		toggleTokenTransformed() {
			this.tokenTransformed = !this.tokenTransformed;
		},
		resetTokensAnimation() {
			if (this.tokenTransformed) {
				this.toggleTokenTransformed();
			}
			const tokenList = document.getElementsByClassName('token');
			Object.keys(tokenList).forEach((token) => {
				tokenList[token].classList.remove('bg-highlight2');
			});
		},

		handleSequenceAnimationButton() {
			if (this.animationButtons.sequenceAnimationRunning) {
				return;
			}
			this.startSequenceAnimation();
		},
		startSequenceAnimation() {
			this.animationButtons.sequenceAnimationRunning = true;
			this.resetSequenceAnimation();

			for (let i = 0; i < this.sequenceClasses.length; i++) {
				const sequenceElements = document.getElementsByClassName(
					'sequence' + (i + 1)
				);
				const timeOutAdd = 1000 * (i + 1);

				setTimeout(() => {
					Object.keys(sequenceElements).forEach((element) => {
						sequenceElements[element].classList.add('text-highlight2');
					});

					if (i === this.sequenceClasses.length - 1) {
						this.animationButtons.sequenceAnimationRunning = false;
					}
				}, timeOutAdd);
			}
		},
		resetSequenceAnimation() {
			const sequenceElements = document.getElementsByTagName('td');
			Object.keys(sequenceElements).forEach((element) => {
				sequenceElements[element].classList.remove('text-hightlight2');
			});
		},
		handleRepeatAnimationButton() {
			if (this.animationButtons.repeatAnimationRunning) {
				return;
			}
			this.startRepeatAnimation();
		},
		startRepeatAnimation() {
			this.animationButtons.repeatAnimationRunning = true;
			this.resetRepeatAnimation();

			const timeOut = 1000;

			setTimeout(() => {
				document.getElementById('repeat2').classList.add('bg-highlight2');
				document.getElementById('repeat3').classList.add('bg-highlight2');
			}, timeOut);

			setTimeout(() => {
				document.getElementById('repeat5').classList.add('bg-highlight2');
				document.getElementById('repeat6').classList.add('bg-highlight2');
			}, 2 * timeOut);

			setTimeout(() => {
				this.resetRepeatAnimation();
			}, 3 * timeOut);

			setTimeout(() => {
				document.getElementById('repeat1').classList.add('bg-highlight2');
				document.getElementById('repeat2').classList.add('bg-highlight2');
				document.getElementById('repeat3').classList.add('bg-highlight2');
			}, 4 * timeOut);

			setTimeout(() => {
				document.getElementById('repeat4').classList.add('bg-highlight2');
				document.getElementById('repeat5').classList.add('bg-highlight2');
				document.getElementById('repeat6').classList.add('bg-highlight2');

				this.animationButtons.repeatAnimationRunning = false;
			}, 5 * timeOut);
		},
		resetRepeatAnimation() {
			const repeatElements = document.getElementsByClassName('repeat');
			Object.keys(repeatElements).forEach((element) => {
				repeatElements[element].classList.remove('bg-highlight2');
			});
		},
		handleKeyboardAnimationButton() {
			if (this.animationButtons.keyboardAnimationRunning) {
				return;
			}
			this.startKeyboardAnimation();
		},
		startKeyboardAnimation() {
			this.animationButtons.keyboardAnimationRunning = true;
			this.resetKeyboardAnimation();

			for (let i = 0; i < this.keyboardPatternArray.length; i++) {
				const timeOut = 500 * (i + 1);

				setTimeout(() => {
					const key = document.getElementById(this.keyboardPatternArray[i]);
					if (key) {
						key.style.fill = '#F1A864';
					}

					if (i === this.keyboardPatternArray.length - 1) {
						this.animationButtons.keyboardAnimationRunning = false;
					}
				}, timeOut);
			}
		},
		resetKeyboardAnimation() {
			this.keyboardPatternArray.forEach((element) => {
				const key = document.getElementById(element);
				if (key) {
					key.style.fill = 'none';
				}
			});
		},
		handleDateAnimationButton() {
			if (this.animationButtons.dateAnimationRunning) {
				return;
			}
			this.startDateAnimation();
		},
		startDateAnimation() {
			this.animationButtons.dateAnimationRunning = true;
			this.resetDateAnimation();
			const timeOut = 1500;

			setTimeout(() => {
				this.dateElementVisibility.displayDashes = true;
			}, timeOut);

			setTimeout(() => {
				this.dateElementVisibility.displayMessage2 = true;
			}, timeOut * 2);

			setTimeout(() => {
				this.dateElementVisibility.displayMessage1 = true;
			}, timeOut * 3);

			setTimeout(() => {
				this.dateElementVisibility.displayMessage3 = true;
			}, timeOut * 4);

			setTimeout(() => {
				document.getElementById('matchedDate').classList.add('bg-highlight2');
				this.animationButtons.dateAnimationRunning = false;
			}, timeOut * 5);
		},
		resetDateAnimation() {
			Object.keys(this.dateElementVisibility).forEach((element) => {
				this.dateElementVisibility[element] = false;
			});
			document.getElementById('matchedDate').classList.remove('bg-highlight2');
		}
	}
};
</script>
