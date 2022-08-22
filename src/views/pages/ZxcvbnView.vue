<template>
  <PageCard :header="'What is Zxcvbn?'">
    <template>
      <main>
        <Paragraph
          paragraph="As we've seen before, creating a strong password isn't easy at all - especially if we take into consideration that the password should preferably be easy to remember too. Given the vast amount of passwords we're confronted with in modern times, it is understandable why we gravitate towards simple and easily memorable passwords and sometimes even reusable. That said, usability plays a huge part in password composition but is widely disregard by common password policies. "
        ></Paragraph>
        <Paragraph
          paragraph="Zxcvbn on the other hand follows a different approach. The password strength estimator was developed by <a href='https://blog.dropbox.com/authors/dan-wheeler' target='_blank' class='underline'>Dan Wheeler</a> and works with a more feasible estimation."
        ></Paragraph>
        <Paragraph paragraph="See for yourself:"></Paragraph>
        <div>
          <div class="mb-4 mt-5">
            <label
              class="mb-2 block text-sm font-bold text-gray-700"
              for="password"
            >
              Password
            </label>
            <input
              class="focus:shadow-outline appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              id="password"
              type="text"
              placeholder="zxcvbn"
              v-model="value"
            />
          </div>
          <div v-if="zxcvbnObject">
            <PasswordResults :zxcvbnObject="zxcvbnObject" />
          </div>
        </div>
        <Paragraph paragraph="Fair enough. But how does Zxcvbn actually work? The algorithm can be devided in three essential parts:"></Paragraph>
        <em>
        <ul>
          <li>Matching</li>
          <li>Estimating</li>
          <li>Searching</li>
        </ul>
        </em>
        <Paragraph paragraph="Let's explore them in the following sections."></Paragraph>
      </main>
    </template>
  </PageCard>
</template>

<script>
import Paragraph from '@/components/text/Paragraph';
const zxcvbn = require('zxcvbn');
import PasswordResults from '@/components/passwordResults/PasswordResults';
import { mapState } from 'vuex';
import PageCard from '@/components/cards/PageCard';

export default {
	components: {
		Paragraph,
		PasswordResults,
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
	}
};
</script>
