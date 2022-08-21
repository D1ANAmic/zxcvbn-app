<!-- eslint-disable vue/multi-word-component-names -->
<template>
            <vue-mathjax :formula="formula" :safe="true" :options="options"/>
</template>

<script>


import { VueMathjax } from 'vue-mathjax';

export default {
	components: {
		'vue-mathjax': VueMathjax
	},
	data() {
		return {
			options: {
				skipHtmlTags: [ //  HTML tags that won't be searched for math
					'script', 'noscript', 'style', 'textarea', 'pre',
					'code', 'annotation', 'annotation-xml'
				]
			}
		};
	},
	props: {
		formula: { type: String, required: true }
	}

};
</script>
