<template>
  <PageCard :header="'What is Zxcvbn?'">
    <template>
      <main>
        <Paragraph
          :paragraph="'Zxcvbn is a password strength estimator developed by <a href=\'https://blog.dropbox.com/authors/dan-wheeler\' target=\'_blank\' class=\'underline\'>Dan Wheeler</a>. It is built on the same concepts attackers use and utilizes them into rules for password strength estimation.'"
        />
        <Paragraph
          :paragraph="'The small Zxcvbn library can easily be embedded and will calculate the number of guesses, time to crack and the overall password score for a given password based on certain patterns.'"
        />
        <Paragraph :paragraph="'See for yourself:'" />
        <div>
          <div class="mb-4 mt-5">
            <input
              class="focus:shadow-outline appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="password"
              type="text"
              placeholder="Type in your password"
              v-model="value"
            />
          </div>
          <div v-if="zxcvbnObject">
            <ZxcvbnResults :zxcvbnObject="zxcvbnObject" />
          </div>
        </div>
        <Paragraph
          :paragraph="'Fair enough. But how does Zxcvbn actually work? The algorithm can be divided in three essential parts:'"
        />
        <em>
          <ul class="list-disc pl-10">
            <li>Matching</li>
            <li>Estimating</li>
            <li>Searching</li>
          </ul>
        </em>
        <Paragraph
          :paragraph="'Let\'s explore them in the following sections.'"
        />
      </main>
    </template>
  </PageCard>
</template>

<script>

const zxcvbn = require('zxcvbn');
import Paragraph from '@/components/text/Paragraph';
import ZxcvbnResults from '@/components/zxcvbnResults/ZxcvbnResults';
import PageCard from '@/components/cards/PageCard';
import { mapState } from 'vuex';
import { scrollToTop } from '@/utils/scrollTopTop';

export default {
	components: {
		Paragraph,
		ZxcvbnResults,
		PageCard
	},
	data() {
		return {
			value: ''
		};
	},
	watch: {
		value() {
			this.$store.commit('INIT_ZXCVBN_OBJECT', zxcvbn(this.value));
		}
	},
	computed: {
		...mapState(['zxcvbnObject'])
	},
	created() {
		scrollToTop();
	}
};
</script>
