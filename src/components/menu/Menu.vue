<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="h-full basis-1/4 rounded-l-3xl bg-secondary p-10 pl-15 text-left">
    <div class="h-full flex flex-col justify-center">
      <ul class="h-1/2 flex flex-col justify-evenly m-auto ">
        <li v-for="page in pages" :key="page.name" class="rounded p-2" :class="{'font-extrabold bg-primary': page.name === getCurrentPageName}">{{ page.name }}</li>
        <li class="rounded p-2">Bla</li>
        <li class="rounded p-2">Bli</li>
        <li class="rounded p-2">Blubb</li>
        <li class="rounded p-2">Bla</li>
        <li class="rounded p-2">Bli</li>
        <li class="rounded p-2">Blubb</li>
        <li class="rounded p-2">Bli</li>
        <li class="rounded p-2">Blubb</li>
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
