<template>
  <PageCard :header="'Searching: Calculating the overall guesses'">
    <template>
      <main class="tex2jax_process">
        <Paragraph
          :paragraph="'During the searching phase the algorithm will determine a combination of non overlapping patterns that cover the whole password and also need the least amount of guesses in sum. With that said, Zxcvbn assumes that an attacker already knows which patterns the password consists of. This will result in a slight underestimation. However it could be proven to be sufficient especially for very short passwords as well as very complex ones.'"
        />
          <div class="mb-10 rounded bg-font-light p-10 italic">
            <div>
              <div class="relative mb-10 text-xl">
                <span class="text-highlight2">864</span>
                <span class="text-highlight1">Shad0w</span>
                <span class="text-secondary">211596</span>
              </div>
              <ul class="text-xl">
                <span class="text-highlight2">$g = 60$</span>&nbsp;
                <span class="text-highlight1">$g = 68$</span>&nbsp;
                <span class="text-secondary">$g = 155490$</span>
              </ul>
            </div>
          </div>
        <Paragraph
          :paragraph="'Now that we have calculated the guesses count of each pattern, we need to consider that the order is unknown to an attacker. Because of that they would have to try every possible combination. Therefore we need to calculate the permutation as the factorial of all three patterns.'"
        />
          <div class="mb-10 rounded bg-font-light p-10 italic">
            <div class="text-third text-xl">
              <div class="relative mb-10">
                <span>$g_{total} = 60 \cdot 68 \cdot 155490 \cdot 3!$</span>
              </div>
              <div>
                <span>$g_{total} = 2^{32}$</span>
              </div>
            </div>
          </div>
        <h2 class="mt-0 mb-6 text-3xl font-medium leading-tight">
          Time estimation
        </h2>
        <Paragraph
          :paragraph="'With the amount of guesses needed to crack a password Zxcvbn then calculates the time to crack similarly as shown in chapter four. The algorithm comes with the time estimation for two online cracking scenarios and two offline scenarios with different amounts of guesses per second. One of each is shown below.'"
        />
          <div class="mb-10 rounded bg-font-light p-10 italic">
            <div>
              <div class="relative mb-5">
                <span>Online attack with $10$ guesses per second:</span>
              </div>
              <div class="relative mb-10 text-third text-xl">
                <span
                  >$t = \frac{2^{32}}{10} = 12 \text{
                  y}$</span
                >
              </div>
              <div class="relative mb-5">
                <span>Offline attack with $10^{10}$ guesses per second:</span>
              </div>
              <div class="relative mb-10 text-third text-xl">
                <span
                  >$t = \frac{2^{32}}{10^{10}} = 300 \text{
                  ms}$</span
                >
              </div>
            </div>
          </div>
        <h2 class="mt-0 mb-6 text-3xl font-medium leading-tight">
          Scoring
        </h2>
        <Paragraph
            :paragraph="'Based on the number of guesses, Zxcvbn will also calculate a score from $0$ to $4$ with $0$ indicating a very weak and $4$ indicating a very strong password.'"
        />
        <div class="mb-10 rounded bg-font-light p-10 italic">
          <div>
            <div class="relative mb-5 text-xl">
              <table class="w-full">
                <tr class="leading-10">
                  <td>
                    <span class="text-score0">0 (too guessable):</span>
                  </td>
                  <td class="text-left">
                    <span>$0 - 10^3 \text{guesses}$</span>
                  </td>
                </tr>
                <tr class="leading-10">
                  <td>
                    <span class="text-score1">1 (very guessable):</span>
                  </td>
                  <td class="text-left">
                    <span>$10^3 - 10^{6}\text{guesses}$</span>
                  </td>
                </tr>
                <tr class="leading-10">
                  <td>
                    <span class="text-score2">2 (somewhat guessable):</span>
                  </td>
                  <td class="text-left">
                    <span>$10^{6} - 10^{8}\text{guesses}$</span>
                  </td>
                </tr>
                <tr class="leading-10">
                  <td>
                    <span class="text-score3">3 (safely unguessable)</span>
                  <td class="text-left">
                    <span>$10^{8} - 10^{10}\text{guesses}$</span>
                  </td>
                </tr>
                <tr class="leading-10">
                  <td>
                    <span class="text-score4">4 (very unguessable):</span>
                  <td class="text-left">
                    <span>$> 10^{10}\text{guesses}$</span>
                  </td>
                </tr>
              </table>
            </div>

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

export default {
	components: {
		Paragraph,
		PageCard
	},
	methods: {
		initializeMathJaxQueue
	},
	mounted() {
		this.initializeMathJaxQueue(this);
	}
};
</script>
