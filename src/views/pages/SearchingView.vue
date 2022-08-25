<template>
  <PageCard :header="'Searching: Calculating the overall guesses'">
    <template>
      <main>
        <Paragraph
            paragraph="During the searching phase the algorithm will determine a combination of non overlapping patterns that cover the whole password and also need the least amount of guesses in sum. With that said, Zxcvbn assumes that an attacker already knows which patterns the password consists of. This will result in a slight underestimation in most cases but could be proven to be sufficient especially for very short passwords and very complex ones on the other hand."
        ></Paragraph>


        <em>
          <div class="rounded bg-font-light p-10 mb-10">
            <div class="relative mb-10">
              <div class="relative mb-10">
                <span class="text-third">864</span>
                <span class="text-purple-700">Shad0w</span>
                <span class="text-secondary">211596</span>
              </div>
              <div>
                <span class="text-third">60</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="text-purple-700">68</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="text-secondary">155490</span>
              </div>
            </div>
          </div>
        </em>
        <Paragraph paragraph="Now that we have calculated the guesses count of each pattern, we need to consider that the order is unknown to an attacker. They would have to try every possible combination. Therefore we need to calculate the permutation as the factorial of all three patters. "></Paragraph>
        <em>
          <div class="rounded bg-font-light p-10 mb-10">
          <div class="tex2jax_process text-red-900">
            <div class="relative mb-10">
            <span>$guesses = 60 * 68 * 155490 * 3!$</span>
            </div>
              <div>
            <span>$guesses = 3806395200$</span>
                </div>
          </div>
          </div>
        </em>
        <h2 class="mt-0 mb-6 text-3xl font-medium leading-tight">Time estimation</h2>
        <Paragraph paragraph="With the amount of guesses needed to crack a password, we can then calculate the time to crack depending on the amount of possible guesses per second. ."></Paragraph>
        <em>
          <div class="rounded bg-font-light p-10 mb-10 tex2jax_process">
            <div>
              <div class="relative mb-5">
                <span>online attacks with $10$ guesses per second:</span>
              </div>
              <div class="relative mb-10 text-red-900">
                <span>$timeToCrack = \frac{3806395200}{10} = 12 \text{ years}$</span>
              </div>
              <div class="relative mb-5">
                <span>online attacks with $1*10^{10}$ guesses per second:</span>
              </div>
              <div class="relative mb-10 text-red-900">
                <span>$timeToCrack = \frac{3806395200}{1*10^{10}} = 300 \text{ milliseconds}$</span>
              </div>
            </div>
          </div>
        </em>

        <Paragraph paragraph="This shows that even a guess score with a large magnitude can easily be guesses in less than a second with the right computing power considering the human tendency to use memorable patterns for password composition. "></Paragraph>
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
