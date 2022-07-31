<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <button
      @click="handleClick()"
      type="button"
      :disabled="isDisabled"
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
		handleClick: { type: Function, default: () => null },
		isDisabled: { type: Boolean, default:false }
	},
	data() {
		return {
			defaultActiveButtonClasses: 'px-4 py-2 border-[1px] border-secondary bg-secondary text-font-light transition delay-75 duration-500 ease-in-out hover:bg-third hover:text-secondary',
			defaultDisabledButtonClasses: 'px-4 py-2 border-[1px] border-secondary bg-secondary text-font-light opacity-50'
		};
	},
	computed: {
		getButtonClasses() {
			if (this.classes && this.classes.length > 0) {
				return this.classes;
			}
			if (this.isDisabled){
				return this.defaultDisabledButtonClasses;
			}

			return this.defaultActiveButtonClasses;
		}
	},
	mounted() {}
};
</script>
