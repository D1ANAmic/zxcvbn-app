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
			imageSources: []
		};
	},
	computed: {},
	methods: {
		getImageAltText(source) {
			if (! source || ! source.length) {
				return 'undefined';
			}
			const arr = source.split('/');

			return arr[arr.length - 1].split('.')[0];
		},
		populateImages() {
			//webpack function to get all files in a specified folder
			const context = require.context(
				'@/assets/images/dumbPasswords/',
				true,
				/^\.\/.*$/
			);
			console.log(context);
			context
				.keys()
				.forEach((key) =>
					this.imageSources.push(
						//populate imageSources array with image paths
						require(`@/assets/images/dumbPasswords/${key.replace('./', '')}`)
					)
				);
		}
	},
	mounted() {
		this.populateImages();
	}
};
</script>
