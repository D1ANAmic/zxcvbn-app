<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <p
    class="font-poppins text-grey-800 my-12 text-base leading-relaxed"
    v-html="paragraph"
  ></p>
</template>

<script>
export default {
	props: {
		paragraph: { type: String, required: true }
	}
};
</script>
