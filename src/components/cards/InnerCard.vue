<template>
  <div
    class="relative m-auto h-[500px] w-11/12 max-w-sm flex-col justify-center rounded-3xl bg-white p-2.5 lg:flex lg:max-w-full"
  >
    <img
      class="absolute h-4/5 self-center"
      v-for="(source, index) in imageSources"
      :src="source"
      :key="`${source}--${index}`"
      :alt="getImageAltText(source)"
    />
  </div>
</template>

<script>
export default {
	data() {
		return {
			imageSources: [
				require('@/assets/images/dumbPasswords/admiral.png')
				/*				require('@/assets/images/dumbPasswords/adp.png'),
				require('@/assets/images/dumbPasswords/aetna.png'),
				require('@/assets/images/dumbPasswords/aigues_barcelona.png'),
				require('@/assets/images/dumbPasswords/airaisa.png')*/
			]
		};
	},
	computed: {},
	methods: {
		goLeft() {
			console.log('Previous');
		},
		goRight() {
			console.log('Next');
		},
		getImageAltText(source) {
			if (! source || ! source.length) {
				return 'undefined';
			}
			const arr = source.split('/');

			return arr[arr.length - 1].split('.')[0];
		}
	}
};
</script>
