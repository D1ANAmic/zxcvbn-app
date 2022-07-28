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
			defaultButtonClasses: 'px-4 py-2 border-[1px] border-secondary bg-secondary text-font-light transition delay-75 duration-500 ease-in-out hover:bg-third hover:text-secondary'
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
