<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="h-full basis-1/4 rounded-l-3xl bg-secondary p-10 pl-15 text-left">
    <div class="h-full flex flex-col justify-center">
      <ul class="h-1/2 flex flex-col justify-evenly m-auto bg">
        <li v-for="page in pages" :key="page.name" :class="{'bg-primary': page.name === getCurrentPageName}">{{ page.name }}</li>
        <li>Bla</li>
        <li>Bli</li>
        <li>Blubb</li>
        <li>Bla</li>
        <li>Bli</li>
        <li>Blubb</li>
        <li>Bli</li>
        <li>Blubb</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	components:{
	},
	data() {
		return {
		};
	},
	computed: {
		...mapState(['currentPage', 'pages']),
		getCurrentPageName() {
			return this.pages[this.currentPage - 1]['name'];
		}
	},
	methods: {
	},
	created() {
	}
};
</script>
