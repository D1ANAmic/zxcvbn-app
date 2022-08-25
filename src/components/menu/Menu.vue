<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="h-full basis-1/4 rounded-l-3xl bg-secondary p-10 pl-15 text-left text-third">
    <div class="h-full flex flex-col justify-center">
      <ul class="h-1/2 flex flex-col justify-evenly m-auto ">
        <li v-for="page in pages" :key="page.name" class="rounded p-2 cursor-pointer" :class="{'font-extrabold bg-font-light bg-opacity-30': page.name === getCurrentPageName}"><a @click="getPageLink(page)" @keyup.enter="getPageLink(page)">{{ page.name }}</a></li>
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
			return this.pages[this.currentPage - 1].name;
		}
	},
	methods: {
		getPageLink(page) {
			const { pageNumber, path } = page;
			this.$store.commit('SET_CURRENT_PAGE', pageNumber);
			this.$router.push(path);
		}
	},
	created() {
	}
};
</script>
