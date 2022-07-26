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
			defaultButtonClasses: 'rounded-md border px-4 py-2 bg-secondary'
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
