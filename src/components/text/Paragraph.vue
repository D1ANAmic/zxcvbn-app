<!-- eslint-disable vue/multi-word-component-names -->
<template>
<p class="text-base font-poppins leading-relaxed text-grey-800 my-12">
  {{ paragraph }}
</p>
</template>

<script>
export default {
	props: {
		paragraph: { type: String, required: true }
	}
};
</script>
