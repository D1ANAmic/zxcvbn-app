<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <button
      @click="handleClick()"
      type="button"
      :class="getButtonClasses">
      <slot name="icon"></slot>
      {{ text }}
    </button>
</template>

<script>
export default {
	props: {
		text: { type: String, default: '' },
		classes: { type: String, default: '' },
		handleClick: { type: Function, default: () => null }
	},
	data() {
		return {
			defaultButtonClasses: 'mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
		};
	},
	computed: {
		getButtonClasses() {
			if (this.classes && this.classes.length > 0) {
				return this.classes;
			}

			return this.defaultButtonClasses;
		}
	},
	mounted() {}
};
</script>
