<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="h-full basis-1/2 max-w-[30%] min-w-[30%] rounded-l-3xl bg-secondary p-10 pl-15 text-left text-third">
    <div class="h-full flex flex-col justify-center">
      <ul class="h-1/2 flex flex-col justify-evenly m-auto ">
        <li v-for="page in pages" :key="page.name" class="rounded p-2 cursor-pointer tracking-wide" :class="{' menu-active font-extrabold tracking-normal': page.name === getCurrentPageName}"
          @click="getPageLink(page)" @keyup.enter="getPageLink(page)">
          <a>{{ page.name }}</a>
        </li>
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
			if (pageNumber === this.currentPage){
				return;
			}
			this.$store.commit('SET_CURRENT_PAGE', pageNumber);
			this.$router.push(path);
		}
	},
	created() {
	}
};
</script>


<style lang="scss">
.menu-active {
  text-shadow: 0 0 10px;
}

</style>
