<template>
  <div>
    <div class="mb-4 mt-5">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input
          class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="zxcvbn"
          v-model="value"/>
    </div>
    <div v-if="zxcvbnObject">
      <PasswordResults :zxcvbnObject="zxcvbnObject"/>
    </div>
  </div>
</template>

<script>
const zxcvbn = require('zxcvbn');
import PasswordResults from '@/components/passwordResults/PasswordResults';
import { mapState } from 'vuex';

export default {
	components: {
		PasswordResults
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
		...mapState([
			'zxcvbnObject'
		])
	}
};
</script>
